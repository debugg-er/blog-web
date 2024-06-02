import { rest } from './rest'

export const getBooksByWorkspaceId = (workspaceId: string) => rest(`/workspaces/${workspaceId}/books`)
export const createBook = (payload: Record<string, any>) =>
  rest(`/books`, {
    method: 'POST',
    body: payload,
  })
