import { motion } from 'framer-motion'
import { skillGroups, marqueeTech, type Skill } from '@/data/skills'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { SectionHeading } from '@/components/SectionHeading'
import { Reveal } from '@/components/Reveal'
import { cn } from '@/utils/cn'

function SkillBar({
  skill,
  inView,
  delay,
}: {
  skill: Skill
  inView: boolean
  delay: number
}) {
  const { Icon, name, level, color } = skill
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-2 text-sm font-medium text-white/90">
          <span
            className={cn(
              'inline-flex w-6 h-6 items-center justify-center rounded-md bg-white/[0.05] border border-white/10',
              color ?? 'text-white/80',
            )}
          >
            <Icon className="w-3.5 h-3.5" />
          </span>
          {name}
        </span>
        <span className="text-xs text-white/40 font-mono">{level}%</span>
      </div>
      <div className="relative h-1.5 rounded-full bg-white/[0.05] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary via-orange-400 to-amber-300 shadow-glow"
        />
      </div>
    </div>
  )
}

export function Skills() {
  const { ref, inView } = useScrollReveal<HTMLDivElement>()

  return (
    <section id="skills" className="section-padding relative">
      <div className="container-page">
        <SectionHeading
          eyebrow="Toolbox"
          title={
            <>
              Skills, tools, and the{' '}
              <span className="gradient-text">stack I trust</span>.
            </>
          }
          description="A practical toolkit refined across SaaS, AI products, and real-time systems."
        />

        <div ref={ref} className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, gi) => {
            const Icon = group.icon
            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: gi * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl p-6 gradient-border bg-white/[0.03] hover:bg-white/[0.05] transition-colors overflow-hidden"
              >
                {/* Hover glow */}
                <div
                  className={cn(
                    'pointer-events-none absolute -top-20 -right-20 w-56 h-56 rounded-full bg-gradient-to-br blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-500',
                    group.accent,
                  )}
                />

                <div className="relative flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/10 inline-flex items-center justify-center text-primary">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-semibold text-base text-white">{group.title}</h3>
                </div>

                <div className="relative space-y-4">
                  {group.skills.map((s, si) => (
                    <SkillBar
                      key={s.name}
                      skill={s}
                      inView={inView}
                      delay={gi * 0.08 + si * 0.04 + 0.2}
                    />
                  ))}
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* Marquee */}
        <Reveal delay={0.2}>
          <div className="mt-14 relative mask-fade-edges overflow-hidden">
            <div className="flex gap-3 animate-marquee w-max">
              {[...marqueeTech, ...marqueeTech].map((t, i) => (
                <span
                  key={`${t}-${i}`}
                  className="inline-flex items-center gap-2 shrink-0 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/10 text-sm font-medium text-white/70"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
