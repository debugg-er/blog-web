import { Suspense } from 'react'

import { getNote } from '@/api/note'
import { Note } from '@/types/note'

import EditorLoading from './Editor/EditorLoading'
import Header from './Header'
import HeaderLoading from './Header/HeaderLoading'
import Temp from './Temp'

export default async function NoteEditor({ noteId }: { noteId: string }) {
  const notePromise = getNote(noteId).then((response) => response.data as Note)
  return (
    <div className="flex h-full flex-col">
      <Suspense fallback={<HeaderLoading />}>
        <Header className="p-2 pt-1" notePromise={notePromise} />
      </Suspense>
      <Suspense fallback={<EditorLoading />}>
        <Temp notePromise={notePromise} />
      </Suspense>
    </div>
  )
}
