'use client'

import { Bell, LucideIcon, LucideProps, Sun } from 'lucide-react'

import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

export default function Toolbar() {
  const icons: ({
    Icon: LucideIcon
    title: string
  } & LucideProps)[] = [
    {
      Icon: Sun,
      title: 'Toggle theme',
    },
    {
      Icon: Bell,
      title: 'Notification',
    },
  ]
  return (
    <div className="flex items-center">
      <span className="flex-1 text-xs italic">Synchonized now...</span>

      <div className="flex gap-1">
        {icons.map((icon, i) => (
          <Tooltip key={i}>
            <TooltipTrigger>
              <icon.Icon size={28} className="cursor-pointer rounded-lg p-1 hover:bg-stone-100" />
            </TooltipTrigger>
            <TooltipContent>{icon.title}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  )
}
