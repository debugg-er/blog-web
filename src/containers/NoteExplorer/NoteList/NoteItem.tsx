'use client'

import moment from 'moment-timezone'
import { useParams } from 'next/navigation'
import { useFormatter } from 'next-intl'

import TaskProgress from '@/components/elements/TaskProgress'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { Link, usePathname } from '@/navigation'
import { Note } from '@/types/note'
import { cn } from '@/utils'

export default function NoteItem({ note }: { note: Note }) {
  const params = useParams<{ bookId: string; workspaceId: string }>()
  const pathname = usePathname()
  const formatter = useFormatter()

  const href = `/w/${params.workspaceId}/b/${params.bookId}/${note.id}`
  const active = pathname === href
  const total = 5
  const done = 3
  // title={formatter.dateTime(moment(note.updatedAt).toDate(), { timeStyle: 'medium', dateStyle: 'medium' })}
  return (
    <Link href={href}>
      <article
        className={cn(
          'cursor-pointer rounded-lg border border-gray-200 bg-white p-3 transition-all hover:bg-stone-100',
          active && '!bg-neutral-700',
        )}
      >
        <div className="flex">
          <h5 className={cn('groupmb-1 flex-1 truncate text-sm', active && 'text-stone-50')}>{note.title}</h5>
          <Tooltip>
            <TooltipTrigger className="group flex">
              <span
                className={cn(
                  'text-xs text-stone-500 group-hover:text-stone-600',
                  active && 'text-stone-300 group-hover:text-stone-200',
                )}
              >
                {moment(note.updatedAt).fromNow()}
              </span>
            </TooltipTrigger>
            <TooltipContent side="right">
              {formatter.dateTime(moment(note.updatedAt).toDate(), { timeStyle: 'medium', dateStyle: 'medium' })}
            </TooltipContent>
          </Tooltip>
        </div>

        <TaskProgress
          isDark={active}
          totalTasks={total}
          doneTasks={done}
          classNames={{
            progress: 'w-1/4',
          }}
        />

        <span className={cn('line-clamp-2 text-xs leading-5 text-stone-600', active && 'text-stone-300')}>
          {note.content}
        </span>
      </article>
    </Link>
  )
}
