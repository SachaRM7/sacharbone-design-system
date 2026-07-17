import * as React from 'react'
import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  helperText?: string
  error?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, helperText, error, id, ...props }, ref) => {
    const generatedId = React.useId()
    const inputId = id ?? generatedId
    const describedBy = error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-[var(--color-navy-900)]"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          className={cn(
            'h-11 w-full rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-3.5 text-base text-[var(--color-text)] placeholder:text-[var(--color-chrome-400)] transition-colors',
            'focus:outline-none focus:ring-2 focus:ring-[var(--color-navy-700)] focus:border-[var(--color-navy-700)]',
            'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--color-surface-muted)]',
            error &&
              'border-[var(--color-danger)] focus:ring-[var(--color-danger)] focus:border-[var(--color-danger)]',
            className,
          )}
          {...props}
        />
        {error ? (
          <p id={`${inputId}-error`} className="text-sm text-[var(--color-danger)]">
            {error}
          </p>
        ) : helperText ? (
          <p id={`${inputId}-helper`} className="text-sm text-[var(--color-text-muted)]">
            {helperText}
          </p>
        ) : null}
      </div>
    )
  },
)
Input.displayName = 'Input'
