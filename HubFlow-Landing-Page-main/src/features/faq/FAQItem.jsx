import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeInItem } from '@/hooks/useScrollAnimation'

export default function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div variants={fadeInItem} className="border-b border-surface-200 dark:border-surface-800">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-base font-medium text-surface-900 dark:text-white">{question}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-surface-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-sm leading-relaxed text-surface-500 dark:text-surface-400">{answer}</p>
      </motion.div>
    </motion.div>
  )
}
