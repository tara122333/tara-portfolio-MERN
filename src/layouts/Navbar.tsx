import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import { navLinks, profile } from '@/data/profile'
import { cn } from '@/utils/cn'
import { Button } from '@/components/ui/Button'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as Element[]
    if (sections.length === 0) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50 px-4 sm:px-6 pt-4"
    >
      <div
        className={cn(
          'max-w-[1200px] mx-auto flex items-center justify-between gap-4 rounded-full px-3 py-2.5 transition-all duration-300',
          scrolled
            ? 'bg-slate-950/70 backdrop-blur-xl border border-white/[0.08] shadow-[0_18px_60px_-20px_rgba(0,0,0,0.7)]'
            : 'bg-white/[0.02] border border-white/[0.04] backdrop-blur-md',
        )}
      >
        <a href="#home" className="flex items-center gap-2.5 pl-2 pr-2 group">
          <span className="relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-primary to-rose-500 p-[2px] shadow-glow">
            <img
              src="/tara.png"
              alt={profile.name}
              className="w-full h-full rounded-full object-cover bg-slate-950"
              onError={(e) => {
                const target = e.currentTarget
                target.style.display = 'none'
                const fallback = target.nextElementSibling as HTMLElement | null
                if (fallback) fallback.style.display = 'flex'
              }}
            />
            <span
              className="absolute inset-[2px] hidden items-center justify-center rounded-full bg-gradient-to-br from-primary to-rose-500 font-display font-extrabold text-white text-base"
            >
              T
            </span>
            <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/30" />
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-slate-950" />
          </span>
          <div className="hidden sm:block leading-tight">
            <div className="font-display font-bold text-sm tracking-tight">{profile.shortName} Kumawat</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-white/40">Sr. Engineer</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => {
            const isActive = active === l.href
            return (
              <a
                key={l.label}
                href={l.href}
                className={cn(
                  'relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors',
                  isActive ? 'text-white' : 'text-white/60 hover:text-white',
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-white/[0.08] border border-white/10"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative">{l.label}</span>
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="primary"
            className="hidden sm:inline-flex"
            leftIcon={<Download className="w-4 h-4" />}
            onClick={() => window.open(profile.resumeUrl, '_blank')}
          >
            Resume
          </Button>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex w-10 h-10 items-center justify-center rounded-full bg-white/[0.05] border border-white/10 hover:bg-white/10 transition"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mt-3 max-w-[1200px] mx-auto rounded-2xl bg-slate-950/85 border border-white/[0.08] backdrop-blur-xl p-3"
          >
            <nav className="grid">
              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition',
                    active === l.href
                      ? 'bg-primary/15 text-primary'
                      : 'text-white/70 hover:bg-white/5 hover:text-white',
                  )}
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
