import { Box, Flex } from '@mantine/core'

import SidebarUser from '@/containers/SidebarUser'
import SidebarWorkspace from '@/containers/SidebarWorkspace'
import { rest } from '@/utils/rest'

export default async function Sidebar({ params }: any) {
  const { data: workspaces } = await rest('/users/me/workspaces').then((r) => r.json())

  return (
    <Flex direction="column" h="100%" bg="gray.1">
      <SidebarWorkspace workspaces={workspaces} currentWorkspaceId={params.workspaceId} />
      <Box className="flex-1"></Box>
      <SidebarUser />
    </Flex>
  )
}
