import { Skeleton } from "@/components/ui/skeleton";

export default function HeaderLoading() {
  return <div className="flex flex-col gap-2 p-3">
    <Skeleton className="w-[300px] h-4"/>
    <Skeleton className="w-[400px] h-2"/>
  </div>
}
