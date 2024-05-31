'use client'

import { CircleCheckBig, ListChecks } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { HTMLAttributes } from 'react'

import { Progress } from '@/components/ui/progress'
import { cn } from '@/utils/className'

export type TaskProgressProps = {
  isDark?: boolean
  totalTasks: number
  doneTasks: number
  classNames?: {
    progress?: string
  }
} & HTMLAttributes<HTMLDivElement>

export default function TaskProgress({
  isDark,
  doneTasks,
  totalTasks,
  className,
  classNames,
  ...rest
}: TaskProgressProps) {
  const t = useTranslations('components.taskProgress')

  const progress = (doneTasks * 100) / totalTasks
  const isDone = totalTasks === doneTasks

  return (
    <div className={cn('flex items-center gap-2', isDark && 'text-primary-50', className)} {...rest}>
      <ListChecks size={12} strokeWidth={3} />
      <Progress
        value={progress}
        className={cn('h-1 bg-primary-400', classNames?.progress)}
        classNames={{
          indicator: progress < 30 ? 'bg-red-500' : progress < 70 ? 'bg-yellow-500' : 'bg-green-500',
        }}
      />
      <CircleCheckBig size={12} className="text-green-500" strokeWidth="3px" />
      <span className="text-nowrap text-xs">{isDone ? t('done') : t('totalTasks', { doneTasks, totalTasks })}</span>
    </div>
  )
}
