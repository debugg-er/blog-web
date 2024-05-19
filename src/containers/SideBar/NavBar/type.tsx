import { LucideIcon } from 'lucide-react'

export type NavItemConf = {
  level?: number
  href: string
  title: string
  Icon?: LucideIcon
  right?: React.ReactNode
}
