import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import PricingCard from './PricingCard'
import { PRICING_PLANS } from '@/lib/constants'
import { staggerContainer } from '@/hooks/useScrollAnimation'

export default function Pricing() {
  return (
    <section id="pricing" className="section-container py-24">
      <SectionHeading
        eyebrow="Pricing"
        title="Simple pricing that scales with you"
        subtitle="Start free for 14 days. No credit card required. Upgrade or cancel anytime."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3"
      >
        {PRICING_PLANS.map((plan) => (
          <PricingCard key={plan.name} {...plan} />
        ))}
      </motion.div>
    </section>
  )
}
