import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

export const badgeVariants = cva(
  'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium',
  {
    variants: {
      variant: {
        brand: 'bg-[var(--color-navy-900)] text-white',
        neutral: 'bg-[var(--color-silver-200)] text-[var(--color-navy-900)]',
        outline: 'border border-[var(--color-navy-900)] text-[var(--color-navy-900)]',
        success: 'bg-[color-mix(in_srgb,var(--color-success)_15%,white)] text-[var(--color-success)]',
        warning: 'bg-[color-mix(in_srgb,var(--color-warning)_15%,white)] text-[var(--color-warning)]',
        danger: 'bg-[color-mix(in_srgb,var(--color-danger)_15%,white)] text-[var(--color-danger)]',
      },
    },
    defaultVariants: {
      variant: 'brand',
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />
}
