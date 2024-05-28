const createNextIntlPlugin = require('next-intl/plugin')
const path = require('node:path')

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src')],
  },
}

module.exports = withNextIntl(nextConfig)
