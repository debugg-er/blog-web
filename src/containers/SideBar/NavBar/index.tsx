import { HtmlHTMLAttributes } from 'react'

import { Separator } from '@/components/ui/separator'
import { cn } from '@/utils/className'

import NavItem from './NavItem'
import { NavItemConf } from './type'

type NavProps = {
  segments: NavItemConf[][]
} & HtmlHTMLAttributes<HTMLDivElement>

export default function NavBar({ segments, className, ...rest }: NavProps) {
  return (
    <aside className={cn('flex flex-col gap-1 p-2', className)} {...rest}>
      {segments.map((items, i) => (
        <>
          {i > 0 && <Separator />}
          {items.map((item) => (
            <NavItem key={item.href} className="p-2" {...item} />
          ))}
        </>
      ))}
    </aside>
  )
}
