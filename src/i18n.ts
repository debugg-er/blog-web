import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

import { formats, locales } from './configs/intl'

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound()

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
    formats: formats,
  }
})
