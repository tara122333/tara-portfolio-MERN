import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react'
import { projects, projectFilters, type ProjectCategory } from '@/data/projects'
import { SectionHeading } from '@/components/SectionHeading'
import { Badge } from '@/components/ui/Badge'
import { cn } from '@/utils/cn'

type Filter = ProjectCategory | 'All'

export function Projects() {
  const [filter, setFilter] = useState<Filter>('All')

  const filtered = useMemo(() => {
    if (filter === 'All') return projects
    return projects.filter((p) => p.category.includes(filter as ProjectCategory))
  }, [filter])

  return (
    <section id="projects" className="section-padding relative">
      <div className="container-page">
        <SectionHeading
          eyebrow="Selected work"
          title={
            <>
              Projects that{' '}
              <span className="gradient-text">moved the needle</span>.
            </>
          }
          description="From AI agents to billing systems and integrations — production-grade work for real users."
        />

        {/* Filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {projectFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                'relative px-4 py-2 text-sm font-medium rounded-full border transition-all',
                filter === f
                  ? 'bg-primary text-white border-primary shadow-glow'
                  : 'border-white/10 text-white/60 hover:text-white hover:border-white/30',
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl gradient-border bg-white/[0.03] overflow-hidden"
              >
                {/* Visual */}
                <div className="relative h-56 overflow-hidden">
                  <div className={cn('absolute inset-0 bg-gradient-to-br', project.gradient)} />
                  <div className="absolute inset-0 bg-grid-faint bg-grid-size opacity-30 mix-blend-overlay" />

                  {/* Mock app surface */}
                  <div className="absolute inset-4 rounded-xl bg-slate-950/55 border border-white/10 backdrop-blur p-4 flex flex-col">
                    <div className="flex items-center gap-1.5 mb-3">
                      <span className="w-2 h-2 rounded-full bg-red-400/70" />
                      <span className="w-2 h-2 rounded-full bg-amber-400/70" />
                      <span className="w-2 h-2 rounded-full bg-emerald-400/70" />
                      <div className="ml-2 text-[10px] font-mono text-white/30 truncate">
                        {project.id}.app
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-white/10 rounded-full w-1/2" />
                      <div className="h-2 bg-white/10 rounded-full w-3/4" />
                      <div className="mt-3 grid grid-cols-3 gap-2">
                        <div className="h-12 rounded-lg bg-primary/20 border border-primary/30" />
                        <div className="h-12 rounded-lg bg-white/5 border border-white/10" />
                        <div className="h-12 rounded-lg bg-white/5 border border-white/10" />
                      </div>
                    </div>
                  </div>

                  {project.highlight && (
                    <Badge variant="primary" className="absolute top-4 right-4">
                      {project.highlight}
                    </Badge>
                  )}

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 border border-white/20 hover:bg-white/15 text-sm font-medium transition"
                      >
                        <Github className="w-4 h-4" /> Source
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-primary text-white hover:bg-primary-400 text-sm font-medium transition"
                      >
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display font-bold text-xl text-white group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <p className="mt-2 text-sm text-white/55 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
