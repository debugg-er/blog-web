'use client'

import UserAvatar from '@/components/elements/UserAvatar'
import { useAuth } from '@/contexts/AuthContext'
import { getFullName } from '@/utils/user'

import SettingMenu from './SettingMenu'

export default function UserInfo() {
  const { user } = useAuth()
  return (
    <div className="flex items-center gap-2">
      <UserAvatar user={user} />
      <div className="flex-1 min-w-0">
        <h5 className="truncate text-sm text-gray-800">{getFullName(user)}</h5>
        <div className="truncate text-xs break-all text-gray-700">{user.email}</div>
      </div>
      <SettingMenu />
    </div>
  )
}
