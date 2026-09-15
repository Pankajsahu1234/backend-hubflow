import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import { WORKFLOW_STEPS } from '@/lib/constants'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function AutomationWorkflow() {
  return (
    <section id="integrations" className="bg-surface-50 py-24 dark:bg-surface-900/40">
      <div className="section-container">
        <SectionHeading
          eyebrow="How it works"
          title="From setup to autopilot in four steps"
          subtitle="No engineering team required — build a workflow once and let Hubflow run it continuously."
        />

        <div className="relative mt-16 grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Connecting line for desktop */}
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-surface-200 dark:bg-surface-700 md:block" aria-hidden="true" />

          {WORKFLOW_STEPS.map((step, index) => {
            const fadeUp = useScrollAnimation(index * 0.1)
            return (
              <motion.div key={step.step} {...fadeUp} className="relative flex flex-col items-start gap-4">
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                  {step.step}
                </span>
                <h3 className="text-lg font-semibold text-surface-900 dark:text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed text-surface-500 dark:text-surface-400">{step.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
