import React from 'react'
import type { GetServerSideProps, NextPage } from 'next'
import { useTranslation } from 'react-i18next'
import { PageName } from '../../data/enums/PageName'
import { PageProps } from '../../interfaces/PageProps'
import PageTitle from '../../components/core/PageTitle'

const CoC: NextPage = (props: PageProps) => {
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
            title: PageName.CoC
        }
    }
}

export default CoC
