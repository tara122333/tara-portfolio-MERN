import { type ReactNode } from 'react'
import { Reveal } from './Reveal'

interface SectionHeadingProps {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
}

export function SectionHeading({ eyebrow, title, description, align = 'center' }: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'text-center mx-auto max-w-2xl' : 'text-left max-w-2xl'}>
      {eyebrow && (
        <Reveal>
          <span className="eyebrow">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" /> {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="section-heading mt-4">{title}</h2>
      </Reveal>
      {description && (
        <Reveal delay={0.12}>
          <p className="mt-4 text-white/60 leading-relaxed text-base sm:text-lg">{description}</p>
        </Reveal>
      )}
    </div>
  )
}
