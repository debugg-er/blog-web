import { redirect } from '@/navigation'
import { rest } from '@/utils/rest'

export default async function WorkspaceLayout({
  sidebar,
  children,
  params: { workspaceId },
}: {
  sidebar: React.ReactNode
  children: React.ReactNode
  params: { workspaceId: string }
}) {
  const { data: workspace } = await rest(`/workspaces/${workspaceId}`).then((r) => r.json())
  if (!workspace) {
    redirect(`/`)
    return
  }

  return (
    <div className="ok">
      {sidebar}
      {children}
    </div>
  )
}
