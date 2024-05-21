import { AxiosResponse } from 'axios'

import { ApiProvider } from '@/types/apiProvider'

import { client } from './client'
import { nextFetch } from './rest'

export function getBooksByWorkspaceId(workspaceId: string, provider: ApiProvider.Axios): Promise<AxiosResponse<any, any>>
export function getBooksByWorkspaceId(workspaceId: string, provider: ApiProvider.NextFetch): Promise<any>
export function getBooksByWorkspaceId(workspaceId: string): Promise<any>
export function getBooksByWorkspaceId(workspaceId: string, provider = ApiProvider.NextFetch) {
  const url = `/workspaces/${workspaceId}/books`
  return provider === ApiProvider.NextFetch ? nextFetch(url) : client.get(url)
}
