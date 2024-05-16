import createMiddleware from "next-intl/middleware";

import { defaultLocale, locales } from "./configs/intl";

export default createMiddleware({
  defaultLocale,
  locales,
});

export const config = {
  matcher: ["/", "/(vi|en)/:path*"],
};
