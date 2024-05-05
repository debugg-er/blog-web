'use client'

import { FiArrowLeft, FiLogOut, FiMessageCircle, FiPhoneOutgoing, FiSearch } from 'react-icons/fi'
import { Avatar, Menu, Text } from '@mantine/core'

import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from '@/navigation'
import { User } from '@/types/user'

export type UserAvatarMenuProps = {
  user: User
  children: React.ReactNode
}
export default function UserAvatarMenu({ user, children }: UserAvatarMenuProps) {
  const router = useRouter()
  const { logout } = useAuth()

  const handleSignOut = async () => {
    await logout.mutateAsync()
    router.push('/login')
  }

  return (
    <Menu shadow="md" width={240}>
      <Menu.Target>{children}</Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Account</Menu.Label>
        <Menu.Item classNames={{ item: 'w-full', itemLabel: 'w-full' }}>
          <div className="flex items-center gap-2 w-full">
            <Avatar>{user.firstName.charAt(0)}</Avatar>
            <div className="min-w-0">
              <p className="font-semibold">{user.firstName} {user.lastName}</p>
              <p className="text-gray-600 truncate text-xs">{user.email || 'example@gmail.com'}</p>
            </div>
          </div>
        </Menu.Item>
        <Menu.Item leftSection={<FiMessageCircle size={14} />}>Messages</Menu.Item>
        <Menu.Item leftSection={<FiPhoneOutgoing size={14} />}>Gallery</Menu.Item>
        <Menu.Item
          leftSection={<FiSearch size={14} />}
          rightSection={
            <Text size="xs" c="dimmed">
              ⌘K
            </Text>
          }
        >
          Search
        </Menu.Item>

        <Menu.Divider />

        <Menu.Label>Action</Menu.Label>
        <Menu.Item leftSection={<FiArrowLeft size={14} />}>Transfer my data</Menu.Item>
        <Menu.Item color="red" leftSection={<FiLogOut size={14} />} onClick={handleSignOut}>
          Sign out
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}
