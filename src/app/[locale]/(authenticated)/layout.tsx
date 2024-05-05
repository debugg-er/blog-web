import { AppShell, AppShellHeader, AppShellMain } from '@mantine/core'

import MainHeader from '@/containers/main/MainHeader'
import { AuthProvider } from '@/contexts/AuthContext'

import { rest } from '../../rest'

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const res = await rest('/users/me/profile', { cache: 'no-cache'  })
  const { data: user  } = await res.json()

  return (
    <AuthProvider user={user}>
      <AppShell header={{ height: 60 }}>
        <AppShellHeader>
          <div className="w-[1200px] mx-auto h-full">
            <MainHeader />
          </div>
        </AppShellHeader>
        <AppShellMain>
          <div className="w-[1200px] mx-auto h-full my-6">{children}</div>
        </AppShellMain>
      </AppShell>
    </AuthProvider>
  )
}
