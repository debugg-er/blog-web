'use client'

import { ChevronRight, EllipsisVertical } from 'lucide-react'
import { useParams } from 'next/navigation'
import { useState } from 'react'

import Collapsible, { CollapsibleContent, CollapsibleTrigger } from '@/components/ui/Collapsible'
import { useBookTree } from '@/contexts/BookTreeContext'
import { useRouter } from '@/navigation'
import { Book } from '@/types/book'
import { cn } from '@/utils/className'

import BookMenu from './BookMenu'
import { containChild } from './helper'
import { CreateBookButton } from '../CreateBookButton'

export type BookTreeProps = {
  books: Book[]
  indent?: boolean
}

export default function BookTreeSection() {
  const { books } = useBookTree()
  return (
    <>
      <BookTree books={books} indent={false} />
      <CreateBookButton />
    </>
  )
}

export function BookTree({ books, indent = true }: BookTreeProps) {
  return (
    <div className="w-full">
      {books.map((book) => (
        <BookItem key={book.id} indent={indent} book={book} />
      ))}
    </div>
  )
}

export type BookItemProps = {
  book: Book
  indent?: boolean
}
function BookItem({ book, indent }: BookItemProps) {
  const router = useRouter()
  const { workspaceId, bookId } = useParams<{ workspaceId: string; bookId: string }>()

  const [expand, setExpand] = useState(containChild(book, parseInt(bookId)))

  const href = `/w/${workspaceId}/book/${book.id}`
  const isActive = bookId === book.id.toString()

  return (
    <div key={book.id} className="flex w-full gap-1">
      {indent && <div className="min-w-4 border-r border-l-primary-400"></div>}
      <div className="w-full min-w-0">
        <Collapsible open={expand} onOpenChange={setExpand}>
          <div
            className={cn(
              'flex cursor-pointer items-center gap-1 rounded-lg px-2 py-1 hover:bg-primary-100',
              isActive && '!bg-primary-700 !text-primary-50',
            )}
            onClick={() => router.push(href)}
          >
            {book.books && (
              <CollapsibleTrigger onClick={(e) => e.stopPropagation()}>
                <div className="rounded bg-primary-300 bg-opacity-0 transition-all hover:bg-opacity-30">
                  <ChevronRight className={cn('transition-[transform]', expand && 'rotate-90')} size={16} />
                </div>
              </CollapsibleTrigger>
            )}
            <span className="min-w-0 flex-1 select-none truncate py-1 text-sm" title={book.title}>
              {book.title}
            </span>
            <BookMenu book={book} onExpandAll={() => {}}>
              <EllipsisVertical
                className="cursor-pointer rounded bg-primary-300 bg-opacity-0 p-[2px] transition-all hover:bg-opacity-30"
                size={16}
                strokeWidth={3}
              />
            </BookMenu>
          </div>
          <CollapsibleContent>{book.books && <BookTree books={book.books} />}</CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  )
}
