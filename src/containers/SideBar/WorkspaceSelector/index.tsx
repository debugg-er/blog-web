'use client'

import { Select, SelectContent, SelectSeparator, SelectTrigger } from '@/components/ui/select'
import { useRouter } from '@/navigation'
import { Workspace, WorkspaceType } from '@/types/workspace'

import WorkspaceItem from './WorkspaceItem'

export type WorkspaceSelectorProps = {
  workspaces: Workspace[]
  workspaceId: string
}

export default function WorkspaceSelector({ workspaces, workspaceId }: WorkspaceSelectorProps) {
  const router = useRouter()
  const personalWorkspace = workspaces.find((w) => w.type === WorkspaceType.Personal)!
  const definedWorkspaces = workspaces.filter((w) => w.type !== WorkspaceType.Personal)
  const selectedWorkspace = workspaces.find((w) => w.id.toString() === workspaceId)!

  return (
    <Select value={workspaceId} onValueChange={(id) => router.push(`/w/${id}`)}>
      <SelectTrigger className="font-medium focus:ring-0 focus:ring-offset-0">
        <WorkspaceItem workspace={selectedWorkspace} isItem={false} />
      </SelectTrigger>
      <SelectContent>
        <WorkspaceItem workspace={personalWorkspace} />
        <SelectSeparator />
        {definedWorkspaces.map((w) => (
          <WorkspaceItem key={w.id} workspace={w} />
        ))}
      </SelectContent>
    </Select>
  )
}
