import { cookies } from 'next/headers'

import { User } from '@/types/user'
import { rest } from '@/utils/rest'

export async function getUser(): Promise<User | null> {
  const accessToken = cookies().get('access_token')?.value
  if (!accessToken) return null

  const res = await rest('/users/me/profile', { cache: 'no-cache' })
  const { data: user } = await res.json()
  return user
}
