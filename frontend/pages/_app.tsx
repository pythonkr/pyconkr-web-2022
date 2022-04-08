import React from 'react'
import '../styles/globals.css'
import type { AppContext, AppProps } from 'next/app'
import Layout from '../components/layout/Layout'
import createI18n from '../locales/i18n'
import { I18nextProvider, useTranslation } from 'react-i18next'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../assets/styles/global'
import Theme from '../assets/styles/theme'
import Head from 'next/head'

const App = ({
    Component,
    pageProps,
    locale
}: AppProps & { locale: string }) => {
    const i18n = React.useMemo(() => createI18n({ locale }), [locale])
    const { t } = useTranslation()

    const pageName = pageProps?.title ?? ''

    return (
        <>
            <Head>
                <title>{t(`label:siteTitle`)}</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <I18nextProvider i18n={i18n}>
                <GlobalStyle />
                <ThemeProvider theme={Theme}>
                    <Layout locale={locale}>
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
