'use client'

import moment from 'moment-timezone'
import { useParams } from 'next/navigation'

import { Link, usePathname } from '@/navigation'
import { Note } from '@/types/note'
import { cn } from '@/utils'

export default function NoteItem({ note }: { note: Note }) {
  const params = useParams<{ bookId: string; workspaceId: string }>()
  const pathname = usePathname()

  const href = `/w/${params.workspaceId}/b/${params.bookId}/n/${note.id}`
  const active = pathname === href
  return (
    <Link href={href}>
      <article
        className={cn(
          active && '!bg-stone-900',
          'cursor-pointer rounded-lg border border-gray-200 p-3 transition-all hover:bg-gray-100',
        )}
      >
        <div className="flex">
          <h5 className={cn('groupmb-1 flex-1 truncate text-sm', active && 'text-slate-50')}>{note.title}</h5>
          <span className={cn('text-xs text-gray-500', active && 'text-slate-300')}>
            {moment(note.updatedAt).fromNow()}
          </span>
        </div>
        <span className={cn('line-clamp-2 text-xs leading-5 text-gray-600', active && 'text-slate-300')}>
          {note.content}
        </span>
      </article>
    </Link>
  )
}
