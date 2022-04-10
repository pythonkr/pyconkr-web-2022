/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true
    },
    i18n: {
        locales: ['ko', 'en'],
        defaultLocale: 'ko'
    },
    experimental: {
        outputStandalone: true,
    }
}

module.exports = nextConfig
