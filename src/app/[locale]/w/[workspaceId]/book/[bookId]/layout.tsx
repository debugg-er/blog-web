import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import NoteExplorer from '@/containers/NoteExplorer'

export default function Layout({ children, params }: { children: React.ReactNode; params: { bookId: string } }) {
  return (
    <main className="h-full">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={25}>
          <NoteExplorer bookId={params.bookId} />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={75}>{children}</ResizablePanel>
      </ResizablePanelGroup>
    </main>
  )
}
