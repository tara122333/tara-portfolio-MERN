export type ProjectCategory = 'AI' | 'SaaS' | 'Full-Stack' | 'Integrations'

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  category: ProjectCategory[]
  tech: string[]
  github?: string
  demo?: string
  highlight?: string
  gradient: string
}

export const projects: Project[] = [
  {
    id: 'ai-travel-assistant',
    title: 'AI Travel Assistant',
    description:
      'An LLM-powered concierge that books, recommends, and answers travel questions in real time.',
    longDescription:
      'Multi-turn travel agent built on a retrieval pipeline over PMS, listing, and guest data. Streaming responses, tool-use, and memory.',
    category: ['AI', 'SaaS'],
    tech: ['React', 'Node.js', 'OpenAI', 'PostgreSQL', 'Redis'],
    github: '#',
    demo: '#',
    highlight: 'LLM + RAG',
    gradient: 'from-orange-500/30 via-amber-400/20 to-rose-500/30',
  },
  {
    id: 'guest-communication',
    title: 'Guest Communication Platform',
    description:
      'Omni-channel messaging across SMS, WhatsApp, email and chat — with AI-suggested replies.',
    longDescription:
      'Real-time inbox with WebSocket fan-out, message threading, and per-channel routing rules.',
    category: ['SaaS', 'Full-Stack'],
    tech: ['React', 'WebSockets', 'Node.js', 'PostgreSQL', 'Twilio'],
    github: '#',
    demo: '#',
    highlight: 'Real-time',
    gradient: 'from-cyan-400/30 via-sky-500/20 to-violet-500/30',
  },
  {
    id: 'tv-management',
    title: 'TV Management Platform',
    description:
      'Provision, brand, and monitor in-room TVs across thousands of hospitality properties.',
    longDescription:
      'Remote configuration, OTA deploys, analytics, and per-property branding from a single console.',
    category: ['SaaS', 'Full-Stack'],
    tech: ['React', 'TypeScript', 'Node.js', 'AWS', 'PostgreSQL'],
    github: '#',
    demo: '#',
    highlight: 'IoT scale',
    gradient: 'from-violet-500/30 via-fuchsia-500/20 to-pink-500/30',
  },
  {
    id: 'food-delivery',
    title: 'Food Delivery Application',
    description:
      'Customer + courier + restaurant apps with live tracking, dispatch, and Stripe payouts.',
    longDescription:
      'Geospatial dispatch algorithm, push notifications, and partner dashboards.',
    category: ['Full-Stack'],
    tech: ['React Native', 'Node.js', 'PostgreSQL', 'Stripe', 'Mapbox'],
    github: '#',
    demo: '#',
    highlight: 'Geospatial',
    gradient: 'from-emerald-400/30 via-teal-500/20 to-cyan-500/30',
  },
  {
    id: 'billing-platform',
    title: 'Subscription Billing Platform',
    description:
      'Stripe-backed metered billing with plans, add-ons, proration, and self-serve checkout.',
    longDescription:
      'Customer portal, invoice rendering, usage events, and webhooks reconciliation pipeline.',
    category: ['SaaS'],
    tech: ['React', 'Stripe', 'Node.js', 'PostgreSQL'],
    github: '#',
    demo: '#',
    highlight: 'Stripe',
    gradient: 'from-amber-400/30 via-orange-500/20 to-red-500/30',
  },
  {
    id: 'pms-integrations',
    title: 'PMS Integration System',
    description:
      'Unified abstraction over 6+ property management systems — listings, bookings, calendars.',
    longDescription:
      'Adapter pattern across vendor APIs with delta sync, webhook normalization, and conflict resolution.',
    category: ['Integrations', 'SaaS'],
    tech: ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'AWS'],
    github: '#',
    demo: '#',
    highlight: '6+ vendors',
    gradient: 'from-indigo-400/30 via-blue-500/20 to-cyan-500/30',
  },
]

export const projectFilters: (ProjectCategory | 'All')[] = ['All', 'AI', 'SaaS', 'Full-Stack', 'Integrations']
