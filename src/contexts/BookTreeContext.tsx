'use client'

import { useParams } from 'next/navigation'
import React, { useContext, useState } from 'react'
import { useMutation } from '@tanstack/react-query'

import { bookApi } from '@/api'
import { useRouter } from '@/navigation'
import { Book } from '@/types/book'

export type BookTreeContextValue = {
  books: Book[]
  createBook: (params: { title: string; parentId?: number }) => any
}
export const BookTreeContext = React.createContext<BookTreeContextValue>({ books: [] } as any)

export const useBookTree = () => useContext(BookTreeContext)

type BookTreeProviderProps = {
  books: Book[]
  children: React.ReactNode
}
export function BookTreeProvider({ books: _books, children }: BookTreeProviderProps) {
  const router = useRouter()
  const params = useParams<{ workspaceId: string }>()
  const createBookMutation = useMutation({
    mutationFn: bookApi.createBook,
  })

  const [books, setBooks] = useState(_books)

  const createBook: BookTreeContextValue['createBook'] = async ({ title }) => {
    const { data: newBook } = await createBookMutation.mutateAsync({
      workspaceId: params.workspaceId,
      title,
    })

    if (!newBook.parentId) {
      setBooks([...books, newBook])
    } else {
      const parent = books.find((b) => b.parentId === newBook.parentId)
      if (!parent) return
      parent.books ??= []
      parent.books.push(newBook)
      setBooks([...books])
    }

    router.push(`/w/${params.workspaceId}/book/${newBook.id}`)
    return newBook
  }

  return <BookTreeContext.Provider value={{ books, createBook }}>{children}</BookTreeContext.Provider>
}
