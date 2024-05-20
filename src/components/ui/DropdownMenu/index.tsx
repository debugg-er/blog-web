'use client'

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'

const DropdownMenu = DropdownMenuPrimitive.Root

export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger
export const DropdownMenuGroup = DropdownMenuPrimitive.Group
export const DropdownMenuPortal = DropdownMenuPrimitive.Portal
export const DropdownMenuSub = DropdownMenuPrimitive.Sub
export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

export { default as DropdownMenuSubTrigger } from './DropdownMenuSubTrigger'
export { default as DropdownMenuSubContent } from './DropdownMenuSubContent'
export { default as DropdownMenuCheckboxItem } from './DropdownMenuCheckboxItem'
export { default as DropdownMenuContent } from './DropdownMenuContent'
export { default as DropdownMenuLabel } from './DropdownMenuLabel'
export { default as DropdownMenuItem } from './DropdownMenuItem'
export { default as DropdownMenuSeparator } from './DropdownMenuSeparator'
export { default as DropdownMenuRadioItem } from './DropdownMenuRadioItem'

export default DropdownMenu
