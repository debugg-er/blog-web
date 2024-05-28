'use client'

import { Axe } from 'lucide-react'
import { useTranslations } from 'next-intl'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'

import { loginUserPass } from '@/api/auth'
import Button from '@/components/ui/Button'
import Form, { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/Form'
import Input from '@/components/ui/Input'
import { Separator } from '@/components/ui/separator'
import { useRouter } from '@/navigation'

export function UserAuthForm() {
  const t = useTranslations('login')
  const login = useMutation({ mutationFn: loginUserPass })
  const router = useRouter()

  const loginPayloadSchema = z.object({
    email: z.string().min(1, t('validation.emptyEmail')).email(t('validation.invalidEmail')),
    password: z
      .string()
      .min(1, t('validation.emptyPassword'))
      .min(6, t('validation.invalidPassword'))
      .max(64, t('validation.invalidPassword'))
      .regex(/^[a-zA-Z0-9!@#\$%\^&\*()\\\-_\+\{\}|:;'"<,\./?]+$/, t('validation.invalidPassword')),
  })
  const form = useForm<z.infer<typeof loginPayloadSchema>>({ resolver: zodResolver(loginPayloadSchema) })

  async function handleLogin(values: z.infer<typeof loginPayloadSchema>) {
    try {
      await login.mutateAsync(values)
      router.refresh()
      router.push('/')
    } catch (err) {
      form.setError('password', {
        message: t('validation.loginFail'),
      })
    }
  }

  return (
    <div className={'flex flex-col gap-4'}>
      <Form {...form}>
        <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(handleLogin)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder={t('placeholder.email')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="password" placeholder={t('placeholder.password')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="w-full" loading={login.isPending}>
            {t('action.loginWithEmail')}
          </Button>
        </form>

        <Separator />
        <Button LeftIcon={Axe} variant="outline" type="button" loading={login.isPending}>
          {t('action.loginWithGoogle')}
        </Button>
      </Form>
    </div>
  )
}
