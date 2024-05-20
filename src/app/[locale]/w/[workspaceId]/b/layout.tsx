import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import NoteList from '@/containers/NoteList'

export default function Layout({ children, params }: { children: React.ReactNode; params: { bookId: string } }) {
  return (
    <main className='h-full'>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={25}>
          <NoteList bookId={params.bookId} />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={75}>{children}</ResizablePanel>
      </ResizablePanelGroup>
    </main>
  )
}
