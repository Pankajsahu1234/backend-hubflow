import { lazy, Suspense } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/features/hero/Hero'
import TrustedCompanies from '@/features/trusted-companies/TrustedCompanies'


const FeaturesGrid = lazy(() => import('@/features/features-grid/FeaturesGrid'))
const AutomationWorkflow = lazy(() => import('@/features/automation-workflow/AutomationWorkflow'))
const DashboardPreview = lazy(() => import('@/features/dashboard-preview/DashboardPreview'))
const Pricing = lazy(() => import('@/features/pricing/Pricing'))
const Testimonials = lazy(() => import('@/features/testimonials/Testimonials'))
const FAQ = lazy(() => import('@/features/faq/FAQ'))
const Contact = lazy(() => import('@/features/contact/Contact'))

function SectionFallback() {
  return <div className="h-40 w-full animate-pulse bg-surface-50 dark:bg-surface-900/40" aria-hidden="true" />
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-surface-950">
      <Navbar />
      <main>
        <Hero />
        <TrustedCompanies />
        <Suspense fallback={<SectionFallback />}>
          <FeaturesGrid />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <AutomationWorkflow />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <DashboardPreview />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Pricing />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <FAQ />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
