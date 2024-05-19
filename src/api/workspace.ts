import { AxiosResponse } from 'axios'

import { ApiProvider } from '@/types/apiProvider'

import { client } from './client'
import { nextFetch } from './rest'

export function getWorkspaces(provider: ApiProvider.Axios): Promise<AxiosResponse<any, any>>
export function getWorkspaces(provider: ApiProvider.NextFetch): Promise<any>
export function getWorkspaces(): Promise<any>
export function getWorkspaces(provider = ApiProvider.NextFetch) {
  const url = '/users/me/workspaces'
  return provider === ApiProvider.NextFetch ? nextFetch(url) : client.get(url)
}

export function getWorksapceById(id: string, provider: ApiProvider.Axios): Promise<AxiosResponse<any, any>>
export function getWorksapceById(id: string, provider: ApiProvider.NextFetch): Promise<any>
export function getWorksapceById(id: string): Promise<any>
export function getWorksapceById(id: string, provider = ApiProvider.NextFetch) {
  const url = `/workspaces/${id}`
  return provider === ApiProvider.NextFetch ? nextFetch(url) : client.get(url)
}
