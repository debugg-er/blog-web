'use client'

import { FiArrowLeft, FiLogOut, FiMessageCircle, FiPhoneOutgoing, FiSearch } from 'react-icons/fi'
import { useMutation } from '@tanstack/react-query'

import { logout } from '@/api'
import { useRouter } from '@/navigation'
import { User } from '@/types/user'

export type SettingMenuProps = {
  user: User
  children: React.ReactNode
}

export default function SettingMenu({ user, children, ...rest }: SettingMenuProps) {
  const router = useRouter()
  const { mutateAsync: logoutUser } = useMutation({ mutationFn: logout })

  const handleSignOut = async () => {
    await logoutUser()
    router.push('/login')
  }

  return <div onClick={handleSignOut}>{children}</div>
}
