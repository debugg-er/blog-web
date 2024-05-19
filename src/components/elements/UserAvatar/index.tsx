import { AvatarProps } from '@radix-ui/react-avatar'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { User } from '@/types/user'

export type UserAvatarProps = {
  user: User
} & AvatarProps

export default function UserAvatar({ user }: UserAvatarProps) {
  return (
    <Avatar>
      <AvatarImage src={user.avatar} alt="user.avatar" />
      <AvatarFallback className='bg-gray-300'>{user.lastName.slice(0, 1)}</AvatarFallback>
    </Avatar>
  )
}
