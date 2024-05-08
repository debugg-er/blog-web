import { Avatar, AvatarProps } from '@mantine/core'

import { User } from '@/types/user'

export type UserAvatarProps = {
    user: Pick<User, 'avatar' | 'firstName' | 'lastName'>
} & AvatarProps
export default function UserAvatar({ user, ...rest }: UserAvatarProps) {
    return <Avatar {...rest}>{user.firstName.charAt(0)}</Avatar>
}
