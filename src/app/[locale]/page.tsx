import { redirect } from '@/navigation'
import { Workspace, WorkspaceType } from '@/types/workspace'
import { rest } from '@/utils/rest'

export default async function AppPage() {
    const { data: workspaces } = await rest('/users/me/workspaces').then((r) => r.json())
    if (!workspaces) return <div className="px-4 py-3 bg-gray-100"></div>

    const personalWorkspace: Workspace = workspaces.find((w: Workspace) => w.type === WorkspaceType.Personal)
    redirect(`/w/${personalWorkspace.id}`)
    return null
}
