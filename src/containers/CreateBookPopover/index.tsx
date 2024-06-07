import { PopoverPortal } from '@radix-ui/react-popover'

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Book } from '@/types/book'

import CreateBookForm from './CreateBookForm'

export type CreateBookPopoverProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  onCreated?: (book: Book) => void
  children: React.ReactNode
  classNames?: {
    trigger?: string
  }
}

export function CreateBookPopover({ open, onCreated, onOpenChange, children, classNames }: CreateBookPopoverProps) {
  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverPortal />
      <PopoverTrigger className={classNames?.trigger}>{children}</PopoverTrigger>
      <PopoverContent className="flex gap-2" side="right">
        <CreateBookForm onCreated={onCreated} />
      </PopoverContent>
    </Popover>
  )
}
