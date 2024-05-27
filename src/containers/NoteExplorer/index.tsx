import { Search } from 'lucide-react'
import { Suspense } from 'react'

import Input from '@/components/ui/Input'
import { Separator } from '@/components/ui/separator'

import NoteList from './NoteList'
import NoteListLoading from './NoteList/NoteListLoading'

export default async function NoteExplorer({ bookId }: { bookId: string }) {
  return (
    <div className="flex h-full flex-col bg-stone-50">
      <div className="m-2">
        <Input className="!ring-0" LeftIcon={Search} placeholder="Search anything..." />
      </div>
      <Separator />
      <Suspense fallback={<NoteListLoading />}>
        <NoteList bookId={bookId} />
      </Suspense>
    </div>
  )
}
