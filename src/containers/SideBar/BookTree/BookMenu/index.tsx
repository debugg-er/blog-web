import { BookPlus, ChevronsUpDown, FilePlus2, FolderPen, Trash } from 'lucide-react'
import { useState } from 'react'

import DropdownMenu, {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu'
import { CreateBookPopover } from '@/containers/CreateBookPopover'
import { Book } from '@/types/book'

export type BookMenuProps = {
  children: React.ReactNode
  book: Book
  onExpandAll: () => void
  open: boolean
  onClose: () => void
}

export default function BookMenu({ children, open, onClose, book, onExpandAll }: BookMenuProps) {
  const [openCreateBook, setOpenCreateBook] = useState(false)

  const handleCreateBookPopoverChange = (open: boolean) => {
    console.log(' 🚀 [1]: index.tsx:24: open=', open)
    setOpenCreateBook(open)
    if (!open) onClose?.()
  }

  return (
    <DropdownMenu open={open}>
      <DropdownMenuTrigger onClick={(e) => e.stopPropagation()} className="outline-none">
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent onClick={(e) => e.stopPropagation()} align="start" side="right">
        <DropdownMenuItem Icon={FilePlus2}>Create Note</DropdownMenuItem>
        <DropdownMenuItem Icon={BookPlus}>
          <CreateBookPopover open={openCreateBook} onOpenChange={handleCreateBookPopoverChange}>
            Create Children Book
          </CreateBookPopover>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem Icon={FolderPen}>Rename</DropdownMenuItem>
        <DropdownMenuItem Icon={ChevronsUpDown} onClick={onExpandAll}>
          Expand All
        </DropdownMenuItem>
        <DropdownMenuItem Icon={Trash}>Delete Notebook</DropdownMenuItem>
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
