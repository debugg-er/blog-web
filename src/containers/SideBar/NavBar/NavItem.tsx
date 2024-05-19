import { AnchorHTMLAttributes } from 'react'

import { Link } from '@/navigation'
import { cn } from '@/utils'

import NavItemTitle from './NavItemTitle'
import { NavItemConf } from './type'

export default function NavItem({
  href,
  Icon,
  level = 0,
  title,
  right,
  className,
  ...rest
}: NavItemConf & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link
      href={href}
      className={cn('flex p-2 items-center gap-2 hover:bg-slate-100 rounded', className)}
      style={{ marginLeft: level * 16 }}
      {...rest}
    >
      {Icon && <Icon size={16} />}
      <NavItemTitle title={title} href={href} />
      {right}
    </Link>
  )
}
