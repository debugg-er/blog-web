import { Search } from 'lucide-react'

import { getNotesByBookId } from '@/api/note'
import Input from '@/components/ui/Input'
import { Separator } from '@/components/ui/separator'
import { Note } from '@/types/note'

import NoteItem from './NoteItem'

export default async function NoteList({ bookId }: { bookId: string }) {
  const response = await getNotesByBookId(bookId)
  const notes: Note[] = response.data

  return (
    <div>
      <div className="m-2">
        <Input className="!ring-0" LeftIcon={Search} placeholder="Search anything..." />
      </div>
      <Separator />
      <div className="flex flex-col gap-2 p-2">
        {notes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>
    </div>
  )
}
