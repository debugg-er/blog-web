import { LucideIcon } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/utils/className'

export type InputProps = {
  LeftIcon?: LucideIcon
  RightIcon?: LucideIcon
  classNames?: {
    root?: string
    extraIcon?: string
  }
} & React.InputHTMLAttributes<HTMLInputElement>

function Input(
  { className, classNames, LeftIcon, RightIcon, ...props }: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  return (
    <div className={cn('relative', classNames?.root)}>
      {LeftIcon && (
        <LeftIcon
          className={cn('absolute left-0 top-1/2 mx-2 -translate-y-1/2 text-gray-800', classNames?.extraIcon)}
          size={16}
        />
      )}
      <input
        className={cn(
          'flex h-10 w-full items-center gap-2 rounded-md border border-stone-200 bg-white px-3 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-stone-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-stone-800 dark:bg-stone-950 dark:ring-offset-stone-950 dark:placeholder:text-stone-400 dark:focus-visible:ring-stone-300',
          LeftIcon && 'pl-8',
          RightIcon && 'pr-8',
          className,
        )}
        ref={ref}
        {...props}
      />
      {RightIcon && (
        <RightIcon
          className={cn('absolute right-0 top-1/2 mx-2 -translate-y-1/2 text-gray-800', classNames?.extraIcon)}
          size={16}
        />
      )}
    </div>
  )
}
Input.displayName = 'Input'

export default React.forwardRef(Input)