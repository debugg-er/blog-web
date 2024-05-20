'use client'

import { ChevronRight } from 'lucide-react'
import React from 'react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'

import { cn } from '@/utils'

export type DropdownMenuSubTriggerProps = {
  inset?: boolean
} & DropdownMenuPrimitive.DropdownMenuSubTriggerProps

function DropdownMenuSubTrigger(
  { className, inset, children, ...props }: DropdownMenuSubTriggerProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      ref={ref}
      className={cn(
        'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-slate-100 data-[state=open]:bg-slate-100 dark:focus:bg-slate-800 dark:data-[state=open]:bg-slate-800',
        inset && 'pl-8',
        className,
      )}
      {...props}
    >
      {children}
      <ChevronRight className="ml-auto h-4 w-4" />
    </DropdownMenuPrimitive.SubTrigger>
  )
}

export default React.forwardRef(DropdownMenuSubTrigger)
