import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import FAQItem from './FAQItem'
import { FAQS } from '@/lib/constants'
import { staggerContainer } from '@/hooks/useScrollAnimation'

export default function FAQ() {
  return (
    <section id="faq" className="section-container py-24">
      <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="mx-auto mt-14 max-w-2xl"
      >
        {FAQS.map((faq) => (
          <FAQItem key={faq.question} {...faq} />
        ))}
      </motion.div>
    </section>
  )
}
