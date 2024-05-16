'use client'

import Joi from 'joi'
import { useRouter } from 'next/navigation'
import { FiLock, FiUser } from 'react-icons/fi'
import { useMutation } from '@tanstack/react-query'
import { joiResolver } from '@hookform/resolvers/joi'

import { loginUserPass } from '@/api'
import { AnchorText } from '@/components/elements'
import { Link } from '@/navigation'

import { LoginFormData } from '../types'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

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
    resolver: joiResolver(LoginFormDataSchema),
  })

  const router = useRouter()
  const login = useMutation({ mutationFn: loginUserPass })

  const handleLogin = async (values: LoginFormData) => {
    try {
      await login.mutateAsync(values)
      router.refresh()
      router.push('/')
    } catch (err) { }
  }

  return (
    <Form {...form}>
      <form className="flex flex-col gap-2" onSubmit={form.handleSubmit(handleLogin)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email:</FormLabel>
              <FormControl>
                <Input placeholder="Type your Email" {...field} />
              </FormControl>
              <FormDescription>This is your public display name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Type your password" {...field} />
              </FormControl>
              <FormDescription>This is your public display name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-between">
          <Link href="/forgot-password">
            <AnchorText>Fogot your password?</AnchorText>
          </Link>
        </div>
        <Button type="submit" className="mt-3 w-full">
          Login with your email
        </Button>
      </form>
    </Form>
  )
}

export default LoginForm
