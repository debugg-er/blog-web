'use client'

import React from 'react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'

import { cn } from '@/utils/className'

function DropdownMenuSeparator(
  { className, children, ...props }: DropdownMenuPrimitive.MenuSeparatorProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return (
    <DropdownMenuPrimitive.Separator
      ref={ref}
      className={cn('-mx-1 my-1 h-px bg-stone-100 dark:bg-stone-800', className)}
      {...props}
    />
  )
}

export default React.forwardRef(DropdownMenuSeparator)
