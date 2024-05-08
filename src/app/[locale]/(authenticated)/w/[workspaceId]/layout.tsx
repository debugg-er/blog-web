import { Box, Flex } from '@mantine/core'

type LayoutProps = {
  sidebar: React.ReactNode
  explorer: React.ReactNode
  main: React.ReactNode
  params: { locale: string; workspaceId: string }
}

export default async function AppLayout({ sidebar, explorer, main, params }: LayoutProps) {
  return (
    <Flex className="h-full w-full">
      <Box className="h-full w-[250px]">{sidebar}</Box>
      <Box className="h-full w-[400px]">{explorer}</Box>
      <Box className="h-full flex-1">{main}</Box>
    </Flex>
  )
}
