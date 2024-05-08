import { cookies } from 'next/headers'

export const rest = (input: string, init?: RequestInit) => {
    const accessToken = cookies().get('access_token')?.value
    return fetch(`http://localhost:8080${input}`, {
        headers: accessToken ? {
            Authorization: `Bearer ${accessToken}`,
        } : undefined,
        ...init,
    })
}
