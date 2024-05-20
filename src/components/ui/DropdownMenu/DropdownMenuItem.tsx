'use client'

import { LucideIcon } from 'lucide-react'
import React from 'react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'

import { cn } from '@/utils'

export type DropdownMenuSubTriggerProps = {
  inset?: boolean
  Icon?: LucideIcon
  shortcut?: string
} & DropdownMenuPrimitive.DropdownMenuItemProps

const DropdownMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={cn('ml-auto text-xs tracking-widest opacity-60', className)} {...props} />
}

function DropdownMenuContent(
  { className, inset, children, Icon, shortcut, ...props }: DropdownMenuSubTriggerProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return (
    <DropdownMenuPrimitive.Item
      ref={ref}
      className={cn(
        'relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50',
        inset && 'pl-8',
        className,
      )}
      {...props}
    >
      {Icon && <Icon size={16} />}
      <span className="flex-1">{children}</span>
      {shortcut && <DropdownMenuShortcut>{shortcut}</DropdownMenuShortcut>}
    </DropdownMenuPrimitive.Item>
  )
}

export default React.forwardRef(DropdownMenuContent)
