'use client'
import { BrickWall, Hammer, LogOut, Settings, User, Users } from 'lucide-react'
import { useMutation } from '@tanstack/react-query'

import { logout } from '@/api/auth'
import DropdownMenu, {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu'
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
        <Settings className="text-neutral-700 transition-all hover:rotate-90 hover:text-neutral-900" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" side="right">
        <DropdownMenuItem Icon={User}>Profile</DropdownMenuItem>
        <DropdownMenuItem Icon={BrickWall}>Billing</DropdownMenuItem>
        <DropdownMenuItem Icon={Users}>Team</DropdownMenuItem>
        <DropdownMenuItem Icon={Hammer}>Subscription Chart</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive" Icon={LogOut} onClick={handleLogout}>
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
