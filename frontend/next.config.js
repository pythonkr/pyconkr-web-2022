/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true
    },
    i18n: {
        locales: ['ko', 'en'],
        defaultLocale: 'ko',
        localeDetection: false
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader'
        })
        return config
    }
    // experimental: {
    //     outputStandalone: true,
    // }
}

module.exports = nextConfig
