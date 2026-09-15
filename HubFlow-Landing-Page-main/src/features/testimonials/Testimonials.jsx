import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Card from '@/components/ui/Card'
import { TESTIMONIALS } from '@/lib/constants'
import { staggerContainer, fadeInItem } from '@/hooks/useScrollAnimation'

export default function Testimonials() {
  return (
    <section className="bg-surface-50 py-24 dark:bg-surface-900/40">
      <div className="section-container">
        <SectionHeading eyebrow="Testimonials" title="Loved by fast-moving teams" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {TESTIMONIALS.map((t) => (
            <motion.div key={t.name} variants={fadeInItem}>
              <Card className="h-full">
                <Quote className="h-6 w-6 text-brand-300 dark:text-brand-700" />
                <p className="mt-4 text-base leading-relaxed text-surface-700 dark:text-surface-200">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-sm font-semibold text-brand-700 dark:bg-brand-950 dark:text-brand-300">
                    {t.name.split(' ').map((n) => n[0]).join('')}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-surface-900 dark:text-white">{t.name}</p>
                    <p className="text-xs text-surface-500 dark:text-surface-400">{t.role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
