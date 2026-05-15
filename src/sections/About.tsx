import { useState } from 'react'
import { motion } from 'framer-motion'
import { stats, type Stat } from '@/data/stats'
import { useCountUp } from '@/hooks/useCountUp'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { SectionHeading } from '@/components/SectionHeading'
import { Reveal } from '@/components/Reveal'

function StatCard({ stat, index, inView }: { stat: Stat; index: number; inView: boolean }) {
  const value = useCountUp(stat.value, 1600, inView)
  const Icon = stat.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative p-7 rounded-2xl gradient-border bg-white/[0.03] hover:bg-white/[0.05] transition-colors"
    >
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="flex items-center justify-between mb-6">
        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/25 to-primary/0 border border-primary/30 inline-flex items-center justify-center text-primary">
          <Icon className="w-5 h-5" />
        </div>
        <span className="text-xs uppercase tracking-[0.18em] text-white/30">0{index + 1}</span>
      </div>

      <div className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight">
        <span className="text-white/40">{stat.prefix}</span>
        <span className="gradient-text">{value}</span>
        <span className="text-white/60">{stat.suffix}</span>
      </div>
      <div className="mt-3 text-sm font-medium text-white">{stat.label}</div>
      <div className="mt-1.5 text-xs text-white/50 leading-relaxed">{stat.description}</div>
    </motion.div>
  )
}

export function About() {
  const { ref, inView } = useScrollReveal<HTMLDivElement>()
  const [hover, setHover] = useState<number | null>(null)
  void hover

  return (
    <section id="about" className="section-padding relative">
      <div className="container-page">
        <SectionHeading
          eyebrow="About me"
          title={
            <>
              Engineering products that{' '}
              <span className="gradient-text">compound revenue</span>.
            </>
          }
          description="I've spent the last few years as a founding engineer turning blank repos into revenue. Below are some numbers from that journey — and the kind of work I'm wired for."
        />

        <div
          ref={ref}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          onMouseLeave={() => setHover(null)}
        >
          {stats.map((s, i) => (
            <StatCard key={s.label} stat={s} index={i} inView={inView} />
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 max-w-3xl mx-auto text-center text-white/55 text-sm sm:text-base leading-relaxed">
            From a <span className="text-white">$0 → $300K ARR</span> SaaS to AI-powered guest agents,
            real-time TV management, and{' '}
            <span className="text-white">6+ PMS integrations</span> — I architect systems, ship features,
            and stay close to the codebase that produces revenue.
          </div>
        </Reveal>
      </div>
    </section>
  )
}
