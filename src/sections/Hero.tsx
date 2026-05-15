import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import {
  ArrowRight,
  Download,
  Sparkles,
  Mouse,
  Code,
  Database,
  Cloud,
  Atom,
  BrainCircuit,
  Cpu,
} from 'lucide-react'
import { profile } from '@/data/profile'
import { Button } from '@/components/ui/Button'
import { FloatingParticles } from '@/components/FloatingParticles'
import { MagneticButton } from '@/components/MagneticButton'
import { cn } from '@/utils/cn'

const floatingIcons = [
  { Icon: Atom, className: 'top-[15%] left-[6%]', delay: 0 },
  { Icon: Code, className: 'top-[22%] right-[8%]', delay: 0.4 },
  { Icon: Database, className: 'bottom-[28%] left-[10%]', delay: 0.8 },
  { Icon: Cloud, className: 'bottom-[18%] right-[12%]', delay: 1.2 },
  { Icon: BrainCircuit, className: 'top-[45%] left-[3%]', delay: 1.6 },
  { Icon: Cpu, className: 'top-[55%] right-[4%]', delay: 2.0 },
]

const codeLines = [
  "const tara = {",
  "  role: 'Senior Software Engineer',",
  "  stack: ['React', 'Node', 'PostgreSQL'],",
  "  building: 'AI-powered SaaS',",
  "  shipping: '$300K ARR features',",
  "}",
]

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setTitleIndex((i) => (i + 1) % profile.titles.length)
    }, 2400)
    return () => clearInterval(t)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
    >
      <FloatingParticles count={26} />

      {/* Faint code snippet background */}
      <pre
        aria-hidden
        className="hidden md:block absolute right-4 top-32 max-w-md text-[11px] font-mono text-white/[0.07] leading-relaxed select-none pointer-events-none"
      >
        {codeLines.join('\n')}
      </pre>

      {/* Floating tech icons */}
      {floatingIcons.map(({ Icon, className, delay }, i) => (
        <motion.div
          key={i}
          aria-hidden
          className={cn(
            'absolute hidden md:flex w-12 h-12 rounded-2xl items-center justify-center',
            'bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl text-primary/80 shadow-glow',
            className,
          )}
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: 1,
            y: [0, -12, 0],
          }}
          transition={{
            opacity: { duration: 0.8, delay: 0.4 + delay * 0.1 },
            y: { duration: 5 + i, repeat: Infinity, ease: 'easeInOut', delay },
          }}
        >
          <Icon className="w-5 h-5" />
        </motion.div>
      ))}

      <div className="container-page relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text side */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="eyebrow"
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-primary animate-ping opacity-70" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-primary" />
              </span>
              Available for select engagements
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 font-display font-bold tracking-tight text-[36px] sm:text-[48px] lg:text-[58px] leading-[1.02]"
            >
              Hi{' '}
              <motion.span
                role="img"
                aria-label="waving hand"
                className="inline-block origin-[70%_70%]"
                animate={{ rotate: [0, 18, -10, 18, -6, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 1.2, ease: 'easeInOut' }}
              >
                👋
              </motion.span>
              , I'm <span className="gradient-text">{profile.shortName}</span>.
              <br />
              <span className="text-white/90">I am</span>
              <br />
              <span className="relative inline-block align-baseline h-[1.1em] overflow-hidden min-w-[225px] sm:min-w-[340px] lg:min-w-[420px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={titleIndex}
                    initial={{ y: '110%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: '-110%', opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block gradient-text whitespace-nowrap"
                  >
                    {profile.titles[titleIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-2xl text-white/60 leading-relaxed text-base sm:text-lg"
            >
              {profile.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <MagneticButton href="#contact">
                <Button variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Hire Me
                </Button>
              </MagneticButton>
              <MagneticButton href="#projects">
                <Button variant="ghost" size="lg" rightIcon={<Sparkles className="w-4 h-4" />}>
                  View Projects
                </Button>
              </MagneticButton>
              <MagneticButton href={profile.resumeUrl}>
                <Button variant="outline" size="lg" leftIcon={<Download className="w-4 h-4" />}>
                  Download Resume
                </Button>
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-12 grid grid-cols-3 gap-6 max-w-md"
            >
              {[
                { value: '$300K', label: 'ARR shipped' },
                { value: '3+', label: 'Years in startups' },
                { value: '10+', label: 'Products built' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display font-bold text-2xl sm:text-3xl text-white">
                    {s.value}
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.16em] text-white/40 mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Portrait side */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-md mx-auto aspect-[4/5]"
            >
              {/* Glow ring */}
              <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-tr from-primary/40 via-rose-500/30 to-transparent blur-2xl opacity-70 animate-pulse-glow" />
              {/* Card */}
              <div className="absolute inset-0 rounded-[28px] gradient-border bg-gradient-to-b from-white/[0.08] to-white/[0.02] overflow-hidden">
                <img
                  src="/tara.png"
                  alt={profile.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                {/* Floating chip top */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur border border-white/10 text-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Open to opportunities
                </div>

                {/* Bottom chip */}
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-black/45 backdrop-blur-xl border border-white/10 p-4 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.18em] text-white/50">Currently</div>
                    <div className="text-sm font-medium text-white mt-0.5">
                      Founding Engineer · WelcomeScreen
                    </div>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-primary/20 border border-primary/40 inline-flex items-center justify-center text-primary">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Decorative ring */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full border border-white/10 animate-spin-slow" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full border border-primary/20" />
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ opacity: { delay: 1, duration: 0.6 }, y: { duration: 2, repeat: Infinity } }}
          className="absolute left-1/2 -translate-x-1/2 bottom-6 hidden md:flex flex-col items-center gap-2 text-white/40 hover:text-white transition"
        >
          <Mouse className="w-5 h-5" />
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        </motion.a>
      </div>
    </section>
  )
}
