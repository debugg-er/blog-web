'use client'

import Joi from 'joi'
import { FiLock, FiUser } from 'react-icons/fi'
import { Button, Checkbox, Flex, PasswordInput, TextInput } from '@mantine/core'
import { joiResolver, useForm } from '@mantine/form'

import { AnchorText } from '@/components/elements'
import { Link } from '@/navigation'

import { LoginFormData } from '../types'

const LoginFormDataSchema = Joi.object<LoginFormData>({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string()
    .required()
    .min(6)
    .max(64)
    .regex(/^[a-zA-Z0-9!@#\$%\^&\*()\\\-_\+\{\}|:;'"<,\./?]+$/),
})

function LoginForm() {
  const form = useForm<LoginFormData>({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      password: '',
    },
    validate: joiResolver(LoginFormDataSchema),
  })

  return (
    <form className="flex flex-col gap-2">
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
      <Flex justify="space-between">
        <Checkbox label="Remember me"></Checkbox>
        <Link href="/forgot-password">
          <AnchorText>Fogot your password?</AnchorText>
        </Link>
      </Flex>
      <Button type="submit" className="mt-3 w-full">
        Login with your email
      </Button>
    </form>
  )
}

export default LoginForm
