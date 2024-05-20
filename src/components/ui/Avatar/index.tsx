'use client'

import * as React from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'

import { cn } from '@/utils/className'

function Avatar({ className, ...props }: AvatarPrimitive.AvatarProps, ref: React.ForwardedRef<HTMLSpanElement>) {
  return (
    <AvatarPrimitive.Root
      ref={ref}
      className={cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', className)}
      {...props}
    />
  )
}

export { default as AvatarFallback } from './AvatarFallback'
export { default as AvatarImage } from './AvatarImage'
export default React.forwardRef(Avatar)
