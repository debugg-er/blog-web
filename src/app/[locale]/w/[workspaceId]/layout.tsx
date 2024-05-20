import { getWorksapceById } from '@/api/workspace'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import Sidebar from '@/containers/SideBar'
import { redirect } from '@/navigation'

export default async function WorkspaceLayout({
  children,
  params: { workspaceId },
}: {
  children: React.ReactNode
  params: { workspaceId: string }
}) {
  const { data: workspace } = await getWorksapceById(workspaceId)
  if (!workspace) {
    redirect(`/`)
  }

  return (
    <div className="h-full">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={15}>
          <Sidebar workspaceId={workspaceId} />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={85}>{children}</ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}
