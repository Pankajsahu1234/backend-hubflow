import { Check } from 'lucide-react'
import { motion } from 'framer-motion'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { fadeInItem } from '@/hooks/useScrollAnimation'

export default function PricingCard({ name, price, period, description, features, highlighted, cta }) {
  return (
    <motion.div variants={fadeInItem} className={highlighted ? 'lg:-my-4' : ''}>
      <Card
        hoverable
        className={`flex h-full flex-col ${
          highlighted ? 'border-brand-500 ring-2 ring-brand-500 dark:border-brand-500' : ''
        }`}
      >
        {highlighted && (
          <Badge variant="solid" className="mb-4 w-fit">
            Most popular
          </Badge>
        )}
        <h3 className="text-lg font-semibold text-surface-900 dark:text-white">{name}</h3>
        <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">{description}</p>

        <div className="mt-6 flex items-baseline gap-1">
          <span className="text-4xl font-bold text-surface-900 dark:text-white">{price}</span>
          {period && <span className="text-sm text-surface-500 dark:text-surface-400">{period}</span>}
        </div>

        <Button variant={highlighted ? 'primary' : 'outline'} size="md" className="mt-6 w-full">
          {cta}
        </Button>

        <ul className="mt-8 flex flex-1 flex-col gap-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm text-surface-600 dark:text-surface-300">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
              {feature}
            </li>
          ))}
        </ul>
      </Card>
    </motion.div>
  )
}
