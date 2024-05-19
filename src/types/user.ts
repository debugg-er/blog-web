export type User = {
  id: number
  username: string
  firstName: string
  lastName: string
  email?: string | null
  avatar?: string
  ssoMeta?: object
  createdAt?: Date | string
  updatedAt?: Date | string
  bannedAt?: Date | string | null
  bannedById?: number | null
  posts?: object[]
}
