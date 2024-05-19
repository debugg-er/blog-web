import { AxiosResponse } from 'axios'

import { ApiProvider } from '@/types/apiProvider'

import { client } from './client'
import { nextFetch } from './rest'

export function getProfile(provider: ApiProvider.Axios): Promise<AxiosResponse<any, any>>
export function getProfile(provider: ApiProvider.NextFetch): Promise<any>
export function getProfile(): Promise<any>
export function getProfile(provider = ApiProvider.NextFetch) {
  const url = '/users/me/profile'
  return provider === ApiProvider.NextFetch ? nextFetch(url) : client.get(url)
}
