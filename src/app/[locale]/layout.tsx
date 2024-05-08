import { MantineProvider } from '@mantine/core'

import ReactQueryProvider from '@/providers/ReactQueryProvider'
import { mantineTheme } from '@/theme'

export default async function AppLayout({ children }: Record<string, React.ReactNode>) {
  return (
    <MantineProvider theme={mantineTheme}>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </MantineProvider>
  )
}
