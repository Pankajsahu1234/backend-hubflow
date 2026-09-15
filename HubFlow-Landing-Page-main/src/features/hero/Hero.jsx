import { motion } from 'framer-motion'
import { ArrowRight, PlayCircle, TrendingUp, MessageSquare, CheckCircle2 } from 'lucide-react'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

/** Floating stat card layered over the dashboard mockup for visual depth */
function FloatingCard({ icon: Icon, label, value, className, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      className={`absolute hidden animate-float items-center gap-3 rounded-xl border border-surface-200 bg-white/90 p-3 shadow-card backdrop-blur dark:border-surface-700 dark:bg-surface-900/90 md:flex ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600 dark:bg-brand-950 dark:text-brand-400">
        <Icon className="h-4.5 w-4.5" />
      </span>
      <div>
        <p className="text-xs text-surface-500 dark:text-surface-400">{label}</p>
        <p className="text-sm font-semibold text-surface-900 dark:text-white">{value}</p>
      </div>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 sm:pt-24">
      {/* Subtle grid background + radial glow, purely decorative */}
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-30" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="section-container relative flex flex-col items-center pb-20 text-center">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Badge>Now with AI Workflow Suggestions</Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 max-w-3xl text-4xl font-bold leading-tight text-surface-900 dark:text-white sm:text-5xl lg:text-6xl"
        >
          Run your business on <span className="text-brand-600 dark:text-brand-400">autopilot</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 max-w-xl text-lg text-surface-500 dark:text-surface-400"
        >
          Hubflow unifies CRM, WhatsApp marketing, AI chatbots and workflow automation into one platform — so your team spends less time on busywork.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <Button variant="primary" size="lg" icon={ArrowRight}>
            Start free trial
          </Button>
          <Button variant="outline" size="lg" icon={PlayCircle} iconPosition="left">
            Watch demo
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4 text-xs text-surface-400 dark:text-surface-500"
        >
          No credit card required · 14-day free trial
        </motion.p>

        {/* Dashboard mockup + floating cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mt-16 w-full max-w-4xl"
        >
          <div className="overflow-hidden rounded-2xl border border-surface-200 bg-white shadow-2xl dark:border-surface-800 dark:bg-surface-900">
            <div className="flex items-center gap-1.5 border-b border-surface-200 bg-surface-50 px-4 py-3 dark:border-surface-800 dark:bg-surface-900">
              <span className="h-2.5 w-2.5 rounded-full bg-accent-rose" />
              <span className="h-2.5 w-2.5 rounded-full bg-accent-amber" />
              <span className="h-2.5 w-2.5 rounded-full bg-accent-teal" />
            </div>
            <div className="grid grid-cols-3 gap-4 p-6">
              <div className="col-span-2 space-y-3">
                <div className="h-4 w-1/3 rounded bg-surface-200 dark:bg-surface-700" />
                <div className="h-28 rounded-xl bg-gradient-to-br from-brand-100 to-brand-50 dark:from-surface-800 dark:to-surface-800" />
                <div className="flex gap-3">
                  <div className="h-16 flex-1 rounded-lg bg-surface-100 dark:bg-surface-800" />
                  <div className="h-16 flex-1 rounded-lg bg-surface-100 dark:bg-surface-800" />
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-4 w-2/3 rounded bg-surface-200 dark:bg-surface-700" />
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-2 rounded-lg border border-surface-200 p-2 dark:border-surface-700">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-500" />
                    <div className="h-2.5 w-full rounded bg-surface-200 dark:bg-surface-700" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <FloatingCard icon={TrendingUp} label="Revenue this month" value="$48,200" className="-left-10 top-10" delay={0.2} />
          <FloatingCard icon={MessageSquare} label="WhatsApp replies sent" value="1,204 today" className="-right-8 bottom-6" delay={0.6} />
        </motion.div>
      </div>
    </section>
  )
}
