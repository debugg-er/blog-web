import { Inter } from 'next/font/google'
import { ColorSchemeScript, MantineProvider } from '@mantine/core'

import { mantineTheme } from '@/theme'

import './globals.css'
import '@mantine/core/styles.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>

      <body className={inter.className}>
        <MantineProvider theme={mantineTheme}>{children}</MantineProvider>
      </body>
    </html>
  )
}
