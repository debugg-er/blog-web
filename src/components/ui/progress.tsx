'use client'

import * as React from 'react'
import * as ProgressPrimitive from '@radix-ui/react-progress'

import { cn } from '@/utils/className'

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  {
    classNames?: {
      indicator?: string
    }
  } & React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, classNames, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn('relative h-4 w-full overflow-hidden rounded-full bg-primary-100 dark:bg-primary-800', className)}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn('h-full w-full flex-1 bg-primary-900 transition-all dark:bg-primary-50', classNames?.indicator)}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
