import { AppShell, AppShellHeader, AppShellMain } from '@mantine/core'

import Header from './Header'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <AppShell header={{ height: 60 }}>
      <AppShellHeader>
        <Header />
      </AppShellHeader>
      <AppShellMain>{children}</AppShellMain>
    </AppShell>
  )
}
