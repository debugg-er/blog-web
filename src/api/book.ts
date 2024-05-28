import { rest } from './rest'

export const getBooksByWorkspaceId = (workspaceId: string) => rest(`/workspaces/${workspaceId}/books`)
