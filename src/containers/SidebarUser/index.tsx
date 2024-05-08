'use client'

import { FiSettings } from 'react-icons/fi'
import { Flex, Text } from '@mantine/core'

import UserAvatar from '@/components/UserAvatar'
import { useAuth } from '@/contexts/AuthContext'
import { getFullName } from '@/utils/user'

import SettingMenu from './SettingMenu'

function SidebarUser() {
  const { user } = useAuth()

  return (
    <Flex className="px-3 py-2" gap={8} align="center">
      <UserAvatar user={user} />
      <Flex className="flex-1" direction="column">
        <Text size="sm">{getFullName(user)}</Text>
        <Text size='xs'>{getFullName(user)}</Text>
      </Flex>
      <SettingMenu user={user} position="right-end">
        <div className='cursor-pointer'>
          <FiSettings size={22} />
        </div>
      </SettingMenu>
    </Flex>
  )
}

export default SidebarUser
