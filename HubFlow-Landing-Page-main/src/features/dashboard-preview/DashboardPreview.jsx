import { motion } from 'framer-motion'
import { Users, MessageCircle, TrendingUp, Bot } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Card from '@/components/ui/Card'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const STATS = [
  { icon: Users, label: 'Active leads', value: '3,428', change: '+12.4%' },
  { icon: MessageCircle, label: 'WhatsApp conversations', value: '892', change: '+8.1%' },
  { icon: Bot, label: 'AI resolutions', value: '1,204', change: '+21.6%' },
  { icon: TrendingUp, label: 'Pipeline value', value: '$284K', change: '+5.9%' },
]

export default function DashboardPreview() {
  const fadeUp = useScrollAnimation()

  return (
    <section className="section-container py-24">
      <SectionHeading
        eyebrow="Dashboard"
        title="See your whole business, at a glance"
        subtitle="One dashboard for pipeline, conversations and team performance — updated in real time."
      />

      <motion.div {...fadeUp} className="mt-14 overflow-hidden rounded-2xl border border-surface-200 bg-white shadow-xl dark:border-surface-800 dark:bg-surface-900">
        <div className="grid grid-cols-1 gap-px bg-surface-200 dark:bg-surface-800 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map(({ icon: Icon, label, value, change }) => (
            <div key={label} className="bg-white p-6 dark:bg-surface-900">
              <div className="flex items-center justify-between">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600 dark:bg-brand-950 dark:text-brand-400">
                  <Icon className="h-4.5 w-4.5" />
                </span>
                <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">{change}</span>
              </div>
              <p className="mt-4 text-2xl font-bold text-surface-900 dark:text-white">{value}</p>
              <p className="text-sm text-surface-500 dark:text-surface-400">{label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 p-6 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <p className="text-sm font-semibold text-surface-900 dark:text-white">Revenue trend</p>
            <div className="mt-4 flex h-40 items-end gap-2">
              {[40, 65, 50, 80, 60, 95, 75, 88, 70, 100, 85, 92].map((height, i) => (
                <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-brand-600 to-brand-400" style={{ height: `${height}%` }} />
              ))}
            </div>
          </Card>
          <Card>
            <p className="text-sm font-semibold text-surface-900 dark:text-white">Top channels</p>
            <div className="mt-4 space-y-4">
              {[
                { label: 'WhatsApp', percent: 62 },
                { label: 'Email', percent: 24 },
                { label: 'Website chat', percent: 14 },
              ].map((row) => (
                <div key={row.label}>
                  <div className="mb-1.5 flex justify-between text-xs text-surface-500 dark:text-surface-400">
                    <span>{row.label}</span>
                    <span>{row.percent}%</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-surface-100 dark:bg-surface-800">
                    <div className="h-1.5 rounded-full bg-brand-500" style={{ width: `${row.percent}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </motion.div>
    </section>
  )
}
