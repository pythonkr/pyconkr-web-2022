import React from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/Layout'
import createI18n from '../locales/i18n'
import { I18nextProvider } from 'react-i18next'

const App = ({ Component, pageProps }: AppProps) => {
    const { locale } = pageProps
    const i18n = React.useMemo(() => createI18n({ locale }), [locale])

    return (
      <I18nextProvider i18n={i18n}>
          <Layout>
              <Component {...pageProps} />
          </Layout>
      </I18nextProvider>
    )
}

export default App
