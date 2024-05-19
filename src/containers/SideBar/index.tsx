import { Calendar, ListTodo, Notebook, Settings, Users } from 'lucide-react'

import { Separator } from '@/components/ui/separator'
import { Book } from '@/types/book'
import { Workspace } from '@/types/workspace'

import BookTree from './BookTree'
import NavItem from './NavBar/NavItem'
import UserInfo from './UserInfo'
import WorkspaceSelector from './WorkspaceSelector'

export type SidebarProps = {
  workspaces: Workspace[]
  workspaceId: string
  books: Book[]
}

export default async function Sidebar({ workspaces, workspaceId, books }: SidebarProps) {
  return (
    <aside className="h-full flex flex-col">
      <div className="p-2">
        <WorkspaceSelector workspaces={workspaces} workspaceId={workspaceId} />
      </div>

      <Separator />
      <div className="flex-1 flex flex-col p-2 gap-1 min-w-0 overflow-auto">
        <NavItem title="Member" Icon={Users} href={`/w/${workspaceId}/members`} />
        <NavItem title="Workspace setting" Icon={Settings} href={`/w/${workspaceId}/settings`} />

        <Separator />

        <NavItem title="Notebook" Icon={Notebook} href={`/w/${workspaceId}`} />
        <div className="pl-2 overflow-auto">
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
