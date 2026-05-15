import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '@/data/testimonials'
import { SectionHeading } from '@/components/SectionHeading'
import { cn } from '@/utils/cn'

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
  const [selected, setSelected] = useState(0)

  const scrollTo = useCallback((i: number) => emblaApi && emblaApi.scrollTo(i), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap())
    onSelect()
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const id = setInterval(() => emblaApi.scrollNext(), 5000)
    return () => clearInterval(id)
  }, [emblaApi])

  return (
    <section className="section-padding relative">
      <div className="container-page">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              Kind words from{' '}
              <span className="gradient-text">teams I've shipped with</span>.
            </>
          }
          description="A few notes from founders, leads, and product partners across the journey."
        />

        <div className="relative mt-14 max-w-5xl mx-auto">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {testimonials.map((t) => (
                <div
                  key={t.name + t.company}
                  className="min-w-0 shrink-0 basis-full md:basis-[70%] lg:basis-[55%] px-3"
                >
                  <div className="glass-strong relative rounded-3xl p-8 md:p-10 gradient-border h-full">
                    <Quote className="w-9 h-9 text-primary/70" />
                    <p className="mt-5 text-base sm:text-lg leading-relaxed text-white/85">
                      "{t.quote}"
                    </p>
                    <div className="mt-7 flex items-center gap-3">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-12 h-12 rounded-full object-cover border border-white/15"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                        }}
                      />
                      <div>
                        <div className="text-sm font-medium text-white">{t.name}</div>
                        <div className="text-xs text-white/50 mt-0.5">
                          {t.role} · {t.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => emblaApi?.scrollPrev()}
              className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 hover:bg-white/10 inline-flex items-center justify-center text-white/70 hover:text-white transition"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => scrollTo(i)}
                  className={cn(
                    'rounded-full transition-all',
                    selected === i ? 'w-8 h-2 bg-primary' : 'w-2 h-2 bg-white/20 hover:bg-white/40',
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Next"
              onClick={() => emblaApi?.scrollNext()}
              className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 hover:bg-white/10 inline-flex items-center justify-center text-white/70 hover:text-white transition"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
