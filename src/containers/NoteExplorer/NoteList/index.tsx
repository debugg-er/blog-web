import { getTranslations } from 'next-intl/server'

import { getNotesByBookId } from '@/api/note'
import { Note } from '@/types/note'

import EmptyNote from './EmptyNote'
import NoteItem from './NoteItem'

export default async function NoteList({ bookId }: any) {
  const [response, t] = await Promise.all([getNotesByBookId(bookId), getTranslations('noteList')])
  const notes: Note[] = response.data

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-2 overflow-auto p-2">
      {notes.length === 0 ? <EmptyNote /> : notes.map((note) => <NoteItem key={note.id} note={note} />)}
    </div>
  )
}
