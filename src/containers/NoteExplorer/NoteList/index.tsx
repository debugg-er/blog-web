import { Plus } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

import { getNotesByBookId } from '@/api/note'
import Button from '@/components/ui/Button'
import { Note } from '@/types/note'

import NoteItem from './NoteItem'

export default async function NoteList({ bookId }: any) {
  const [response, t] = await Promise.all([getNotesByBookId(bookId), getTranslations('noteList')])
  const notes: Note[] = response.data

  await new Promise(res => setTimeout(res, 2000))

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-2 overflow-auto p-2">
      {notes.length === 0 ? (
        <div className="flex items-center">
          <div className="p-2 font-medium italic">{t('text.createListHint')}</div>
          <Button className="w-fit" LeftIcon={Plus}>
            {t('action.createNote')}
          </Button>
        </div>
      ) : (
        notes.map((note) => <NoteItem key={note.id} note={note} />)
      )}
    </div>
  )
}
