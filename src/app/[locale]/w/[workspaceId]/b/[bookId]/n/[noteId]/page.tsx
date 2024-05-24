import { getNote } from '@/api/note'
import NoteEditor from '@/containers/NoteEditor'
import { Note } from '@/types/note'

export default async function BookPage({ params: { noteId } }: { params: { noteId: string } }) {
  const response = await getNote(noteId)
  const note: Note = response.data
  return <NoteEditor note={note} />
}
