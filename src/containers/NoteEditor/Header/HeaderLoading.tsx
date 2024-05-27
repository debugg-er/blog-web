import { Skeleton } from "@/components/ui/skeleton";

export default function HeaderLoading() {
  return <div className="flex flex-col gap-2">
    <Skeleton className="w-[300px] h-2"/>
    <Skeleton className="w-[200px] h-2"/>
  </div>
}
