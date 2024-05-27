// 'use client'

import { cva } from 'class-variance-authority'
import { LoaderCircle, LucideIcon } from 'lucide-react'
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'

import { BaseProps, CvaParams } from '@/types/baseProps'
import { cn } from '@/utils'

export const buttonVariants = cva<CvaParams<BaseProps>>(
  'inline-flex gap-1 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-stone-950 dark:focus-visible:ring-stone-300',
  {
    variants: {
      variant: {
        default:
          'bg-stone-700 text-stone-50 hover:bg-stone-700/90 dark:bg-stone-50 dark:text-stone-700 dark:hover:bg-stone-50/90',
        destructive:
          'bg-red-500 text-stone-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-stone-50 dark:hover:bg-red-900/90',
        outline:
          'border border-stone-200 bg-white hover:bg-stone-100 hover:text-stone-900 dark:border-stone-800 dark:bg-stone-950 dark:hover:bg-stone-800 dark:hover:text-stone-50',
        secondary:
          'bg-stone-100 text-stone-900 hover:bg-stone-100/80 dark:bg-stone-800 dark:text-stone-50 dark:hover:bg-stone-800/80',
        ghost: 'hover:bg-stone-100 hover:text-stone-900 dark:hover:bg-stone-800 dark:hover:text-stone-50',
        link: 'text-stone-900 underline-offset-4 hover:underline dark:text-stone-50',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export type ButtonProps = {
  asChild?: boolean
  LeftIcon?: LucideIcon
  leftSection?: React.ReactNode
  RightIcon?: LucideIcon
  rightSection?: React.ReactNode
  loading?: boolean
} & BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>

function Button(
  {
    className,
    variant,
    size,
    asChild = false,
    children,
    LeftIcon,
    leftSection,
    RightIcon,
    rightSection,
    loading = false,
    disabled,
    ...props
  }: ButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement>,
) {
  const Comp = asChild ? Slot : 'button'
  const left = loading ? (
    <LoaderCircle className="animate-spin" size={16} />
  ) : (
    leftSection ?? (LeftIcon && <LeftIcon size={16} />)
  )
  const right = rightSection ?? (RightIcon && <RightIcon />)
  return (
    <Comp
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      disabled={loading || disabled}
      {...props}
    >
      {left}
      <span>{children}</span>
      {right}
    </Comp>
  )
}

export default React.forwardRef(Button)
