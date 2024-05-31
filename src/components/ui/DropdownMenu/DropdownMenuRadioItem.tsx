'use client'

import { Circle } from 'lucide-react'
import React from 'react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'

import { cn } from '@/utils/className'

function DropdownMenuRadioItem(
  { className, children, ...props }: DropdownMenuPrimitive.DropdownMenuRadioItemProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return (
    <DropdownMenuPrimitive.RadioItem
      ref={ref}
      className={cn(
        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-primary-100 focus:text-primary-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-primary-800 dark:focus:text-primary-50',
        className,
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <Circle className="fill-current h-2 w-2" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  )
}

export default React.forwardRef(DropdownMenuRadioItem)
