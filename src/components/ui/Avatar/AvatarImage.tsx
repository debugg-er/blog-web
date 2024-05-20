'use client'

import * as React from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'

import { cn } from '@/utils/className'

function AvatarImage(
  { className, ...props }: AvatarPrimitive.AvatarImageProps,
  ref: React.ForwardedRef<HTMLImageElement>,
) {
  return (
    <AvatarPrimitive.Image
      ref={ref}
      className={cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', className)}
      {...props}
    />
  )
}

export default React.forwardRef(AvatarImage)
