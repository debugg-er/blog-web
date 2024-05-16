import ReactQueryProvider from '@/providers/ReactQueryProvider'

export default async function AppLayout({ children }: Record<string, React.ReactNode>) {
  return <ReactQueryProvider>{children}</ReactQueryProvider>
}
