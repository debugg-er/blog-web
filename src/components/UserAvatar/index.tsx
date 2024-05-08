import { Avatar } from '@mantine/core'

import { User } from '@/types/user'

export type UserAvatarProps = {
    user: Pick<User, 'avatar' | 'firstName' | 'lastName'>
}
export default function UserAvatar({ user }: UserAvatarProps) {
    return <Avatar className="cursor-pointer">{user.firstName.charAt(0)}</Avatar>
}
