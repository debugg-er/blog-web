import { getFormatter } from 'next-intl/server'
import { HTMLAttributes } from 'react'

import TaskProgress from '@/components/elements/TaskProgress'
import { Note } from '@/types/note'
import { cn } from '@/utils'

export type HeaderProps = {
  notePromise: Promise<Note>
} & HTMLAttributes<HTMLDivElement>

export default async function Header({ notePromise, className, ...rest }: HeaderProps) {
  const formatter = await getFormatter()
  const note = await notePromise

  return (
    <div className={cn(className)} {...rest}>
      <h4>{note.title}</h4>
      <div className="flex items-center gap-3">
        <span className="rounded bg-stone-200 px-1 text-xs">
          {formatter.dateTime(new Date(note.createdAt), 'medium')}
        </span>
        <TaskProgress classNames={{ progress: 'w-[100px]' }} totalTasks={5} doneTasks={3} />
      </div>
    </div>
  )
}
