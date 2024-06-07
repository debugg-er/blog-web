import { Brain, Calendar, ListTodo, Notebook, Settings, Users } from 'lucide-react'

import { getBooksByWorkspaceId } from '@/api/book'
import { getWorkspaces } from '@/api/workspace'
import { Separator } from '@/components/ui/separator'
import { BookTreeProvider } from '@/contexts/BookTreeContext'

import BookTreeSection from './BookTree'
import NavItem from './NavBar/NavItem'
import Toolbar from './Toolbar'
import UserInfo from './UserInfo'
import WorkspaceSelector from './WorkspaceSelector'

export type SidebarProps = {
  workspaceId: string
}

export default async function Sidebar({ workspaceId }: SidebarProps) {
  const [{ data: workspaces }, { data: books }] = await Promise.all([
    getWorkspaces(),
    getBooksByWorkspaceId(workspaceId),
  ])

  return (
    <aside className="flex h-full flex-col">
      <div className="p-2">
        <WorkspaceSelector workspaces={workspaces} workspaceId={workspaceId} />
      </div>

      <Separator />
      <div className="flex min-w-0 flex-1 flex-col gap-1 overflow-auto p-2">
        <NavItem title="Member" Icon={Users} href={`/w/${workspaceId}/members`} />
        <NavItem title="Workspace Setting" Icon={Settings} href={`/w/${workspaceId}/settings`} />

        <Separator />

        <NavItem title="Notebook" Icon={Notebook} href={`/w/${workspaceId}`} />
        <div className="overflow-auto pr-1">
          <BookTreeProvider books={books}>
            <BookTreeSection />
          </BookTreeProvider>
        </div>

        <Separator />

        <NavItem title="Your Tasks" Icon={ListTodo} href={`/w/${workspaceId}/todo`} />
        <NavItem title="Calendar" Icon={Calendar} href={`/w/${workspaceId}/calendar`} />
        <NavItem title="Reminder" Icon={Brain} href={`/w/${workspaceId}/calendar`} />
      </div>

      <Separator />

      <div className="flex flex-col gap-2 p-2">
        <Toolbar />
        <UserInfo />
      </div>
    </aside>
  )
}
