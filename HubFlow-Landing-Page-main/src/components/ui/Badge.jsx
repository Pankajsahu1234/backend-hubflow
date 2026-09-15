// Small pill label used for section eyebrows ("FEATURES") and card tags ("Most Popular")
export default function Badge({ children, variant = 'default', className = '' }) {
  const styles = {
    default: 'bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-300',
    solid: 'bg-brand-600 text-white',
    outline: 'border border-surface-300 text-surface-600 dark:border-surface-700 dark:text-surface-300',
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${styles[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
