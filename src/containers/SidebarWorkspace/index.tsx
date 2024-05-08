'use client'

import { FaLayerGroup, FaMoon, FaSun } from 'react-icons/fa'
import { Combobox, Flex, Text, useCombobox } from '@mantine/core'

import { useRouter } from '@/navigation'
import { Workspace } from '@/types/workspace'
import { getWorkspaceName } from '@/utils/workspace'

export type SidebarWorkspaceProps = {
  currentWorkspaceId: string
  workspaces: Workspace[]
}

export default function SidebarWorkspace({ currentWorkspaceId, workspaces }: SidebarWorkspaceProps) {
  const combobox = useCombobox()
  const router = useRouter()

  const handleChangeWorkspace = (workspaceId: string) => {
    router.push(`/w/${workspaceId}`)
  }

  const selectedWorkspace = workspaces.find((w) => w.id.toString() === currentWorkspaceId)
  const unselectedWorkspaces = workspaces.filter((w) => w.id.toString() !== currentWorkspaceId)
  return (
    <Flex className="py-2 px-3" gap={12} align="center">
      <FaLayerGroup size={14} />
      <div className="flex-1">
        <Combobox store={combobox} withinPortal={false} onOptionSubmit={handleChangeWorkspace}>
          <Combobox.Target>
            <Flex
              className="cursor-pointer hover:text-gray-500"
              align="center"
              gap={8}
              onClick={() => combobox.toggleDropdown()}
            >
              <Text className="flex-1" size="sm">
                {getWorkspaceName(selectedWorkspace!)}
              </Text>
              <Combobox.Chevron />
            </Flex>
          </Combobox.Target>

          <Combobox.Dropdown>
            <Combobox.Options>
              <Combobox.Group label="Current workspace">
                <Combobox.Option value={currentWorkspaceId}>{getWorkspaceName(selectedWorkspace!)}</Combobox.Option>
              </Combobox.Group>
              <Combobox.Group label="Switch workspace">
                {unselectedWorkspaces.map((w) => (
                  <Combobox.Option key={w.id} value={w.id.toString()}>
                    {getWorkspaceName(w)}
                  </Combobox.Option>
                ))}
              </Combobox.Group>
            </Combobox.Options>
          </Combobox.Dropdown>
        </Combobox>
      </div>

      <FaSun size={14}/>
    </Flex>
  )
}
