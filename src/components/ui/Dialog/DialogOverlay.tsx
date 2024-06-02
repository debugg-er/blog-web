import React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'

import { cn } from '@/utils/className'

function DialogOverlay(
  { className, ...props }: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return (
    <DialogPrimitive.Overlay
      ref={ref}
      className={cn(
        'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        className,
      )}
      {...props}
    />
  )
}

export default React.forwardRef(DialogOverlay)
