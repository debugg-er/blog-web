import { getBooks } from '@/api/book'
import { getWorkspaces } from '@/api/workspace'
import Sidebar from '@/containers/SideBar'

export default async function SidebarPage({ params }: { params: { workspaceId: string } }) {
  const [{ data: workspaces }, { data: books }] = await Promise.all([getWorkspaces(), getBooks(params.workspaceId)])

  return <Sidebar workspaces={workspaces} books={books} workspaceId={params.workspaceId} />
}
