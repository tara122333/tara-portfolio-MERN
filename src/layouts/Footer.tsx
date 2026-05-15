import { Heart, Github, Linkedin, Mail, MessageCircle } from 'lucide-react'
import { profile, navLinks } from '@/data/profile'

const techStack = ['React', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'Vite']

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] mt-10">
      <div className="container-page py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <a href="#home" className="inline-flex items-center gap-3 group">
              <span className="relative inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary to-rose-500 p-[2px] shadow-glow">
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
                <span className="absolute inset-[2px] hidden items-center justify-center rounded-full bg-gradient-to-br from-primary to-rose-500 font-display font-extrabold text-white">
                  T
                </span>
                <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/30" />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-slate-950" />
              </span>
              <div className="leading-tight">
                <div className="font-display font-bold text-base">{profile.name}</div>
                <div className="text-xs text-white/40 uppercase tracking-[0.2em]">
                  Senior Software Engineer
                </div>
              </div>
            </a>
            <p className="mt-5 text-sm text-white/55 leading-relaxed max-w-md">
              I build scalable SaaS platforms, AI-powered applications, and the systems that make
              them work. Available for senior + founding-engineer roles.
            </p>

            <div className="mt-6 flex items-center gap-2">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
                className="w-9 h-9 inline-flex items-center justify-center rounded-lg bg-white/[0.04] border border-white/10 text-white/70 hover:text-primary hover:border-primary/40 transition"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
                className="w-9 h-9 inline-flex items-center justify-center rounded-lg bg-white/[0.04] border border-white/10 text-white/70 hover:text-primary hover:border-primary/40 transition"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={profile.socials.whatsapp}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="WhatsApp"
                className="w-9 h-9 inline-flex items-center justify-center rounded-lg bg-white/[0.04] border border-white/10 text-white/70 hover:text-primary hover:border-primary/40 transition"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="w-9 h-9 inline-flex items-center justify-center rounded-lg bg-white/[0.04] border border-white/10 text-white/70 hover:text-primary hover:border-primary/40 transition"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-sm text-white/65">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-primary transition">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4">Built with</h4>
            <div className="flex flex-wrap gap-1.5">
              {techStack.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center px-2.5 py-1 rounded-full text-xs bg-white/[0.04] border border-white/10 text-white/65"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-6 text-xs text-white/40 leading-relaxed">
              Designed and engineered from scratch. No templates, no shortcuts.
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <div>© {new Date().getFullYear()} {profile.name}. All rights reserved.</div>
          <div className="inline-flex items-center gap-1.5">
            Made with <Heart className="w-3.5 h-3.5 text-primary fill-primary" /> in India
          </div>
        </div>
      </div>
    </footer>
  )
}
