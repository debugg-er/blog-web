import { cookies } from 'next/headers'

import { AuthProvider } from '@/contexts/AuthContext'
import { redirect } from '@/navigation'
import { User } from '@/types/user'
import { rest } from '@/utils/rest'

async function getUser(): Promise<User | null> {
  const accessToken = cookies().get('access_token')?.value
  if (!accessToken) return null

  const res = await rest('/users/me/profile', { cache: 'no-cache' })
  const { data: user } = await res.json()
  return user
}

export default async function AppLayout({ children }: Record<string, React.ReactNode>) {
  const user = await getUser()
  if (!user) {
    return redirect('/')
  }

  return <AuthProvider user={user}>{children}</AuthProvider>
}
