import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

import { getProfile } from '@/api/user'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Font } from '@/configs/font'
import { formats } from '@/configs/intl'
import { AuthProvider } from '@/contexts/AuthContext'
import ReactQueryProvider from '@/providers/ReactQueryProvider'
import { cn } from '@/utils'

import '../globals.css'
import '@mdxeditor/editor/style.css'

export const metadata: Metadata = {
  title: '⛽️ 📭 ⭐️ 🤒 🌲 🚁 😩 💻',
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
      <body className={cn(Font.className, 'h-screen overflow-hidden')}>
        <NextIntlClientProvider messages={messages} formats={formats}>
          <TooltipProvider delayDuration={300}>
            <ReactQueryProvider>
              <AuthProvider user={user!}>{children}</AuthProvider>
            </ReactQueryProvider>
          </TooltipProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
