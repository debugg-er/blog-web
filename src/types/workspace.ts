export enum WorkspaceType {
  Personal = 'Personal',
  Custom = 'Custom',
}

export type Workspace = {
  id: number
  type: WorkspaceType
  name: string
  createdAt?: Date | string
  updatedAt?: Date | string
}
