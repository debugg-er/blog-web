// 'use client'

import { cva, VariantProps } from 'class-variance-authority'
import { LoaderCircle, LucideIcon } from 'lucide-react'
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '@/utils/className'

export const buttonVariants = cva(
  'inline-flex gap-1 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-primary-950 dark:focus-visible:ring-primary-300',
  {
    variants: {
      variant: {
        primary:
          'bg-primary-700 text-primary-50 hover:bg-primary-700/90 dark:bg-primary-50 dark:text-primary-700 dark:hover:bg-primary-50/90',
        destructive:
          'bg-red-500 text-primary-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-primary-50 dark:hover:bg-red-900/90',
        outline:
          'border border-primary-200 bg-white hover:bg-primary-100 hover:text-primary-900 dark:border-primary-800 dark:bg-primary-950 dark:hover:bg-primary-800 dark:hover:text-primary-50',
        secondary:
          'bg-primary-100 text-primary-900 hover:bg-primary-100/80 dark:bg-primary-800 dark:text-primary-50 dark:hover:bg-primary-800/80',
        ghost: 'hover:bg-primary-100 hover:text-primary-900 dark:hover:bg-primary-800 dark:hover:text-primary-50',
      },
      size: {
        md: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
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
} & VariantProps<typeof buttonVariants> &
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
