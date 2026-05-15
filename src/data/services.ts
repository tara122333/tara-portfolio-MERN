import {
  Layers,
  Rocket,
  BrainCircuit,
  Network,
  CloudCog,
  Gauge,
  type LucideIcon,
} from 'lucide-react'

export interface Service {
  title: string
  description: string
  icon: LucideIcon
  features: string[]
}

export const services: Service[] = [
  {
    title: 'Full Stack Development',
    description: 'End-to-end product engineering from data layer to pixel.',
    icon: Layers,
    features: ['React + TypeScript', 'Node.js APIs', 'PostgreSQL design'],
  },
  {
    title: 'SaaS Development',
    description: 'Multi-tenant platforms with billing, RBAC, and analytics built in.',
    icon: Rocket,
    features: ['Stripe billing', 'Org / role models', 'Usage metering'],
  },
  {
    title: 'AI Applications',
    description: 'LLM-powered features — agents, RAG, structured tool-use.',
    icon: BrainCircuit,
    features: ['OpenAI · Claude · Gemini', 'Vector search', 'Streaming UX'],
  },
  {
    title: 'System Design',
    description: 'Clean architecture for scale: services, events, and contracts.',
    icon: Network,
    features: ['DDD boundaries', 'Event-driven flows', 'API design'],
  },
  {
    title: 'Cloud Integration',
    description: 'AWS-native deployments with observability and IaC.',
    icon: CloudCog,
    features: ['ECS / Lambda', 'S3 · SQS · SNS', 'CloudWatch'],
  },
  {
    title: 'Performance Optimization',
    description: 'Frontend and database wins that compound over time.',
    icon: Gauge,
    features: ['Bundle splitting', 'Query tuning', 'Caching layers'],
  },
]
