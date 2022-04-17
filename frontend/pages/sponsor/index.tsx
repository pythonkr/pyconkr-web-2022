import React from 'react'
import type { NextPage, GetServerSideProps } from 'next'
import { useTranslation } from 'react-i18next'
import { PageName } from '../../data/enums/PageName'
import { PageProps } from '../../interfaces/PageProps'
import PageTitle from '../../components/core/PageTitle'

const Sponsor: NextPage = (props: PageProps) => {
    const { t } = useTranslation()

    return (
        <>
            <PageTitle title={props.pageName} />
            <div>{t('label:preparing')}</div>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    return {
        props: {
            title: PageName.Sponsor
        }
    }
}

export default Sponsor
