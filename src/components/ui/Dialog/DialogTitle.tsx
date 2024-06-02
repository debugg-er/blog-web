import React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'

import { cn } from '@/utils/className'

function DialogTitle(
  { className, ...props }: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return (
    <DialogPrimitive.Title
      ref={ref}
      className={cn('text-lg font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  )
}

export default React.forwardRef(DialogTitle)
