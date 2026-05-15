import { motion } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'
import { services } from '@/data/services'
import { SectionHeading } from '@/components/SectionHeading'

export function Services() {
  return (
    <section id="services" className="section-padding relative">
      <div className="container-page">
        <SectionHeading
          eyebrow="Services"
          title={
            <>
              How I can{' '}
              <span className="gradient-text">help your team</span>.
            </>
          }
          description="Plug me in as an extension of your engineering team — from greenfield builds to scale-out work."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl gradient-border bg-white/[0.03] hover:bg-white/[0.05] transition-colors overflow-hidden"
              >
                <div className="pointer-events-none absolute -bottom-24 -right-20 w-60 h-60 rounded-full bg-primary/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative p-7">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/25 to-primary/0 border border-primary/30 inline-flex items-center justify-center text-primary shadow-glow">
                      <Icon className="w-5 h-5" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                  </div>

                  <h3 className="mt-6 font-display font-semibold text-lg text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/55 leading-relaxed">{s.description}</p>

                  <ul className="mt-5 space-y-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-white/70">
                        <span className="w-4 h-4 rounded-full bg-primary/15 text-primary inline-flex items-center justify-center">
                          <Check className="w-3 h-3" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
