import { Skeleton } from '@/components/ui/skeleton'

export default function EditorLoading() {
  return (
    <div className="flex h-full flex-col">
      <Skeleton className="h-10 w-full rounded-none" />
      <Skeleton className="h-full w-full flex-1 rounded-none bg-stone-50" />
    </div>
  )
}
