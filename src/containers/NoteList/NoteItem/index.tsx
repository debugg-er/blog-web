export default function NoteItem({ note }: any) {
  return (
    <article className="cursor-pointer rounded-lg border border-gray-200 p-3 transition-all hover:bg-gray-100">
      <h5 className="mb-1 truncate text-sm">{note.title}</h5>
      <span className="line-clamp-2 text-xs leading-5 text-gray-600">{note.content}</span>
    </article>
  )
}
