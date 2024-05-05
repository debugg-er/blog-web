'use client'

import { FiBell, FiSearch } from 'react-icons/fi'
import { Avatar, TextInput, Title } from '@mantine/core'

import { AnchorText } from '@/components/elements'
import { useAuth } from '@/contexts/AuthContext'
import { Link } from '@/navigation'

import UserAvatarMenu from './components/UserAvatarMenu'

export default function MainHeader() {
  const { user } = useAuth()

  return (
    <div className="flex h-full items-center gap-3">
      <Title className="flex-1" order={3}>
        Developing Environment
      </Title>

      <TextInput w={360} rightSection={<FiSearch size={18} />} />
      <FiBell />
      {user ? (
        <UserAvatarMenu user={user}>
          <Avatar className="cursor-pointer">{user.firstName.charAt(0)}</Avatar>
        </UserAvatarMenu>
      ) : (
        <Link href="/login">
          <AnchorText>Sign In/Sign Up</AnchorText>
        </Link>
      )}
    </div>
  )
}
