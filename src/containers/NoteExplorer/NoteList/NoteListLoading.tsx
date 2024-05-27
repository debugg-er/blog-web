import { Skeleton } from '@/components/ui/skeleton'

export default function NoteListLoading() {
  return (
    <div className="flex flex-col gap-3 p-2">
      {new Array(6).fill(null).map((_, i) => (
        <div key={i} className="flex flex-col gap-3 rounded-2 bg-white px-2 py-4">
          <Skeleton className="h-2 w-1/3" />
          <Skeleton className="h-2 w-2/3" />
          <Skeleton className="h-2 w-3/4" />
        </div>
      ))}
    </div>
  )
}
