import createMiddleware from 'next-intl/middleware';

import { defaultLocale, locales } from './configs/intl';

export default createMiddleware({
  defaultLocale,
  locales,
});

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(vi|en)/:path*',
  ]
};
