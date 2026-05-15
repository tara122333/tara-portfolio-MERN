export interface Testimonial {
  name: string
  role: string
  company: string
  quote: string
  avatar: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Alex Carter',
    role: 'CTO',
    company: 'WelcomeScreen',
    quote:
      "Tara ships features that move the revenue line. He owns the hardest parts of our stack — billing, AI agents, PMS integrations — and consistently raises the engineering bar.",
    avatar: 'https://i.pravatar.cc/100?img=12',
  },
  {
    name: 'Priya Sharma',
    role: 'Product Manager',
    company: 'AICAN Pvt Ltd',
    quote:
      "He translates messy product requirements into clean, scalable systems. Reliable, fast, and a calm presence under pressure.",
    avatar: 'https://i.pravatar.cc/100?img=47',
  },
  {
    name: 'Mark Reyes',
    role: 'Founder',
    company: 'Pawpi',
    quote:
      "Tara built our marketplace from zero. The codebase he left behind is still the foundation we ship on — that says everything.",
    avatar: 'https://i.pravatar.cc/100?img=33',
  },
  {
    name: 'Sara Lin',
    role: 'Engineering Lead',
    company: 'WelcomeScreen',
    quote:
      "When something’s technically gnarly, Tara is the first person I want on it. Strong opinions, loosely held, always backed by code.",
    avatar: 'https://i.pravatar.cc/100?img=5',
  },
]
