import { motion } from 'framer-motion'
import { TRUSTED_COMPANIES } from '@/lib/constants'

/**
 * Infinite horizontal marquee of trusted company names.
 * The list is duplicated once so the CSS animation (translateX -50%) loops seamlessly.
 */
export default function TrustedCompanies() {
  const companies = [...TRUSTED_COMPANIES, ...TRUSTED_COMPANIES]

  return (
    <section className="border-y border-surface-200 bg-surface-50 py-10 dark:border-surface-800 dark:bg-surface-900/40">
      <div className="section-container">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-6 text-center text-sm font-medium text-surface-500 dark:text-surface-400"
        >
          Trusted by 2,000+ growing businesses
        </motion.p>
      </div>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-surface-50 to-transparent dark:from-surface-900/40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-surface-50 to-transparent dark:from-surface-900/40" />

        <div className="flex w-max animate-marquee gap-16">
          {companies.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="whitespace-nowrap text-xl font-semibold text-surface-300 dark:text-surface-600"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
