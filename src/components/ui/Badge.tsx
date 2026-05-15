import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '@/utils/cn'

type Variant = 'default' | 'primary' | 'outline'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: Variant
}

const variants: Record<Variant, string> = {
  default: 'bg-white/[0.06] border border-white/10 text-white/80',
  primary: 'bg-primary/15 border border-primary/30 text-primary',
  outline: 'border border-white/15 text-white/70',
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium tracking-tight',
        variants[variant],
        className,
      )}
      {...props}
    />
  ),
)
Badge.displayName = 'Badge'
