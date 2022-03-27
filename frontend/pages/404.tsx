import React from 'react'
import { NextPage } from 'next'
import { useTranslation } from 'react-i18next'

const ErrorPage: NextPage = () => {
    const { t } = useTranslation()

    return <div>{t('error:notFound')}</div>
}

export default ErrorPage
