import {
  TrendingUp,
  Briefcase,
  Boxes,
  Plug2,
  Sparkles,
  Activity,
  type LucideIcon,
} from 'lucide-react'

export interface Stat {
  value: number
  suffix?: string
  prefix?: string
  label: string
  description: string
  icon: LucideIcon
}

export const stats: Stat[] = [
  {
    value: 300,
    suffix: 'K+',
    prefix: '$',
    label: 'ARR Growth Contribution',
    description: 'Shipped revenue-generating features end-to-end.',
    icon: TrendingUp,
  },
  {
    value: 3,
    suffix: '+',
    label: 'Years Experience',
    description: 'Across SaaS, AI, and full-stack engineering.',
    icon: Briefcase,
  },
  {
    value: 10,
    suffix: '+',
    label: 'Products Built',
    description: 'From founding-stage MVPs to scaled platforms.',
    icon: Boxes,
  },
  {
    value: 6,
    suffix: '+',
    label: 'PMS Integrations',
    description: 'Hostaway, Guesty, Hospitable, Lodgify and more.',
    icon: Plug2,
  },
  {
    value: 100,
    suffix: '%',
    label: 'AI-powered SaaS Systems',
    description: 'LLM agents, RAG pipelines, and AI workflows.',
    icon: Sparkles,
  },
  {
    value: 24,
    suffix: '/7',
    label: 'Real-time Applications',
    description: 'WebSockets, event streams, and live dashboards.',
    icon: Activity,
  },
]
