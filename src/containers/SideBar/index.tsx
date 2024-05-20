import { Calendar, ListTodo, Notebook, Settings, Users } from 'lucide-react'

import { getBooks } from '@/api/book'
import { getWorkspaces } from '@/api/workspace'
import { Separator } from '@/components/ui/separator'

import BookTree from './BookTree'
import NavItem from './NavBar/NavItem'
import UserInfo from './UserInfo'
import WorkspaceSelector from './WorkspaceSelector'

export type SidebarProps = {
  workspaceId: string
}

export default async function Sidebar({ workspaceId }: SidebarProps) {
  const [{ data: workspaces }, { data: books }] = await Promise.all([getWorkspaces(), getBooks(workspaceId)])

  return (
    <aside className="flex h-full flex-col">
      <div className="p-2">
        <WorkspaceSelector workspaces={workspaces} workspaceId={workspaceId} />
      </div>

      <Separator />
      <div className="flex min-w-0 flex-1 flex-col gap-1 overflow-auto p-2">
        <NavItem title="Member" Icon={Users} href={`/w/${workspaceId}/members`} />
        <NavItem title="Workspace setting" Icon={Settings} href={`/w/${workspaceId}/settings`} />

        <Separator />

        <NavItem title="Notebook" Icon={Notebook} href={`/w/${workspaceId}`} />
        <div className="overflow-auto pl-2">
          <BookTree books={books} workspaceId={workspaceId} indent={false} />
        </div>

        <Separator />

        <NavItem title="Your To-do" Icon={ListTodo} href={`/w/${workspaceId}/todo`} />
        <NavItem title="Calendar" Icon={Calendar} href={`/w/${workspaceId}/calendar`} />
      </div>

      <Separator />

      <div className="p-2">
        <UserInfo />
      </div>
    </aside>
  )
}
