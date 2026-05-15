import { useMemo } from 'react'
import { motion } from 'framer-motion'

interface ParticleProps {
  count?: number
}

export function FloatingParticles({ count = 22 }: ParticleProps) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1.5,
        delay: Math.random() * 6,
        duration: 6 + Math.random() * 8,
        opacity: 0.15 + Math.random() * 0.4,
      })),
    [count],
  )

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-primary"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            filter: 'blur(0.4px)',
            boxShadow: '0 0 12px rgba(255,122,0,0.55)',
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [p.opacity, p.opacity * 1.6, p.opacity],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
