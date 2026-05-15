import { motion } from 'framer-motion'
import { MapPin, Calendar, Sparkles, TrendingUp } from 'lucide-react'
import { experiences, type ExperiencePosition } from '@/data/experience'
import { SectionHeading } from '@/components/SectionHeading'
import { Badge } from '@/components/ui/Badge'

function PositionBlock({ position, isFirst }: { position: ExperiencePosition; isFirst: boolean }) {
  return (
    <div className="relative pl-6">
      {/* Position node */}
      <span className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-primary/80 ring-4 ring-primary/15" />
      {/* Vertical sub-line */}
      <span className="absolute left-[5px] top-5 bottom-0 w-px bg-white/10" />

      <div className="flex items-center gap-2 flex-wrap mb-1.5">
        <h4 className="font-display font-semibold text-base text-white">{position.role}</h4>
        {position.current && (
          <Badge variant="primary" className="text-[10px]">
            <Sparkles className="w-3 h-3" /> Current
          </Badge>
        )}
        {!isFirst && (
          <Badge variant="default" className="text-[10px]">
            <TrendingUp className="w-3 h-3" /> Promoted from
          </Badge>
        )}
      </div>

      <div className="flex items-center gap-3 text-[11px] text-white/45 mb-3">
        <span className="inline-flex items-center gap-1.5">
          <Calendar className="w-3 h-3" /> {position.period}
        </span>
        {position.duration && <span>· {position.duration}</span>}
      </div>

      <ul className="space-y-2 text-sm text-white/65 leading-relaxed pb-6">
        {position.highlights.map((h, hi) => (
          <li key={hi} className="flex gap-2.5">
            <span className="mt-2 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
            <span>{h}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="container-page">
        <SectionHeading
          eyebrow="Experience"
          title={
            <>
              A <span className="gradient-text">timeline</span> of shipping in production.
            </>
          }
          description="Founding-team rigor across startups — owning architecture, revenue features, and the parts no one else wants to touch."
        />

        <div className="relative mt-16 max-w-6xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company + i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-12 sm:pl-16"
              >
                {/* Timeline node */}
                <div className="absolute left-4 sm:left-6 -translate-x-1/2 top-6 z-10">
                  <span className="relative flex w-4 h-4">
                    {exp.current && (
                      <span className="absolute inline-flex w-full h-full rounded-full bg-primary animate-ping opacity-70" />
                    )}
                    <span className="relative inline-flex w-4 h-4 rounded-full bg-primary border-2 border-slate-950 shadow-glow" />
                  </span>
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group relative rounded-2xl gradient-border bg-white/[0.03] hover:bg-white/[0.05] p-6 sm:p-8 transition-colors"
                >
                  <div className="flex items-center justify-between gap-3 flex-wrap mb-1">
                    <h3 className="font-display font-bold text-xl text-white">{exp.company}</h3>
                    {exp.location && (
                      <div className="inline-flex items-center gap-1.5 text-xs text-white/40">
                        <MapPin className="w-3 h-3" /> {exp.location}
                      </div>
                    )}
                  </div>

                  {exp.positions.length > 1 && (
                    <div className="text-[11px] text-white/40 mb-5">
                      {exp.positions.length} positions ·{' '}
                      <span className="text-primary/80">growth journey</span>
                    </div>
                  )}

                  <div className={exp.positions.length > 1 ? 'mt-2' : 'mt-4'}>
                    {exp.positions.map((p, pi) => (
                      <PositionBlock key={p.role} position={p} isFirst={pi === 0} />
                    ))}
                  </div>

                  <div className="mt-1 flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
