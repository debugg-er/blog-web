// import { cookies } from 'next/headers'

import { User } from '@/types/user'

// import { rest } from './rest'

// export async function getUser(): Promise<User | null> {
//   const accessToken = cookies().get('access_token')?.value
//   if (!accessToken) return null

//   // jwt.verify(accessToken, publicKey())

//   const res = await rest('/users/me/profile', { cache: 'no-cache' })
//   const { data: user } = await res.json()
//   return user
// }

export function getFullName(user: User) {
  return `${user.firstName} ${user.lastName}`
}
