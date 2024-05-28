import { rest } from './rest'

export const getWorkspaces = () => rest('/users/me/workspaces')
export const getWorksapceById = (id: string): Promise<any> => rest(`/workspaces/${id}`)
