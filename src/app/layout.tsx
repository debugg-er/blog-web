import { Roboto } from 'next/font/google'
import { ColorSchemeScript } from '@mantine/core'

import './globals.css'
import '@mantine/core/styles.css'

const roboto = Roboto({
  weight: ['100', '300', '500', '700', '400', '900'],
  subsets: ['vietnamese', 'latin'],
})

export default async function RootLayout({
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

      <body className={roboto.className}>{children}</body>
    </html>
  )
}
