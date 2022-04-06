import React from 'react'
import type { NextPage, GetServerSideProps } from 'next'
import { useTranslation } from 'react-i18next'
import { PageName } from '../../data/enums/PageName'
import PageTitle from '../../components/core/PageTitle'
import { PageProps } from '../../interfaces/PageProps'

const Contribute: NextPage = (props: PageProps) => {
    const { t } = useTranslation()

    return (
        <div>
            <PageTitle title={props.pageName} />
            {t('label:preparing')}
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    return {
        props: {
            title: PageName.Contribute
        }
    }
}

export default Contribute
