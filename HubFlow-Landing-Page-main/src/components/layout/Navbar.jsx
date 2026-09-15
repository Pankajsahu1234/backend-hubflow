import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Zap, ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import ThemeToggle from './ThemeToggle'
import { NAV_LINKS } from '@/lib/constants'

/**
 * Responsive navbar: sticky, gains a blurred background after scrolling,
 * collapses into a slide-down mobile menu below the `lg` breakpoint.
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close the mobile menu automatically if the viewport grows past the breakpoint
  useEffect(() => {
    const handleResize = () => window.innerWidth >= 1024 && setIsMobileOpen(false)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'border-b border-surface-200 bg-white/80 backdrop-blur-lg dark:border-surface-800 dark:bg-surface-950/80'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-container flex h-16 items-center justify-between" aria-label="Main navigation">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold text-surface-900 dark:text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white">
            <Zap className="h-4.5 w-4.5" />
          </span>
          Hubflow
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-surface-600 transition-colors hover:text-surface-900 dark:text-surface-300 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Button as="a" href="#login" variant="ghost" size="sm">
            Login
          </Button>
          <Button as="a" href="#pricing" variant="primary" size="sm" icon={ArrowRight}>
            Get Started
          </Button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsMobileOpen((open) => !open)}
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileOpen}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-surface-700 hover:bg-surface-100 dark:text-surface-200 dark:hover:bg-surface-800"
          >
            {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      {isMobileOpen && (
        <div className="border-t border-surface-200 bg-white px-6 pb-6 pt-2 dark:border-surface-800 dark:bg-surface-950 lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-surface-600 hover:bg-surface-100 dark:text-surface-300 dark:hover:bg-surface-800"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <Button as="a" href="#login" variant="outline" size="sm">
              Login
            </Button>
            <Button as="a" href="#pricing" variant="primary" size="sm" icon={ArrowRight}>
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
