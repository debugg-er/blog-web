'use client'

import { usePathname } from '@/navigation'
import { cn } from '@/utils'

export default function NavItemTitle({ title, href }: {title: string, href: string}) {
  const pathname = usePathname()
  const active = href === pathname
  return <h5 className={cn('flex-1 font-normal text-sm', active && 'font-semibold')}>{title}</h5>
}
