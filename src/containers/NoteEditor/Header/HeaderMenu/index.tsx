'use client'

import { Brain, BrickWall, Hammer, Users } from 'lucide-react'

import DropdownMenu, { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/DropdownMenu'

export default function HeaderMenu({ children }: { children: React.ReactNode }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">{children}</DropdownMenuTrigger>
      <DropdownMenuContent align="start" side="left">
        <DropdownMenuItem Icon={Brain}>Set Reminder</DropdownMenuItem>
        <DropdownMenuItem Icon={BrickWall}>Billing</DropdownMenuItem>
        <DropdownMenuItem Icon={Users}>Team</DropdownMenuItem>
        <DropdownMenuItem Icon={Hammer}>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
