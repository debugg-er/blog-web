'use client'

import Joi from 'joi'
import { useRouter } from 'next/navigation'
import { FiLock, FiUser } from 'react-icons/fi'
import { Button, Checkbox, Flex, PasswordInput, TextInput, } from '@mantine/core'
import { joiResolver, useForm } from '@mantine/form'
import { QueryClient, useMutation } from '@tanstack/react-query'

import { loginUserPass } from '@/api'
import { AnchorText } from '@/components/elements'
import { Link } from '@/navigation'

import { LoginFormData } from '../types'

const LoginFormDataSchema = Joi.object<LoginFormData>({
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  password: Joi.string()
    .required()
    .min(6)
    .max(64)
    .regex(/^[a-zA-Z0-9!@#\$%\^&\*()\\\-_\+\{\}|:;'"<,\./?]+$/),
})

const client = new QueryClient()

function LoginForm() {
  const form = useForm<LoginFormData>({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      password: '',
    },
    validate: joiResolver(LoginFormDataSchema),
  })
  const router = useRouter()
  const login = useMutation({ mutationFn: loginUserPass }, client)

  const handleLogin = async (values: LoginFormData) => {
    try {
      await login.mutateAsync(values)
      router.push('/')
      // window.location.href = '/'
    } catch (err) {
      form.setErrors({
        password: 'Invalid email or password',
      })
    }
  }

  return <form className='flex flex-col gap-2' onSubmit={form.onSubmit(handleLogin)}>
    <TextInput
      leftSection={<FiUser size={18} />}
      placeholder="Your email address"
      label="Email:"
      {...form.getInputProps('email')}
    />
    <PasswordInput
      leftSection={<FiLock size={18} />}
      type="password"
      placeholder="Type your password"
      label="Password:"
      {...form.getInputProps('password')}
    />
    <Flex justify='space-between'>
      <Checkbox label="Remember me"></Checkbox>
      <Link href="/forgot-password">
        <AnchorText>Fogot your password?</AnchorText>
      </Link>
    </Flex>
    <Button loading={login.isPending} type="submit" className="mt-3 w-full">
      Login with your email
    </Button>
  </form>
}

export default LoginForm
