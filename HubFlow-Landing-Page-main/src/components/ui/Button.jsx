import { forwardRef } from 'react'

const VARIANT_STYLES = {
  primary:
    'bg-brand-600 text-white hover:bg-brand-700 shadow-glow focus-visible:ring-brand-500',
  secondary:
    'bg-surface-100 text-surface-800 hover:bg-surface-200 dark:bg-surface-800 dark:text-surface-100 dark:hover:bg-surface-700',
  outline:
    'border border-surface-300 text-surface-800 hover:bg-surface-50 dark:border-surface-700 dark:text-surface-100 dark:hover:bg-surface-800',
  ghost:
    'text-surface-700 hover:bg-surface-100 dark:text-surface-200 dark:hover:bg-surface-800',
}

const SIZE_STYLES = {
  sm: 'px-3.5 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3.5 text-base',
}


const Button = forwardRef(function Button(
  {
    as: Component = 'button',
    variant = 'primary',
    size = 'md',
    icon: Icon,
    iconPosition = 'right',
    className = '',
    children,
    ...props
  },
  ref,
) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ' +
    'dark:focus-visible:ring-offset-surface-950 disabled:opacity-50 disabled:pointer-events-none'

  return (
    <Component
      ref={ref}
      className={`${baseStyles} ${VARIANT_STYLES[variant]} ${SIZE_STYLES[size]} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="h-4 w-4" aria-hidden="true" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="h-4 w-4" aria-hidden="true" />}
    </Component>
  )
})

export default Button
