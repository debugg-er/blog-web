'use client'
import { BrickWall, Hammer, LogOut, Settings, User, Users } from 'lucide-react'
import { useMutation } from '@tanstack/react-query'

import { logout } from '@/api'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useRouter } from '@/navigation'

export default function SettingMenu() {
  const { mutateAsync: logoutUser } = useMutation({ mutationFn: logout })
  const router = useRouter()

  const handleLogout = async () => {
    await logoutUser()
    router.push('/')
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <Settings className="text-gray-700 hover:text-gray-900 hover:rotate-90 transition-all" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" side="right">
        <DropdownMenuItem Icon={User}>Profile</DropdownMenuItem>
        <DropdownMenuItem Icon={BrickWall}>Billing</DropdownMenuItem>
        <DropdownMenuItem Icon={Users}>Team</DropdownMenuItem>
        <DropdownMenuItem Icon={Hammer}>SubscriptionSubscription</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="!text-red-500" Icon={LogOut} onClick={handleLogout}>
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
