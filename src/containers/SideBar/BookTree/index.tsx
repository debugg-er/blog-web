'use client'

import { ChevronRight, EllipsisVertical } from 'lucide-react'
import { useState } from 'react'

import Collapsible, { CollapsibleContent, CollapsibleTrigger } from '@/components/ui/Collapsible'
import { usePathname, useRouter } from '@/navigation'
import { Book } from '@/types/book'
import { cn } from '@/utils/className'
import { isSubpath } from '@/utils/url'

import BookMenu from './BookMenu'

export type BookTreeProps = {
  books: Book[]
  indent?: boolean
  workspaceId: string
}

export default function BookTree({ books, indent = true, workspaceId }: BookTreeProps) {
  return (
    <div className="w-full">
      {books.map((book) => (
        <BookItem key={book.id} indent={indent} workspaceId={workspaceId} book={book} />
      ))}
    </div>
  )
}

export type BookItemProps = {
  book: Book
  indent?: boolean
  workspaceId: string
}
function BookItem({ book, indent, workspaceId }: BookItemProps) {
  const [expand, setExpand] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const href = `/w/${workspaceId}/b/${book.id}`
  const isActive = isSubpath(pathname, href)

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
          <CollapsibleContent>
            {book.books && <BookTree books={book.books} workspaceId={workspaceId} />}
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  )
}
