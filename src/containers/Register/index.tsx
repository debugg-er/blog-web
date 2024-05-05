import { Box, Divider, Flex, Text, Title } from '@mantine/core'

import LoginForm from './LoginForm'

export default function Register() {
  return (
    <Flex direction='column' className='m-16 gap-4'>
      <Box>
        <Title order={2}>
          Login to your Account
        </Title>
        <Text size='sm' c='gray'>See what going on with your business</Text>
      </Box>
      <Divider label="Or login with your E-mail" labelPosition='center' />
      <LoginForm />
    </Flex>
  )
}
