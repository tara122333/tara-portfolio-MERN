import type { ComponentType } from 'react'
import {
  Atom,
  Code2,
  Database,
  Cloud,
  Terminal,
  Sparkles,
  Network,
  MousePointer2,
  type LucideIcon,
} from 'lucide-react'
import {
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiMysql,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiHtml5,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiSwagger,
  SiSocketdotio,
  SiPostgresql,
  SiMongodb,
  SiGithub,
  SiWebpack,
  SiOpenai,
  SiAnthropic,
  SiGooglegemini,
  SiGithubcopilot,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa6'

export type SkillIcon = ComponentType<{ className?: string }>

export interface Skill {
  name: string
  level: number
  Icon: SkillIcon
  color?: string
}

export interface SkillGroup {
  title: string
  icon: LucideIcon
  accent: string
  skills: Skill[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    icon: Terminal,
    accent: 'from-orange-500/80 to-amber-400/40',
    skills: [
      { name: 'JavaScript', level: 96, Icon: SiJavascript, color: 'text-yellow-300' },
      { name: 'TypeScript', level: 94, Icon: SiTypescript, color: 'text-blue-400' },
      { name: 'C / C++', level: 88, Icon: SiCplusplus, color: 'text-sky-400' },
      { name: 'SQL', level: 90, Icon: SiMysql, color: 'text-cyan-400' },
    ],
  },
  {
    title: 'Frontend',
    icon: Atom,
    accent: 'from-amber-400/80 to-rose-500/40',
    skills: [
      { name: 'React.js', level: 96, Icon: SiReact, color: 'text-cyan-400' },
      { name: 'Redux', level: 90, Icon: SiRedux, color: 'text-violet-400' },
      { name: 'TailwindCSS', level: 95, Icon: SiTailwindcss, color: 'text-sky-400' },
      { name: 'HTML / CSS', level: 95, Icon: SiHtml5, color: 'text-orange-500' },
      { name: 'Framer Motion', level: 82, Icon: SiFramer, color: 'text-fuchsia-400' },
    ],
  },
  {
    title: 'Backend',
    icon: Code2,
    accent: 'from-fuchsia-500/70 to-rose-500/40',
    skills: [
      { name: 'Node.js', level: 92, Icon: SiNodedotjs, color: 'text-green-400' },
      { name: 'Express.js', level: 90, Icon: SiExpress, color: 'text-white/80' },
      { name: 'REST APIs', level: 94, Icon: SiSwagger, color: 'text-emerald-400' },
      { name: 'WebSockets', level: 84, Icon: SiSocketdotio, color: 'text-white/80' },
    ],
  },
  {
    title: 'Database',
    icon: Database,
    accent: 'from-cyan-400/70 to-blue-500/40',
    skills: [
      { name: 'PostgreSQL', level: 92, Icon: SiPostgresql, color: 'text-sky-400' },
      { name: 'MongoDB', level: 86, Icon: SiMongodb, color: 'text-green-400' },
      { name: 'Database Design', level: 90, Icon: Database, color: 'text-cyan-300' },
      { name: 'SQL', level: 90, Icon: SiMysql, color: 'text-cyan-400' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    accent: 'from-violet-500/70 to-indigo-500/40',
    skills: [
      { name: 'AWS', level: 84, Icon: FaAws, color: 'text-orange-400' },
      { name: 'Git & GitHub', level: 95, Icon: SiGithub, color: 'text-white/90' },
      { name: 'Webpack', level: 82, Icon: SiWebpack, color: 'text-sky-400' },
      { name: 'System Design', level: 88, Icon: Network, color: 'text-violet-300' },
    ],
  },
  {
    title: 'AI Tooling',
    icon: Sparkles,
    accent: 'from-orange-400/70 to-yellow-400/40',
    skills: [
      { name: 'Claude Code', level: 95, Icon: SiAnthropic, color: 'text-orange-300' },
      { name: 'ChatGPT', level: 94, Icon: SiOpenai, color: 'text-emerald-300' },
      { name: 'Gemini', level: 88, Icon: SiGooglegemini, color: 'text-blue-400' },
      { name: 'Cursor', level: 92, Icon: MousePointer2, color: 'text-white/80' },
      { name: 'Copilot', level: 88, Icon: SiGithubcopilot, color: 'text-white/80' },
      { name: 'Prompt Engineering', level: 92, Icon: Sparkles, color: 'text-amber-300' },
    ],
  },
]

export const marqueeTech = [
  'React',
  'TypeScript',
  'Node.js',
  'PostgreSQL',
  'AWS',
  'Express',
  'Redux',
  'Tailwind',
  'Framer Motion',
  'MongoDB',
  'Stripe',
  'WebSockets',
  'Claude',
  'ChatGPT',
  'Cursor',
  'Gemini',
  'C / C++',
  'GitHub',
]
