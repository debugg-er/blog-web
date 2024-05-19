import { cookies } from 'next/headers'

export const nextFetch = async (input: string, init?: RequestInit) => {
  const accessToken = cookies().get('access_token')?.value
  const response = await fetch(`http://localhost:8080${input}`, {
    headers: accessToken
      ? {
          Authorization: `Bearer ${accessToken}`,
        }
      : undefined,
    ...init,
  })
  return await response.json()
}
