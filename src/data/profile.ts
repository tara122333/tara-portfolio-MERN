export interface NavLink {
  label: string
  href: string
}

export const profile = {
  name: 'Tara Chand Kumawat',
  shortName: 'Tara',
  titles: [
    'Senior Software Engineer',
    'Founding Engineer',
    'Full Stack Developer',
    'SaaS Architect',
    'AI Application Engineer',
  ],
  summary:
    "Senior Software Engineer and Founding Engineer with expertise in scalable SaaS platforms, system architecture, AI-powered applications, and full-stack development using React.js, TypeScript, Node.js, PostgreSQL, and AWS. Experienced in real-time systems, PMS integrations, subscription platforms, and cloud applications.",
  email: 'tarachand122333@gmail.com',
  phone: '+91 7229804925',
  location: 'Bengaluru, Karnataka · India',
  socials: {
    github: 'https://github.com/tara122333',
    linkedin: 'https://www.linkedin.com/in/tara122333/',
    whatsapp: 'https://wa.me/917229804925',
    twitter: 'https://twitter.com/',
  },
  resumeUrl: '#',
  handles: {
    leetcode: 'tara122333',
    hackerrank: 'tarachand122333',
  },
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]
