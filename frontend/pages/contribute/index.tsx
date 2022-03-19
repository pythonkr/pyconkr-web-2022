import React from 'react'
import type { NextPage } from 'next'
import { useTranslation } from 'react-i18next'

const Home: NextPage = () => {
    const { t } = useTranslation()

    return (
        <div>{t('label:preparing')}</div>
    )
}

export default Home
