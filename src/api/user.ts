import { rest } from './rest'

export const getProfile = () => rest('/users/me/profile')
