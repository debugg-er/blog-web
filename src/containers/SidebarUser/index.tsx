'use client'

import { FiSettings } from 'react-icons/fi'

import UserAvatar from '@/components/UserAvatar'
import { useAuth } from '@/contexts/AuthContext'
import { getFullName } from '@/utils/user'

import SettingMenu from './SettingMenu'

function SidebarUser() {
  const { user } = useAuth()

  return (
    <div className="px-3 py-2 gap-2 items-center">
      <UserAvatar user={user} />
      <div className="flex-1">
        <div>{getFullName(user)}</div>
        <div>{getFullName(user)}</div>
      </div>
      <SettingMenu user={user}>
        <div className="cursor-pointer">
          <FiSettings size={22} />
        </div>
      </SettingMenu>
    </div>
  )
}

export default SidebarUser
