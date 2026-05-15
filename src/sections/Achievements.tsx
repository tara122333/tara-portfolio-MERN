import { motion } from 'framer-motion'
import { achievements, type Achievement } from '@/data/achievements'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useCountUp } from '@/hooks/useCountUp'
import { SectionHeading } from '@/components/SectionHeading'
import { cn } from '@/utils/cn'

function AchievementCard({ a, index, inView }: { a: Achievement; index: number; inView: boolean }) {
  const value = useCountUp(a.metricValue ?? 0, 1400, inView)
  const Icon = a.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl gradient-border bg-white/[0.03] overflow-hidden"
    >
      {/* Floating gradient */}
      <div
        className={cn(
          'absolute -top-16 -right-16 w-52 h-52 rounded-full bg-gradient-to-br blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-500',
          a.gradient,
        )}
      />

      <div className="relative p-7">
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4 + index, repeat: Infinity, ease: 'easeInOut' }}
          className="inline-flex w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/0 border border-primary/30 items-center justify-center text-primary shadow-glow"
        >
          <Icon className="w-6 h-6" />
        </motion.div>

        <div className="mt-6 flex items-baseline gap-2">
          <span className="font-display font-extrabold text-4xl sm:text-5xl gradient-text">
            {value}
          </span>
          {a.metricSuffix && (
            <span className="text-xl text-white/60 font-display">{a.metricSuffix}</span>
          )}
        </div>
        <div className="mt-1 text-xs uppercase tracking-[0.18em] text-white/40">{a.metricLabel}</div>

        <h3 className="mt-5 font-display font-semibold text-lg text-white">{a.title}</h3>
        <p className="mt-2 text-sm text-white/55 leading-relaxed">{a.description}</p>
      </div>
    </motion.div>
  )
}

export function Achievements() {
  const { ref, inView } = useScrollReveal<HTMLDivElement>()

  return (
    <section id="achievements" className="section-padding relative">
      <div className="container-page">
        <SectionHeading
          eyebrow="Achievements"
          title={
            <>
              Things I'm{' '}
              <span className="gradient-text">proud of</span>.
            </>
          }
          description="A few highlights from competitive programming and hackathon stages."
        />

        <div ref={ref} className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map((a, i) => (
            <AchievementCard key={a.title} a={a} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
