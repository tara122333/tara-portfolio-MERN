import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/utils/cn'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

const variants: Record<Variant, string> = {
  primary:
    'bg-primary text-white shadow-glow hover:bg-primary-400 hover:shadow-glow-lg active:scale-[0.98] focus-visible:ring-primary',
  secondary:
    'bg-white text-slate-950 hover:bg-white/90 active:scale-[0.98] focus-visible:ring-white/40',
  ghost:
    'bg-white/5 text-white hover:bg-white/10 border border-white/10 backdrop-blur active:scale-[0.98] focus-visible:ring-white/30',
  outline:
    'border border-primary/40 text-primary hover:bg-primary/10 active:scale-[0.98] focus-visible:ring-primary/50',
}

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-base',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', leftIcon, rightIcon, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:opacity-50 disabled:pointer-events-none',
          variants[variant],
          sizes[size],
          className,
        )}
        {...props}
      >
        {leftIcon}
        {children}
        {rightIcon}
      </button>
    )
  },
)
Button.displayName = 'Button'
