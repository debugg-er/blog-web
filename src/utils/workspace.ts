import { Workspace, WorkspaceType } from '@/types/workspace'

export function getWorkspaceName(workspace: Workspace) {
  return workspace.type === WorkspaceType.Personal ? 'Personal' : workspace.name
}
