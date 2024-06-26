import { X } from 'lucide-react'
import React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'

import { cn } from '@/utils/className'

import DialogOverlay from './DialogOverlay'

export type DialogContentProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>

function DialogContent({ className, children, ...props }: DialogContentProps, ref: React.ForwardedRef<HTMLDivElement>) {
  return (
    <DialogPrimitive.Portal>
      <DialogOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-primary-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] dark:border-primary-800 dark:bg-primary-950 sm:rounded-lg',
          className,
        )}
        {...props}
      >
        {children}
        <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-primary-100 data-[state=open]:text-primary-500 dark:ring-offset-primary-950 dark:focus:ring-primary-300 dark:data-[state=open]:bg-primary-800 dark:data-[state=open]:text-primary-400">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  )
}

export default React.forwardRef(DialogContent)
