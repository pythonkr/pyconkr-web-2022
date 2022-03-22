import React from 'react'
import type { NextPage, GetServerSideProps } from 'next'
import { useTranslation } from 'react-i18next'
import { PageName } from '../../data/enums/PageName'

const About: NextPage = () => {
    const { t } = useTranslation()

    return (
        <div>{t('label:preparing')}</div>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    return {
        props: {
            title: PageName.About,
        },
    }
}

export default About
