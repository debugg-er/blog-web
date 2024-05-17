import createMiddleware from 'next-intl/middleware'

import { defaultLocale, localePrefix, locales } from './configs/intl'

export default createMiddleware({
  defaultLocale,
  locales,
  localePrefix,
})

export const config = {
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    '/((?!api|_next|_vercel|.*\\..*).*)',
    '/',
    '/(vi|en)/:path*',
  ],
}
