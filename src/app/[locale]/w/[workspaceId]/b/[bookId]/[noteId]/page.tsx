import NoteEditor from '@/containers/NoteEditor'

export default function NoteEditorPage({ params: { noteId } }: { params: { noteId: string } }) {
  return <NoteEditor noteId={noteId}/>
}
