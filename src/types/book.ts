export type Book = {
  id: number
  title: string
  createdAt: Date
  updatedAt: Date
  workspaceId: number
  parentId: number | null
  books?: Book[]
}
