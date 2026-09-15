// ─── Navigation ──────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Integrations', href: '#integrations' },
  { label: 'Resources', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

// ─── Trusted Companies ───────────────────────────────────────────────────

export const TRUSTED_COMPANIES = [
  'Northwind', 'Lumina', 'Vertex Retail', 'Orbital', 'Cascade Health',
  'Fintra', 'Beacon Logistics', 'Marrow Studio', 'Kepler & Co', 'Driftline',
]

// Icon names map to lucide-react components, resolved in the FeatureCard component.

export const FEATURES = [
  {
    icon: 'Users',
    title: 'CRM',
    description: 'Track leads, deals and customer history in one shared pipeline your whole team can see.',
  },
  {
    icon: 'Bot',
    title: 'AI Assistant',
    description: 'A trained assistant that answers customer questions, qualifies leads and drafts replies for you.',
  },
  {
    icon: 'MessageCircle',
    title: 'WhatsApp Automation',
    description: 'Send broadcasts, automate replies and run drip campaigns directly on WhatsApp Business.',
  },
  {
    icon: 'Workflow',
    title: 'Workflow Builder',
    description: 'Drag-and-drop automations that trigger on events \u2014 no code, no engineering tickets required.',
  },
  {
    icon: 'UserCog',
    title: 'HRMS',
    description: 'Manage attendance, leave, payroll and onboarding for your whole team from one dashboard.',
  },
  {
    icon: 'BarChart3',
    title: 'Reports',
    description: 'Real-time dashboards on revenue, team performance and campaign ROI \u2014 no spreadsheets.',
  },
  {
    icon: 'CreditCard',
    title: 'Billing',
    description: 'Automated invoicing, subscription billing and payment reminders that run themselves.',
  },
  {
    icon: 'LineChart',
    title: 'Analytics',
    description: 'Understand what\u2019s working with funnel, cohort and retention analytics built in.',
  },
]

// ─── Automation Workflow Steps ───────────────────────────────────────────

export const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Connect your tools',
    description: 'Link WhatsApp, email, your CRM data and calendar in a few clicks \u2014 no engineering required.',
  },
  {
    step: '02',
    title: 'Build your workflow',
    description: 'Drag triggers, conditions and actions onto a canvas to design exactly how your business should respond.',
  },
  {
    step: '03',
    title: 'Let Hubflow run it',
    description: 'Once published, Hubflow executes your workflow 24/7 \u2014 messaging leads, updating records, alerting your team.',
  },
  {
    step: '04',
    title: 'Review & optimize',
    description: 'Built-in analytics show what\u2019s converting so you can refine the workflow without guesswork.',
  },
]

// ─── Pricing Plans ─────────────────────────────────────────

export const PRICING_PLANS = [
  {
    name: 'Starter',
    price: '$29',
    period: '/month',
    description: 'For small teams getting started with automation.',
    features: [
      'Up to 3 team members',
      'CRM with 1,000 contacts',
      'Basic workflow builder',
      'WhatsApp automation (500 msgs/mo)',
      'Email support',
    ],
    highlighted: false,
    cta: 'Start free trial',
  },
  {
    name: 'Business',
    price: '$89',
    period: '/month',
    description: 'For growing teams that need full automation.',
    features: [
      'Up to 20 team members',
      'CRM with unlimited contacts',
      'Advanced workflow builder',
      'WhatsApp automation (10,000 msgs/mo)',
      'AI Assistant included',
      'HRMS & payroll',
      'Priority support',
    ],
    highlighted: true,
    cta: 'Start free trial',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For organizations with advanced security & scale needs.',
    features: [
      'Unlimited team members',
      'Dedicated infrastructure',
      'Custom workflow limits',
      'SSO & advanced permissions',
      'Dedicated account manager',
      '99.9% uptime SLA',
    ],
    highlighted: false,
    cta: 'Talk to sales',
  },
]

// ─── Testimonials ─────────────────────────────────────────────────────────

export const TESTIMONIALS = [
  {
    quote: 'We replaced four separate tools with Hubflow. Our response time to leads dropped from hours to minutes.',
    name: 'Ariana Cole',
    role: 'Head of Growth, Northwind',
  },
  {
    quote: 'The workflow builder alone saved our ops team about fifteen hours a week. It just runs in the background now.',
    name: 'Devon Marsh',
    role: 'COO, Cascade Health',
  },
  {
    quote: 'Our WhatsApp campaigns used to be manual and messy. Now they\u2019re scheduled, segmented, and actually convert.',
    name: 'Priya Nair',
    role: 'Marketing Lead, Fintra',
  },
  {
    quote: 'Support tickets dropped by a third after we turned on the AI assistant. It genuinely resolves things.',
    name: 'Marcus Webb',
    role: 'Customer Experience Manager, Orbital',
  },
]

// ─── FAQ ───────────────────────────────────────────────────────────────

export const FAQS = [
  {
    question: 'Do I need technical skills to use Hubflow?',
    answer: 'No. The workflow builder is fully drag-and-drop, and our onboarding team helps you set up your first automations during your trial.',
  },
  {
    question: 'Can I migrate my existing CRM data?',
    answer: 'Yes \u2014 Hubflow supports CSV import and has direct migration tools for the most common CRM platforms. Our support team can assist with larger migrations.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'Every plan starts with a 14-day free trial, no credit card required. You can upgrade, downgrade or cancel at any time.',
  },
  {
    question: 'How does WhatsApp automation billing work?',
    answer: 'Each plan includes a monthly message allowance. Additional messages are billed per conversation at standard WhatsApp Business API rates.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes. Data is encrypted in transit and at rest, and Enterprise plans include SSO, audit logs and custom data residency options.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes, all plans are month-to-month with no long-term contract required. Enterprise plans can opt into annual billing for a discount.',
  },
]

// ─── Footer ───────────────────────────────────────────────────────────

export const FOOTER_LINKS = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Integrations', href: '#integrations' },
    { label: 'Changelog', href: '#' },
  ],
  Company: [
    { label: 'About', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Contact', href: '#contact' },
  ],
  Resources: [
    { label: 'Documentation', href: '#' },
    { label: 'Help Center', href: '#faq' },
    { label: 'API Reference', href: '#' },
    { label: 'Community', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Security', href: '#' },
  ],
}

export const SOCIAL_LINKS = [
  { icon: 'Twitter', href: 'https://twitter.com', label: 'Twitter' },
  { icon: 'Linkedin', href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: 'Github', href: 'https://github.com', label: 'GitHub' },
  { icon: 'Youtube', href: 'https://youtube.com', label: 'YouTube' },
]
