'use client'

import React from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'

import { cn } from '@/utils/className'

function AvatarFallback(
  { className, ...props }: AvatarPrimitive.AvatarFallbackProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) {
  return (
    <AvatarPrimitive.Fallback
      ref={ref}
      className={cn(
        'flex h-full w-full items-center justify-center rounded-full bg-primary-100 dark:bg-primary-800',
        className,
      )}
      {...props}
    />
  )
}

export default React.forwardRef(AvatarFallback)
