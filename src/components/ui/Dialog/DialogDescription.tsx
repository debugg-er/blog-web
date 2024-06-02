import React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'

import { cn } from '@/utils/className'

function DialogDescription(
  { className, ...props }: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return (
    <DialogPrimitive.Description
      ref={ref}
      className={cn('text-sm text-primary-500 dark:text-primary-400', className)}
      {...props}
    />
  )
}

export default React.forwardRef(DialogDescription)
