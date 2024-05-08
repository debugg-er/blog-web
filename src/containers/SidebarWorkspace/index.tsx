'use client'

import { useState } from 'react'
import { FaChevronCircleDown, FaChevronDown, FaLayerGroup } from 'react-icons/fa'
import { Combobox, Flex, Input, InputBase, Text, Title, useCombobox } from '@mantine/core'

import { useRouter } from '@/navigation'
import { Workspace, WorkspaceType } from '@/types/workspace'
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
  return (
    <Flex className="py-2 px-3" gap={8} align="center">
      <FaLayerGroup />

      <div className="flex-1">
        <Combobox store={combobox} withinPortal={false} onOptionSubmit={handleChangeWorkspace}>
          <Combobox.Target>
            <Flex
              className="cursor-pointer hover:text-gray-500 w-full justify-end"
              align="center"
              gap={8}
              onClick={() => combobox.toggleDropdown()}
            >
              <Text size="sm">{getWorkspaceName(selectedWorkspace!)}</Text>
              <Combobox.Chevron />
            </Flex>
          </Combobox.Target>

          <Combobox.Dropdown>
            <Combobox.Options>
              {workspaces.map((w) => (
                <Combobox.Option key={w.id} value={w.id.toString()}>
                  {getWorkspaceName(w)}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Combobox.Dropdown>
        </Combobox>
      </div>
    </Flex>
  )
}
