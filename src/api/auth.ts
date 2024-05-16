import { client } from "./client"

export type LoginUserPassPayload = { email: string; password: string }
export const loginUserPass = (payload: LoginUserPassPayload) => {
    return client.post('/auth/login', payload)
}

export const logout = () => {
    return client.post('/auth/logout')
}
