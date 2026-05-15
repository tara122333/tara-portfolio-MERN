import { useRef, type ReactNode, type MouseEvent } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { cn } from '@/utils/cn'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  strength?: number
  as?: 'a' | 'button'
  href?: string
  onClick?: () => void
}

export function MagneticButton({
  children,
  className,
  strength = 0.35,
  as = 'a',
  href,
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 })

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const offsetX = e.clientX - rect.left - rect.width / 2
    const offsetY = e.clientY - rect.top - rect.height / 2
    x.set(offsetX * strength)
    y.set(offsetY * strength)
  }
  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const Inner = as === 'a' ? (
    <a href={href} onClick={onClick} className="inline-block">
      {children}
    </a>
  ) : (
    <button type="button" onClick={onClick} className="inline-block">
      {children}
    </button>
  )

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={cn('inline-block will-change-transform', className)}
    >
      {Inner}
    </motion.div>
  )
}
