import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import FeatureCard from './FeatureCard'
import { FEATURES } from '@/lib/constants'
import { staggerContainer } from '@/hooks/useScrollAnimation'

export default function FeaturesGrid() {
  return (
    <section id="features" className="section-container py-24">
      <SectionHeading
        eyebrow="Features"
        title="Everything your business needs, in one place"
        subtitle="Stop stitching together five different tools. Hubflow brings CRM, automation, AI and reporting under one roof."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {FEATURES.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </motion.div>
    </section>
  )
}
