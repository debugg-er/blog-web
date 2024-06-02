import { cva, VariantProps } from 'class-variance-authority'
import { LucideIcon } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/utils/className'

const inputVariants = cva(
  'flex w-full items-center gap-2 rounded-md border border-primary-200 bg-white px-3 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-primary-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:cursor-not-allowed disabled:opacity-50 dark:border-primary-800 dark:bg-primary-950 dark:ring-offset-primary-950 dark:placeholder:text-primary-400 dark:focus-visible:ring-primary-300',
  {
    variants: {
      size: {
        sm: 'h-9',
        md: 'h-10',
        lg: 'h-11',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)

export type InputProps = {
  LeftIcon?: LucideIcon
  RightIcon?: LucideIcon
  classNames?: {
    extraIcon?: string
    input?: string
  }
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> &
  VariantProps<typeof inputVariants>

function Input(
  { className, classNames, size, LeftIcon, RightIcon, ...props }: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  return (
    <div className={cn('relative', className)}>
      {LeftIcon && (
        <LeftIcon
          className={cn('absolute left-0 top-1/2 mx-2 -translate-y-1/2 text-primary-800', classNames?.extraIcon)}
          size={16}
        />
      )}
      <input className={cn(inputVariants({ size, className: classNames?.input }))} ref={ref} {...props} />
      {RightIcon && (
        <RightIcon
          className={cn('absolute right-0 top-1/2 mx-2 -translate-y-1/2 text-primary-800', classNames?.extraIcon)}
          size={16}
        />
      )}
    </div>
  )
}

export default React.forwardRef(Input)
