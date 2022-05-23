import React from 'react'
import { NextPage } from 'next'
import { useTranslation } from 'react-i18next'

const ServerErrorPage: NextPage = () => {
    const { t } = useTranslation()

    return <div>{t('error:serverError')}</div>
}

export default ServerErrorPage
