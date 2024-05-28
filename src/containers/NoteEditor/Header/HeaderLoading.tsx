import { Skeleton } from '@/components/ui/skeleton'

export default function HeaderLoading() {
  return (
    <div className="flex flex-col gap-2 p-3">
      <Skeleton className="h-4 w-[300px]" />
      <Skeleton className="h-2 w-[400px]" />
    </div>
  )
}
