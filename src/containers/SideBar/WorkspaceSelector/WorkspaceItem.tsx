import { Leaf, User } from 'lucide-react'

import { SelectItem } from '@/components/ui/select'
import { Workspace, WorkspaceType } from '@/types/workspace'

export default function WorkspaceItem({ workspace, isItem = true }: { workspace: Workspace; isItem?: boolean }) {
  const Icon = workspace.type === WorkspaceType.Personal ? User : Leaf
  const content = (
    <div className="flex min-w-0 flex-row gap-2">
      <Icon className="min-w-4" size={16} />
      <span className="truncate">{workspace.type === WorkspaceType.Personal ? 'Your workspace' : workspace.name}</span>
    </div>
  )
  return isItem ? (
    <SelectItem
      className="my-1 rounded has-[.selected]:bg-primary-800 has-[.selected]:text-white"
      value={workspace.id.toString()}
    >
      {content}
    </SelectItem>
  ) : (
    content
  )
}
