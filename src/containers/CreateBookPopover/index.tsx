import { PopoverTrigger } from '@radix-ui/react-popover'

import { Popover, PopoverContent } from '@/components/ui/popover'

import CreateBookForm from './CreateBookForm'

export type CreateBookPopoverProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
  classNames?: {
    trigger?: string
  }
}

export function CreateBookPopover({ open, onOpenChange, children, classNames }: CreateBookPopoverProps) {
  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger className={classNames?.trigger}>{children}</PopoverTrigger>
      <PopoverContent className="flex gap-2" side="right">
        <CreateBookForm onOpenChange={onOpenChange} />
      </PopoverContent>
    </Popover>
  )
}
