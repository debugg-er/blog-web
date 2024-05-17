import { getTranslations } from 'next-intl/server'

import { buttonVariants } from '@/components/ui/button'
import { Link } from '@/navigation'
import { cn } from '@/utils'

import { UserAuthForm } from './AuthForm'

export default async function Login() {
  const t = await getTranslations('login')

  return (
    <div className="container relative hidden h-full flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
        href="/examples/authentication"
        className={cn(buttonVariants({ variant: 'ghost' }), 'absolute right-4 top-4 md:right-8 md:top-8')}
      >
        {t('action.register')}
      </Link>

      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r bg-zinc-900">
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;This library has saved me countless hours of work and helped me deliver stunning designs to my
              clients faster than ever before.&rdquo;
            </p>
            <footer className="text-sm">Sofia Davis</footer>
          </blockquote>
        </div>
      </div>

      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h2>{t('text.loginTitle')}</h2>
            <p className="text-sm text-gray-600">{t('text.loginDesc')}</p>
          </div>
          <UserAuthForm />
          <p className="px-8 text-center text-sm text-gray-500">
            {t.rich('text.termAndPolicy', {
              term: (term) => <span className="underline underline-offset-4">{term}</span>,
              policy: (policy) => <span className="underline underline-offset-4">{policy}</span>,
            })}
          </p>
        </div>
      </div>
    </div>
  )
}
