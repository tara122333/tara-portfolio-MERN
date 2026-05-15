import { useRef, useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import {
  Mail,
  Send,
  Github,
  Linkedin,
  MessageCircle,
  MapPin,
  PhoneCall,
  CheckCircle2,
  AlertTriangle,
  Loader2,
} from 'lucide-react'
import { profile } from '@/data/profile'
import { SectionHeading } from '@/components/SectionHeading'
import { Button } from '@/components/ui/Button'
import { MagneticButton } from '@/components/MagneticButton'

const socials = [
  { label: 'GitHub', icon: Github, href: profile.socials.github },
  { label: 'LinkedIn', icon: Linkedin, href: profile.socials.linkedin },
  { label: 'WhatsApp', icon: MessageCircle, href: profile.socials.whatsapp },
  { label: 'Email', icon: Mail, href: `mailto:${profile.email}` },
]

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined

type Status = 'idle' | 'sending' | 'sent' | 'error'

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formRef.current) return

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setErrorMsg('Email service is not configured yet — set the VITE_EMAILJS_* env vars.')
      setStatus('error')
      return
    }

    setStatus('sending')
    setErrorMsg(null)
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      setStatus('sent')
      formRef.current.reset()
      setTimeout(() => setStatus('idle'), 4000)
    } catch (err) {
      console.error('EmailJS error:', err)
      setErrorMsg(
        err instanceof Error ? err.message : 'Something went wrong — please try again.',
      )
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const isSending = status === 'sending'
  const isSent = status === 'sent'
  const isError = status === 'error'

  return (
    <section id="contact" className="section-padding relative">
      <div className="container-page">
        <div className="relative rounded-[32px] overflow-hidden gradient-border bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-8 md:p-14">
          <div className="absolute -top-32 -right-24 w-[420px] h-[420px] rounded-full bg-primary/25 blur-3xl" />
          <div className="absolute -bottom-32 -left-24 w-[420px] h-[420px] rounded-full bg-rose-500/15 blur-3xl" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Let's build"
                title={
                  <>
                    Have an{' '}
                    <span className="gradient-text">awesome project idea</span>?
                    <br />
                    Let's discuss it.
                  </>
                }
                description="Reach out for senior engineering work, founding-team roles, AI/SaaS builds, or just a good technical conversation."
              />

              <div className="mt-8 space-y-4 text-sm">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 text-white/80 hover:text-primary transition"
                >
                  <span className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 inline-flex items-center justify-center text-primary">
                    <Mail className="w-4 h-4" />
                  </span>
                  {profile.email}
                </a>
                <a
                  href={`tel:${profile.phone?.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-white/80 hover:text-primary transition"
                >
                  <span className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 inline-flex items-center justify-center text-primary">
                    <PhoneCall className="w-4 h-4" />
                  </span>
                  {profile.phone}
                </a>
                <div className="flex items-center gap-3 text-white/80">
                  <span className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 inline-flex items-center justify-center text-primary">
                    <MapPin className="w-4 h-4" />
                  </span>
                  {profile.location}
                </div>
              </div>

              <div className="mt-8 flex items-center gap-2">
                {socials.map((s) => (
                  <MagneticButton key={s.label} href={s.href} strength={0.5}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={s.label}
                      className="w-11 h-11 inline-flex items-center justify-center rounded-xl bg-white/[0.04] border border-white/10 text-white/70 hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition"
                    >
                      <s.icon className="w-5 h-5" />
                    </a>
                  </MagneticButton>
                ))}
              </div>
            </div>

            {/* Form */}
            <motion.form
              ref={formRef}
              onSubmit={onSubmit}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl glass-strong p-6 md:p-7 space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label className="block">
                  <span className="text-xs uppercase tracking-[0.18em] text-white/40">Name</span>
                  <input
                    required
                    type="text"
                    name="user_name"
                    disabled={isSending}
                    className="mt-2 w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-white/30 focus:outline-none focus:border-primary/50 focus:bg-white/[0.06] transition disabled:opacity-60"
                    placeholder="Your name"
                  />
                </label>
                <label className="block">
                  <span className="text-xs uppercase tracking-[0.18em] text-white/40">Email</span>
                  <input
                    required
                    type="email"
                    name="user_email"
                    disabled={isSending}
                    className="mt-2 w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-white/30 focus:outline-none focus:border-primary/50 focus:bg-white/[0.06] transition disabled:opacity-60"
                    placeholder="you@company.com"
                  />
                </label>
              </div>
              <label className="block">
                <span className="text-xs uppercase tracking-[0.18em] text-white/40">Subject</span>
                <input
                  type="text"
                  name="subject"
                  disabled={isSending}
                  className="mt-2 w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-white/30 focus:outline-none focus:border-primary/50 focus:bg-white/[0.06] transition disabled:opacity-60"
                  placeholder="What's this about?"
                />
              </label>
              <label className="block">
                <span className="text-xs uppercase tracking-[0.18em] text-white/40">Message</span>
                <textarea
                  required
                  rows={4}
                  name="message"
                  disabled={isSending}
                  className="mt-2 w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-white/30 focus:outline-none focus:border-primary/50 focus:bg-white/[0.06] transition resize-none disabled:opacity-60"
                  placeholder="Tell me about your project, timeline, and goals."
                />
              </label>

              {/* Hidden meta fields available to the EmailJS template */}
              <input type="hidden" name="to_name" value={profile.shortName} />
              <input type="hidden" name="reply_to" value="" />

              {isError && errorMsg && (
                <div className="flex items-start gap-2 text-xs text-rose-300 bg-rose-500/10 border border-rose-500/20 rounded-lg px-3 py-2">
                  <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="flex items-center justify-between gap-3 pt-2">
                <div className="text-xs text-white/40">
                  {isSent ? "Got it — I'll get back to you soon." : ''}
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  disabled={isSending}
                  rightIcon={
                    isSending ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : isSent ? (
                      <CheckCircle2 className="w-4 h-4" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )
                  }
                >
                  {isSending ? 'Sending…' : isSent ? 'Sent — talk soon' : 'Send message'}
                </Button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  )
}
