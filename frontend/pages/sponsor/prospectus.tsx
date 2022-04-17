import React from 'react'
import { GetServerSideProps, NextPage } from 'next'
import { PageProps } from '../../interfaces/PageProps'
import { useTranslation } from 'react-i18next'
import { PageName } from '../../data/enums/PageName'
import PageTitle from '../../components/core/PageTitle'

const SponsorProspectus: NextPage = (props: PageProps) => {
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
            title: PageName.SponsorProspectus
        }
    }
}

export default SponsorProspectus
