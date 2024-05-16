import SidebarUser from '@/containers/SidebarUser'
import { rest } from '@/utils/rest'

export default async function Sidebar({ params }: any) {
  const { data: workspaces } = await rest('/users/me/workspaces').then((r) => r.json())

  return (
    <div className="flex flex-col h-full bg-gray-100">
      <div className="flex-1"></div>
      <SidebarUser />
    </div>
  )
}
