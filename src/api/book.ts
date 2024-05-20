import { AxiosResponse } from 'axios'

import { ApiProvider } from '@/types/apiProvider'

import { client } from './client'
import { nextFetch } from './rest'

export function getBooks(workspaceId: string, provider: ApiProvider.Axios): Promise<AxiosResponse<any, any>>
export function getBooks(workspaceId: string, provider: ApiProvider.NextFetch): Promise<any>
export function getBooks(workspaceId: string): Promise<any>
export function getBooks(workspaceId: string, provider = ApiProvider.NextFetch) {
  const url = `/workspaces/${workspaceId}/books`
  return provider === ApiProvider.NextFetch ? { data: [] } : client.get(url)
}
