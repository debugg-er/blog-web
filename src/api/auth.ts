import { rest } from './rest'

export const loginUserPass = (payload: { email: string; password: string }) => {
  return rest('/auth/login', {
    method: 'POST',
    body: payload,
  })
}

export const logout = () => rest('/auth/logout', { method: 'POST' })
