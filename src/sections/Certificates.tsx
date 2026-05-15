import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Award,
  Calendar,
  Download,
  Eye,
  ShieldCheck,
  X,
} from 'lucide-react'
import { certificates, type Certificate } from '@/data/certificates'
import { SectionHeading } from '@/components/SectionHeading'
import { Badge } from '@/components/ui/Badge'

function CertificateCard({
  cert,
  index,
  onView,
}: {
  cert: Certificate
  index: number
  onView: (c: Certificate) => void
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl gradient-border bg-white/[0.03] hover:bg-white/[0.05] overflow-hidden flex flex-col"
    >
      <button
        type="button"
        onClick={() => onView(cert)}
        aria-label={`Preview ${cert.title}`}
        className="relative block w-full overflow-hidden focus:outline-none"
      >
        <div className="relative h-52 sm:h-56 bg-slate-950 overflow-hidden">
          <img
            src={cert.image}
            alt={cert.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

          {cert.tag && (
            <Badge variant="primary" className="absolute top-3 left-3 backdrop-blur">
              <Award className="w-3 h-3" /> {cert.tag}
            </Badge>
          )}

          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/60 backdrop-blur-sm">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white">
              <Eye className="w-4 h-4" /> Click to view
            </span>
          </div>
        </div>
      </button>

      <div className="p-6 flex flex-col gap-3 flex-1">
        <div>
          <h3 className="font-display font-semibold text-base text-white leading-snug">
            {cert.title}
          </h3>
          <p className="mt-1 text-sm text-primary">{cert.issuer}</p>
        </div>

        <p className="text-xs text-white/55 leading-relaxed">{cert.description}</p>

        <div className="flex flex-wrap items-center gap-3 text-[11px] text-white/40">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="w-3 h-3" /> {cert.date}
          </span>
          {cert.credentialId && (
            <span className="inline-flex items-center gap-1.5 font-mono">
              <ShieldCheck className="w-3 h-3" /> {cert.credentialId}
            </span>
          )}
        </div>

        <div className="mt-auto pt-3 flex items-center gap-2">
          <button
            type="button"
            onClick={() => onView(cert)}
            className="flex-1 inline-flex items-center justify-center gap-1.5 h-9 rounded-full bg-white/[0.05] border border-white/10 hover:bg-white/[0.08] hover:border-white/20 text-xs font-medium text-white/80 transition"
          >
            <Eye className="w-3.5 h-3.5" /> View
          </button>
          <a
            href={cert.pdf}
            download
            className="flex-1 inline-flex items-center justify-center gap-1.5 h-9 rounded-full bg-primary text-white text-xs font-medium hover:bg-primary-400 shadow-glow transition"
          >
            <Download className="w-3.5 h-3.5" /> Download
          </a>
        </div>
      </div>
    </motion.article>
  )
}

function Lightbox({
  cert,
  onClose,
}: {
  cert: Certificate | null
  onClose: () => void
}) {
  useEffect(() => {
    if (!cert) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [cert, onClose])

  return (
    <AnimatePresence>
      {cert && (
        <motion.div
          key="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-8 bg-black/85 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-w-5xl w-full max-h-[90vh] rounded-2xl bg-slate-950 border border-white/10 shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 px-6 py-4 border-b border-white/[0.06]">
              <div>
                <h4 className="font-display font-semibold text-base text-white">
                  {cert.title}
                </h4>
                <p className="text-xs text-white/50 mt-0.5">
                  {cert.issuer} · {cert.date}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={cert.pdf}
                  download
                  className="inline-flex items-center gap-1.5 h-9 px-4 rounded-full bg-primary text-white text-xs font-medium hover:bg-primary-400 shadow-glow transition"
                >
                  <Download className="w-3.5 h-3.5" /> Download PDF
                </a>
                <button
                  type="button"
                  aria-label="Close"
                  onClick={onClose}
                  className="w-9 h-9 rounded-full bg-white/[0.06] border border-white/10 hover:bg-white/10 inline-flex items-center justify-center text-white/70 hover:text-white transition"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="overflow-auto p-4 sm:p-6 bg-[#0b0f1f]">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-auto rounded-lg shadow-lg mx-auto bg-white"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function Certificates() {
  const [active, setActive] = useState<Certificate | null>(null)

  return (
    <section id="certificates" className="section-padding relative">
      <div className="container-page">
        <SectionHeading
          eyebrow="Certificates"
          title={
            <>
              Credentials &{' '}
              <span className="gradient-text">recognitions</span>.
            </>
          }
          description="A few certifications and recognitions earned along the way — preview them inline or grab the PDF."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certificates.map((c, i) => (
            <CertificateCard key={c.id} cert={c} index={i} onView={setActive} />
          ))}
        </div>
      </div>

      <Lightbox cert={active} onClose={() => setActive(null)} />
    </section>
  )
}
