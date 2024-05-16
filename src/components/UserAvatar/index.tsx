import { User } from '@/types/user'
import { Avatar } from '../ui/avatar'
import { AvatarProps } from '@radix-ui/react-avatar'

export type UserAvatarProps = {
    user: Pick<User, 'avatar' | 'firstName' | 'lastName'>
} & AvatarProps
export default function UserAvatar({ user, ...rest }: UserAvatarProps) {
    return <Avatar {...rest}>{user.firstName.charAt(0)}</Avatar>
}
