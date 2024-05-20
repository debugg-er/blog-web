import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'

import NoteItem from './NoteItem'

export default function NoteList({ bookId }: { bookId: string }) {
  const notes = [
    {
      id: 1,
      title: 'The `notFound()` function will be called as a result.',
      content: `Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.

Please come prepared with any questions or insights you may have. Looking forward to our meeting!

Best regards, William`,
    },
    {
      id: 1,
      title: 'The `notFound()` function will be called as a result.',
      content: `Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.

Please come prepared with any questions or insights you may have. Looking forward to our meeting!

Best regards, William`,
    },
    {
      id: 1,
      title: 'The `notFound()` function will be called as a result.',
      content: `Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.

Please come prepared with any questions or insights you may have. Looking forward to our meeting!

Best regards, William`,
    },
    {
      id: 1,
      title: 'The `notFound()` function will be called as a result.',
      content: `Hi, let'ssuccess.
Best regards, William`,
    },
    {
      id: 1,
      title: 'The `notFound()` function will be called as a result.',
      content: `Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.

Please come prepared with any questions or insights you may have. Looking forward to our meeting!

Best regards, William`,
    },
  ]
  return (
    <div>
      <div className="m-2">
        <Input placeholder="Search anything..." />
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
