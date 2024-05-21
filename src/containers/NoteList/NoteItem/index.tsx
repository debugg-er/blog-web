import moment from 'moment-timezone'

import { Note } from '@/types/note'

export default function NoteItem({ note }: { note: Note }) {
  return (
    <article className="cursor-pointer rounded-lg border border-gray-200 p-3 transition-all hover:bg-gray-100">
      <div className="flex">
        <h5 className="mb-1 flex-1 truncate text-sm">{note.title}</h5>
        <span className="text-xs text-gray-500">{moment(note.updatedAt).fromNow()}</span>
      </div>
      <span className="line-clamp-2 text-xs leading-5 text-gray-600">{note.content}</span>
    </article>
  )
}
