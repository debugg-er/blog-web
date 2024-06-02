import * as DialogPrimitive from '@radix-ui/react-dialog'

import { cn } from '@/utils/className'

const Dialog = DialogPrimitive.Root
const DialogTrigger = DialogPrimitive.Trigger
const DialogPortal = DialogPrimitive.Portal
const DialogClose = DialogPrimitive.Close

export { DialogTrigger, DialogPortal, DialogClose }
export { default as DialogContent } from './DialogContent'
export { default as DialogDescription } from './DialogDescription'
export { default as DialogOverlay } from './DialogOverlay'
export { default as DialogTitle } from './DialogTitle'

export type { DialogContentProps } from './DialogContent'
export type DialogProps = DialogPrimitive.DialogProps

export function DialogHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex flex-col space-y-1.5 text-center sm:text-left', className)} {...props} />
}

export function DialogFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)} {...props} />
}

export default Dialog
