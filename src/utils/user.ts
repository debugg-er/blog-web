import { User } from '@/types/user'

export const getFullName = (user: User) => `${user.firstName} ${user.lastName}`
