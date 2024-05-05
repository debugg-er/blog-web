import { Roboto } from 'next/font/google'
import { ColorSchemeScript, MantineProvider } from '@mantine/core'

import ReactQueryProvider from '@/providers/ReactQueryProvider'
import { mantineTheme } from '@/theme'

import './globals.css'
import '@mantine/core/styles.css'

const roboto = Roboto({
  weight: ['100', '300', '500', '700', '400', '900'],
  subsets: ['vietnamese', 'latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <title>Demo</title>
      </head>

      <body className={roboto.className}>
        <ReactQueryProvider>
          <MantineProvider theme={mantineTheme}>{children}</MantineProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
