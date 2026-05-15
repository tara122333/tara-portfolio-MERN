import { Trophy, Medal, Star, Flag, type LucideIcon } from 'lucide-react'

export interface Achievement {
  title: string
  description: string
  icon: LucideIcon
  metricValue?: number
  metricSuffix?: string
  metricLabel: string
  gradient: string
}

export const achievements: Achievement[] = [
  {
    title: '#1 Rank · CodeChef Starters 41',
    description: 'Topped the global leaderboard in C/C++ and won a 6-month LinkedIn Premium subscription.',
    icon: Trophy,
    metricValue: 1,
    metricLabel: 'Global rank',
    metricSuffix: 'st',
    gradient: 'from-amber-300/40 via-orange-500/30 to-rose-500/30',
  },
  {
    title: 'Gold Medal · HackerRank',
    description: '#1 rank with gold medals in both C and C++ programming on @tarachand122333.',
    icon: Medal,
    metricValue: 1,
    metricLabel: 'Gold rank',
    metricSuffix: 'st',
    gradient: 'from-yellow-300/40 via-amber-400/30 to-orange-500/30',
  },
  {
    title: '3-Star · LeetCode',
    description: '6 badges including 5 monthly challenges and 100 Days of Coding 2022 (@tara122333).',
    icon: Star,
    metricValue: 3,
    metricLabel: 'Star rating',
    metricSuffix: '⭐',
    gradient: 'from-orange-400/40 via-amber-500/30 to-yellow-400/30',
  },
  {
    title: 'Smart India Hackathon · Participant',
    description: 'Selected for India\'s flagship national hackathon (2021–22) on a multi-disciplinary team.',
    icon: Flag,
    metricValue: 36,
    metricLabel: 'Hours non-stop',
    metricSuffix: 'h',
    gradient: 'from-rose-400/40 via-pink-500/30 to-fuchsia-500/30',
  },
]
