import { Zap, Twitter, Linkedin, Github, Youtube } from 'lucide-react'
import { FOOTER_LINKS, SOCIAL_LINKS } from '@/lib/constants'

const SOCIAL_ICONS = { Twitter, Linkedin, Github, Youtube }

export default function Footer() {
  return (
    <footer className="border-t border-surface-200 bg-surface-50 dark:border-surface-800 dark:bg-surface-950">
      <div className="section-container py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2">
            <div className="flex items-center gap-2 font-display text-lg font-bold text-surface-900 dark:text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white">
                <Zap className="h-4.5 w-4.5" />
              </span>
              Hubflow
            </div>
            <p className="mt-4 max-w-xs text-sm text-surface-500 dark:text-surface-400">
              AI-powered automation for CRM, marketing, chatbots and HR — built for teams that want to scale without the busywork.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIAL_LINKS.map(({ icon, href, label }) => {
                const Icon = SOCIAL_ICONS[icon]
                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-surface-200 text-surface-500 transition-colors hover:border-brand-300 hover:text-brand-600 dark:border-surface-800 dark:text-surface-400 dark:hover:text-brand-400"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-sm font-semibold text-surface-900 dark:text-white">{section}</h4>
              <ul className="mt-4 flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-surface-500 transition-colors hover:text-brand-600 dark:text-surface-400 dark:hover:text-brand-400"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-surface-200 pt-8 dark:border-surface-800 sm:flex-row">
          <p className="text-sm text-surface-500 dark:text-surface-400">
            © {new Date().getFullYear()} Hubflow, Inc. All rights reserved.
          </p>
          <p className="text-sm text-surface-500 dark:text-surface-400">Built for teams that automate everything.</p>
        </div>
      </div>
    </footer>
  )
}
