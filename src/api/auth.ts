import { client } from './client'

export const loginUserPass = (payload: { email: string; password: string }) => {
  return client.post('/auth/login', payload)
}

export const logout = () => {
  return client.post('/auth/logout')
}
