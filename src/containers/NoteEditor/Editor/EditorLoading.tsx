
import { Skeleton } from '@/components/ui/skeleton'

export default function EditorLoading() {
  return (
    <div className="flex h-full flex-col">
      <Skeleton className="h-10 w-full rounded-none" />
      <Skeleton className='w-full h-full flex-1 bg-stone-50 rounded-none'/>
    </div>
  )
}
