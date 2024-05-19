'use client'

import { ChevronDown, EllipsisVertical } from 'lucide-react'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@radix-ui/react-collapsible'

import { Link, usePathname } from '@/navigation'
import { Book } from '@/types/book'
import { cn } from '@/utils'

export type BookTreeProps = {
  books: Book[]
  indent?: boolean
  workspaceId: string
}

export default function BookTree({ books, indent = true, workspaceId }: BookTreeProps) {
  const pathname = usePathname()

  return (
    <div className="w-full">
      {books.map((book) => (
        <div key={book.id} className="flex w-full gap-1">
          {indent && <div className="border-r border-l-slate-400 min-w-4"></div>}
          <div className="w-full">
            <Collapsible>
              <div className="flex items-center gap-1 p-2">
                {book.books && (
                  <CollapsibleTrigger>
                    <ChevronDown size={14} />
                  </CollapsibleTrigger>
                )}
                <Link
                  href={`/w/${workspaceId}/b/${book.id}`}
                  className={cn(
                    'flex-1 min-w-0 text-sm select-none cursor-pointer truncate hover:font-medium',
                    pathname === `/w/${workspaceId}/b/${book.id}` && 'font-medium',
                  )}
                >
                  {book.title}
                </Link>
                <EllipsisVertical className="cursor-pointer" size={14} />
              </div>
              <CollapsibleContent>
                {book.books && <BookTree books={book.books} workspaceId={workspaceId} />}
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      ))}
    </div>
  )
}
