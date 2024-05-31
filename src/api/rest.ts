import qs from 'query-string'

import { API_BASE_URL } from '@/configs/env'
import { isServerSide } from '@/utils/next'

export type NextFetchOptions = {
  body?: Record<string, any>
  params?: Record<string, string>
} & Omit<RequestInit, 'body'>

export const rest = async (input: string, { body, params, ...init }: NextFetchOptions = {}) => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  }
  if (isServerSide()) {
    const { cookies } = await import('next/headers')
    const accessToken = cookies().get('access_token')?.value
    if (accessToken) {
      headers.Authorization = `Bearer ${accessToken}`
    }
  }

  const url = new URL(input, API_BASE_URL)
  if (params) {
    url.search = qs.stringify(params)
  }

  const response = await fetch(url, {
    credentials: 'include',
    headers,
    body: body ? JSON.stringify(body) : undefined,
    ...init,
  })
  console.log(response.status, response.url)
  return await response.json()
}
