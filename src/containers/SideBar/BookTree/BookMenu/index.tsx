import { BookPlus, ChevronsUpDown, FilePlus2, FolderPen, Trash } from 'lucide-react'
import { useState } from 'react'

import DropdownMenu, {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu'
import CreateBookModal from '@/containers/CreateBookModal'
import { Book } from '@/types/book'

export type BookMenuProps = {
  children: React.ReactNode
  book: Book
  onExpandAll: () => void
}

export default function BookMenu({ children, book, onExpandAll }: BookMenuProps) {
  const [visibleCreateBook, setVisibleCreateBook] = useState(false)

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger onClick={(e) => e.stopPropagation()} className="outline-none">
          {children}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="z-10" onClick={(e) => e.stopPropagation()} align="start" side="right">
          <DropdownMenuItem Icon={FilePlus2}>Create Note</DropdownMenuItem>
          <DropdownMenuItem Icon={BookPlus} onSelect={() => setVisibleCreateBook(true)}>
            Create Children Book
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem Icon={FolderPen}>Rename</DropdownMenuItem>
          <DropdownMenuItem Icon={ChevronsUpDown} onClick={onExpandAll}>
            Expand All
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive" Icon={Trash}>
            Delete Notebook
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <CreateBookModal open={visibleCreateBook} onOpenChange={setVisibleCreateBook} parentBookId={book.id} />
    </>
  )
}
