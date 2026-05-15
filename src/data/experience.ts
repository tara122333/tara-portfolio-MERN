export interface ExperiencePosition {
  role: string
  period: string
  duration?: string
  highlights: string[]
  current?: boolean
}

export interface Experience {
  company: string
  location?: string
  tech: string[]
  current?: boolean
  positions: ExperiencePosition[]
}

export const experiences: Experience[] = [
  {
    company: 'WelcomeScreen',
    location: 'California, USA · Remote',
    current: true,
    tech: [
      'React',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'AWS',
      'Stripe',
      'Redux',
      'ApexCharts',
      'WebSockets',
      'OAuth',
    ],
    positions: [
      {
        role: 'Senior Software Engineer · Founding Engineer',
        period: 'Mar 2025 — Present',
        current: true,
        highlights: [
          'Founding engineer driving company growth from $0 to $300K ARR.',
          'Architected scalable backend systems, REST APIs, microservices, and database designs.',
          'Integrated PMS platforms — Guesty, Hostaway, Hospitable, OwnerRez, Hostify, Lodgify — syncing property, reservation, and guest data in real time.',
          'Built a real-time customizable TV management platform with template, branding, and media controls for guest-facing experiences.',
          'Designed and implemented a scalable Role-Based Access Control (RBAC) system for secure, multi-level authorization.',
          'Developed an AI-powered Travel Assistant generating personalized itineraries and conversational guest support.',
          'Built a real-time guest communication platform with AI-powered automated responses.',
          'Integrated AWS for secure file management — images, CSVs, PDFs, and media at scale.',
          'Optimized frontend performance via lazy loading, code splitting, tree shaking, and Webpack tuning.',
        ],
      },
      {
        role: 'Software Engineer',
        period: 'Sep 2023 — Mar 2025',
        duration: '1 yr 7 mos',
        highlights: [
          'Designed and implemented secure authentication and authorization with Email/Password, Google OAuth, and Facebook OAuth — scalable onboarding and cross-platform login.',
          'Built a scalable Stripe-backed subscription and billing system — recurring payments, upgrades/downgrades, webhook handling, and automated lifecycle management.',
          'Developed high-performance CRUD modules with server-side pagination, lazy loading, advanced filtering, and optimized API + database queries for large datasets.',
          'Architected reusable, modular frontend and backend components following clean-architecture principles.',
          'Optimized application performance with efficient state management, API caching, and async data handling across the stack.',
          'Collaborated cross-functionally, performed code reviews, and held the engineering bar in agile environments.',
          'Built scalable RESTful APIs and integrated third-party services with secure data handling, validation, and fault tolerance.',
          'Led end-to-end feature development — requirements, system design, deployment, and post-production monitoring in cloud environments.',
        ],
      },
    ],
  },
  {
    company: 'AICAN Pvt Ltd',
    location: 'Mumbai, India',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'TailwindCSS'],
    positions: [
      {
        role: 'Software Development Engineer Intern',
        period: 'Jul 2023 — Sep 2023',
        highlights: [
          'Designed access management for the AICAN Admin Panel.',
          'Built CRUD and tracking flows for IoT devices (PH meter, Gelometer).',
          'Implemented customizable templates with dynamic widget ordering for end-customer dashboards.',
        ],
      },
    ],
  },
  {
    company: 'Pawpi',
    location: 'Jaipur, India',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Redux', 'TailwindCSS', 'HeadlessUI', 'AWS'],
    positions: [
      {
        role: 'Software Development Engineer',
        period: 'Feb 2023 — Jul 2023',
        highlights: [
          'Built a full-stack pet e-commerce marketplace (pawpi.co) from scratch to deployment.',
          'Designed and implemented the UI, payments integration, and shipping management.',
          'Architected a faster-delivery web application with optimized search and ordering flows.',
        ],
      },
    ],
  },
]
