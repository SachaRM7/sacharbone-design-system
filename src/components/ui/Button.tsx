import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium font-[family-name:var(--font-body)] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-navy-700)] disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-[var(--color-navy-900)] text-white shadow-[var(--shadow-brand-sm)] hover:bg-[var(--color-navy-800)] active:bg-[var(--color-navy-950)]',
        secondary:
          'bg-[var(--color-silver-200)] text-[var(--color-navy-900)] hover:bg-[var(--color-silver-300)] active:bg-[var(--color-silver-400)]',
        outline:
          'border border-[var(--color-navy-900)] text-[var(--color-navy-900)] bg-transparent hover:bg-[var(--color-navy-900)] hover:text-white',
        ghost:
          'text-[var(--color-navy-900)] bg-transparent hover:bg-[var(--color-silver-100)]',
        danger:
          'bg-[var(--color-danger)] text-white hover:brightness-95 active:brightness-90',
      },
      size: {
        sm: 'h-9 px-3 text-sm',
        md: 'h-11 px-5 text-base',
        lg: 'h-12 px-7 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading, disabled, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
        {children}
      </button>
    )
  },
)
Button.displayName = 'Button'
