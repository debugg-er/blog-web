import { client } from "./client"

export const getMe = () => {
    return client.get('users/me')
} 
