// Reusable surface container — consistent border/shadow/radius/dark-mode treatment
export default function Card({ children, className = '', hoverable = false }) {
  return (
    <div
      className={`rounded-2xl border border-surface-200 bg-white p-6 shadow-card dark:border-surface-800 dark:bg-surface-900 ${
        hoverable ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-glow' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}
