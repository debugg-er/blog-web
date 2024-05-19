import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

import { getProfile } from '@/api/user'
import { AuthProvider } from '@/contexts/AuthContext'
import ReactQueryProvider from '@/providers/ReactQueryProvider'
import { cn } from '@/utils'

import '../globals.css'

export const metadata: Metadata = {
  title: '📭 ⭐️ 🤒 ⛽️ 🌲 🚁 😩 💻',
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  const [messages, { data: user }] = await Promise.all([getMessages(), getProfile()])

  return (
    <html lang={locale}>
      <body className={cn(GeistSans.className, 'h-screen')}>
        <NextIntlClientProvider messages={messages}>
          <ReactQueryProvider>
            <AuthProvider user={user!}>{children}</AuthProvider>
          </ReactQueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
