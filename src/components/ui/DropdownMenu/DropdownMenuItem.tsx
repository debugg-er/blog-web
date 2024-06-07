'use client'

import { cva, VariantProps } from 'class-variance-authority'
import { LucideIcon } from 'lucide-react'
import React from 'react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'

import { cn } from '@/utils/className'

const DropdownMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={cn('ml-auto text-xs tracking-widest opacity-60', className)} {...props} />
}

const dropdownMenuItemVariants = cva(
  'relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
  {
    variants: {
      variant: {
        default: 'focus:bg-primary-100 focus:text-primary-900 dark:focus:bg-primary-800 dark:focus:text-primary-50',
        destructive: 'focus:bg-red-50 focus:text-red-500 dark:focus:bg-red-800 dark:focus:text-red-50 text-red-500',
      },
    },

    defaultVariants: {
      variant: 'default',
    },
  },
)

export type DropdownMenuSubTriggerProps = {
  inset?: boolean
  Icon?: LucideIcon
  shortcut?: string
} & DropdownMenuPrimitive.DropdownMenuItemProps &
  VariantProps<typeof dropdownMenuItemVariants>

function DropdownMenuContent(
  { className, inset, children, Icon, shortcut, variant, ...props }: DropdownMenuSubTriggerProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return (
    <DropdownMenuPrimitive.Item
      ref={ref}
      className={cn(inset && 'pl-8', dropdownMenuItemVariants({ variant, className }))}
      {...props}
    >
      {Icon && <Icon size={16} />}
      <span className="flex-1">{children}</span>
      {shortcut && <DropdownMenuShortcut>{shortcut}</DropdownMenuShortcut>}
    </DropdownMenuPrimitive.Item>
  )
}

export default React.forwardRef(DropdownMenuContent)
