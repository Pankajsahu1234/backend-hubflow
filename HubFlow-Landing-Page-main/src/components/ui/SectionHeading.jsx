import Badge from './Badge'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

/**
 * Standardized section header: eyebrow badge + title + optional subtitle.
 * Used at the top of every landing page section for visual consistency.
 */
export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  const fadeUp = useScrollAnimation()
  const alignment = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start'

  return (
    <motion.div {...fadeUp} className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      {eyebrow && <Badge>{eyebrow}</Badge>}
      <h2 className="text-3xl font-bold text-surface-900 dark:text-white sm:text-4xl">{title}</h2>
      {subtitle && <p className="text-lg text-surface-500 dark:text-surface-400">{subtitle}</p>}
    </motion.div>
  )
}
