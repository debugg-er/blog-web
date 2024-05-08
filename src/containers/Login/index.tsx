// import { getTranslations } from 'next-intl/server'
import { Box, Divider, Flex, Text, Title } from '@mantine/core'

import { AnchorText } from '@/components/elements'
import { Link } from '@/navigation'

import LoginForm from './LoginForm'
import SSOButtons from './SSOButtons'

async function Login() {
  // const t = await getTranslations('login')

  return (
    <Flex direction="column" className="m-16 gap-4">
      <Box>
        <Title order={2}>Login to your Account</Title>
        <Text size="sm" c="gray">
          See what going on with your business
        </Text>
      </Box>

      <SSOButtons />

      <Divider label="Or login with your E-mail" labelPosition="center" />
      <LoginForm />

      <Box className="mx-auto mt-16">
        Not registered yet?
        <Link href="/register">
          <AnchorText> Register account</AnchorText>
        </Link>
      </Box>
    </Flex>
  )
}

export default Login
