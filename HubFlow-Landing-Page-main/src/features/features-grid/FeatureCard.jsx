import * as Icons from 'lucide-react'
import { motion } from 'framer-motion'
import Card from '@/components/ui/Card'
import { fadeInItem } from '@/hooks/useScrollAnimation'

export default function FeatureCard({ icon, title, description }) {
  const Icon = Icons[icon] ?? Icons.Sparkles

  return (
    <motion.div variants={fadeInItem}>
      <Card hoverable className="h-full">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-950 dark:text-brand-400">
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="mt-4 text-lg font-semibold text-surface-900 dark:text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-surface-500 dark:text-surface-400">{description}</p>
      </Card>
    </motion.div>
  )
}
