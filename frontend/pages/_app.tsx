import React from 'react'
import type { AppContext, AppProps } from 'next/app'
import Layout from '../components/layout/Layout'
import createI18n from '../locales/i18n'
import { I18nextProvider, useTranslation } from 'react-i18next'
import { ThemeProvider } from 'styled-components'
import '../assets/styles/global.css'
import Theme from '../assets/styles/theme'
import { NextSeo } from 'next-seo'
import Head from 'next/head'

const App = ({
    Component,
    pageProps,
    locale,
    router
}: AppProps & { locale: string }) => {
    const i18n = React.useMemo(() => createI18n({ locale }), [locale])
    const { t } = useTranslation()
    const { pathname } = router

    const pageName = pageProps?.title ?? ''
    const description = `${t(`label:pyconkrTitle`)}: ${t(`label:pyconkrDate`)}`

    const hideSponsor = pathname === '/sponsor'

    const getPageTitle = (): string => {
        if (i18n.exists(`pageTitle:${pageName}`)) {
            return `${t(`pageTitle:${pageName}`)} : ${t(`label:siteTitle`)}`
        } else if (pageProps?.title) {
            return `${pageProps?.title} : ${t(`label:siteTitle`)}`
        }
        return `${t(`label:siteTitle`)}`
    }
    const pageTitle = getPageTitle()

    return (
        <>
            <I18nextProvider i18n={i18n}>
                <ThemeProvider theme={Theme}>
                    <NextSeo
                        title={pageTitle}
                        description={description}
                        openGraph={{
                            type: 'website',
                            url: 'https://pycon.kr',
                            title: pageTitle,
                            site_name: pageTitle,
                            description: description,
                            images: [
                                {
                                    url: `https://2022.pycon.kr/images/og.jpg`
                                }
                            ]
                        }}
                    />
                    <Head>
                        <title>{pageTitle}</title>
                    </Head>
                    <Layout
                        locale={locale}
                        pageName={pageName}
                        hideSponsor={hideSponsor}
                    >
                        <Component pageName={pageName} {...pageProps} />
                    </Layout>
                </ThemeProvider>
            </I18nextProvider>
        </>
    )
}

App.getInitialProps = async ({ ctx }: AppContext) => {
    const { locale } = ctx
    return { locale }
}

export default App
