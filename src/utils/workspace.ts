import { Workspace, WorkspaceType } from '@/types/workspace'

export const getWorkspaceName = (workspace: Workspace) =>
  workspace.type === WorkspaceType.Personal ? 'Personal' : workspace.name
