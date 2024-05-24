
import { AxiosResponse } from 'axios'

import { ApiProvider } from '@/types/apiProvider'

import { client } from './client'
import { nextFetch } from './rest'

export function getNotesByBookId(bookId: string, provider: ApiProvider.Axios): Promise<AxiosResponse<any, any>>
export function getNotesByBookId(bookId: string, provider: ApiProvider.NextFetch): Promise<any>
export function getNotesByBookId(bookId: string): Promise<any>
export function getNotesByBookId(bookId: string, provider = ApiProvider.NextFetch) {
  const url = `/books/${bookId}/notes`
  return provider === ApiProvider.NextFetch ? nextFetch(url) : client.get(url)
}

export function getNote(noteId: string, provider: ApiProvider.Axios): Promise<AxiosResponse<any, any>>
export function getNote(noteId: string, provider: ApiProvider.NextFetch): Promise<any>
export function getNote(noteId: string): Promise<any>
export function getNote(noteId: string, provider = ApiProvider.NextFetch) {
  const url = `/notes/${noteId}`
  return provider === ApiProvider.NextFetch ? nextFetch(url) : client.get(url)
}
