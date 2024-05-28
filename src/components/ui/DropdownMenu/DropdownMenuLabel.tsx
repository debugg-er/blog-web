'use client'

import React from 'react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'

import { cn } from '@/utils/className'

export type DropdownMenuRadioItemProps = {
  inset?: boolean
} & DropdownMenuPrimitive.MenuLabelProps

function DropdownMenuRadioItem(
  { className, children, inset, ...props }: DropdownMenuRadioItemProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return (
    <DropdownMenuPrimitive.Label
      ref={ref}
      className={cn('px-2 py-1.5 text-sm font-semibold', inset && 'pl-8', className)}
      {...props}
    />
  )
}

export default React.forwardRef(DropdownMenuRadioItem)
