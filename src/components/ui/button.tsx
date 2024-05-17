import { cva, type VariantProps } from 'class-variance-authority'
import { LoaderCircle,LucideIcon } from 'lucide-react'
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'

import { BaseProps, CvaParams } from '@/types/baseProps'
import { cn } from '@/utils/className'

const buttonVariants = cva<CvaParams<BaseProps>>(
  'inline-flex gap-1 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300',
  {
    variants: {
      variant: {
        default:
          'bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90',
        destructive:
          'bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90',
        outline:
          'border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50',
        secondary:
          'bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80',
        ghost: 'hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50',
        link: 'text-slate-900 underline-offset-4 hover:underline dark:text-slate-50',
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

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
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
    },
    ref,
  ) => {
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
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
