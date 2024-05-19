import { getWorksapceById } from '@/api/workspace'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import { redirect } from '@/navigation'

export default async function WorkspaceLayout({
  sidebar,
  children,
  params: { workspaceId },
}: {
  sidebar: React.ReactNode
  children: React.ReactNode
  params: { workspaceId: string }
}) {
  const { data: workspace } = await getWorksapceById(workspaceId)
  if (!workspace) {
    redirect(`/`)
    return
  }

  return (
    <div className="h-full">
      <ResizablePanelGroup direction='horizontal'>
        <ResizablePanel defaultSize={15}>{sidebar}</ResizablePanel>
        <ResizableHandle withHandle/>
        <ResizablePanel defaultSize={85}>{children}</ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}
