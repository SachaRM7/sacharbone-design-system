import * as React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

export const Modal = Dialog.Root
export const ModalTrigger = Dialog.Trigger
export const ModalClose = Dialog.Close

export function ModalContent({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Dialog.Content>) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="modal-overlay fixed inset-0 z-50 bg-[var(--color-navy-950)]/50 backdrop-blur-[2px]" />
      <Dialog.Content
        className={cn(
          'modal-content fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-brand-lg)] focus:outline-none',
          className,
        )}
        {...props}
      >
        {children}
        <Dialog.Close className="absolute right-4 top-4 rounded-md p-1 text-[var(--color-chrome-600)] transition-colors hover:bg-[var(--color-silver-100)] hover:text-[var(--color-navy-900)] focus:outline-none focus:ring-2 focus:ring-[var(--color-navy-700)]">
          <X className="size-4" aria-hidden="true" />
          <span className="sr-only">Fermer</span>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  )
}

export function ModalHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('mb-4 flex flex-col gap-1.5 pr-6', className)} {...props} />
}

export function ModalTitle({ className, ...props }: React.ComponentPropsWithoutRef<typeof Dialog.Title>) {
  return (
    <Dialog.Title
      className={cn(
        'font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--color-brand)]',
        className,
      )}
      {...props}
    />
  )
}

export function ModalDescription({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof Dialog.Description>) {
  return <Dialog.Description className={cn('text-sm text-[var(--color-text-muted)]', className)} {...props} />
}

export function ModalFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('mt-6 flex items-center justify-end gap-3', className)} {...props} />
}
