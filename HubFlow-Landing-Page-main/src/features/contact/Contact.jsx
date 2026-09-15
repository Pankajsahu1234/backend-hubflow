import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, CheckCircle2, AlertCircle } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import apiClient from '@/lib/axios'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const INITIAL_FORM = { name: '', email: '', company: '', message: '' }

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Name is required'
  if (!form.email.trim()) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Enter a valid email address'
  }
  if (!form.message.trim()) errors.message = 'Tell us a little about what you need'
  return errors
}

export default function Contact() {
  const fadeUp = useScrollAnimation()
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [serverError, setServerError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate(form)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setStatus('submitting')
    setServerError('')
    try {
      await apiClient.post('/leads', form)
      setStatus('success')
      setForm(INITIAL_FORM)
    } catch (err) {
      setStatus('error')
      setServerError(err.message || 'Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="bg-surface-50 py-24 dark:bg-surface-900/40">
      <div className="section-container grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
        <motion.div {...fadeUp}>
          <SectionHeading
            align="left"
            eyebrow="Contact"
            title="Let's talk about your automation"
            subtitle="Tell us about your team and we'll show you exactly how Hubflow fits in — no generic demo, just your use case."
          />
          <div className="mt-8 flex items-center gap-3 text-sm text-surface-600 dark:text-surface-300">
            <Mail className="h-4 w-4 text-brand-500" />
            hello@hubflow.ai
          </div>
        </motion.div>

        <motion.form
          {...fadeUp}
          onSubmit={handleSubmit}
          noValidate
          className="rounded-2xl border border-surface-200 bg-white p-6 shadow-card dark:border-surface-800 dark:bg-surface-900 sm:p-8"
        >
          {status === 'success' ? (
            <div className="flex flex-col items-center gap-3 py-10 text-center">
              <CheckCircle2 className="h-10 w-10 text-emerald-500" />
              <p className="text-lg font-semibold text-surface-900 dark:text-white">Message sent</p>
              <p className="text-sm text-surface-500 dark:text-surface-400">
                Thanks for reaching out — our team will get back to you within one business day.
              </p>
              <Button variant="outline" size="sm" className="mt-2" onClick={() => setStatus('idle')}>
                Send another message
              </Button>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Full name" name="name" value={form.name} onChange={handleChange} error={errors.name} />
                <Field label="Work email" name="email" type="email" value={form.email} onChange={handleChange} error={errors.email} />
              </div>
              <Field label="Company (optional)" name="company" value={form.company} onChange={handleChange} />
              <Field
                label="How can we help?"
                name="message"
                as="textarea"
                rows={4}
                value={form.message}
                onChange={handleChange}
                error={errors.message}
              />

              {status === 'error' && (
                <div className="flex items-center gap-2 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600 dark:bg-red-950/40 dark:text-red-400">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  {serverError}
                </div>
              )}

              <Button type="submit" variant="primary" size="lg" icon={Send} disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending…' : 'Send message'}
              </Button>
            </div>
          )}
        </motion.form>
      </div>
    </section>
  )
}

/** Small local form field — kept private to Contact since it's not reused elsewhere */
function Field({ label, name, type = 'text', as = 'input', value, onChange, error, rows }) {
  const Component = as
  const inputStyles =
    'w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-surface-900 placeholder:text-surface-400 focus:outline-none focus:ring-2 focus:ring-brand-500 dark:bg-surface-950 dark:text-white ' +
    (error ? 'border-red-400' : 'border-surface-300 dark:border-surface-700')

  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-surface-700 dark:text-surface-200">
        {label}
      </label>
      <Component
        id={name}
        name={name}
        type={as === 'input' ? type : undefined}
        rows={rows}
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className={inputStyles}
      />
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  )
}
