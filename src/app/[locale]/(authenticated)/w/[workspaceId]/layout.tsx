type LayoutProps = {
  sidebar: React.ReactNode
  explorer: React.ReactNode
  main: React.ReactNode
  params: { locale: string; workspaceId: string }
}

export default async function AppLayout({ sidebar, explorer, main, params }: LayoutProps) {
  return (
    <div className="flex h-full w-full">
      <div className="h-full w-[250px]">{sidebar}</div>
      <div className="h-full w-[400px]">{explorer}</div>
      <div className="h-full flex-1">{main}</div>
    </div>
  )
}
