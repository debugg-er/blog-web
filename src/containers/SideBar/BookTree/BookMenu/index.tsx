'use client'

import { ChevronsUpDown, FilePlus2, FolderPen, NotepadText, Trash } from 'lucide-react'

import DropdownMenu, {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu'
import { Book } from '@/types/book'

export type BookMenuProps = {
  children: React.ReactNode
  book: Book
  onExpandAll: () => void
}

export default function BookMenu({ children, book, onExpandAll }: BookMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">{children}</DropdownMenuTrigger>
      <DropdownMenuContent align="start" side="right">
        <DropdownMenuItem Icon={FilePlus2}>Create Note</DropdownMenuItem>
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
