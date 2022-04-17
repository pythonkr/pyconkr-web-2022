import React from 'react'
import { GetServerSideProps, NextPage } from 'next'
import { PageProps } from '../../interfaces/PageProps'
import { useTranslation } from 'react-i18next'
import { PageName } from '../../data/enums/PageName'
import PageTitle from '../../components/core/PageTitle'

const PreviousPyconKr: NextPage = (props: PageProps) => {
    const { t } = useTranslation()

    return <PageTitle title={props.pageName} />
}

export const getServerSideProps: GetServerSideProps = async () => {
    return {
        props: {
            title: PageName.PreviousPyconKr
        }
    }
}

export default PreviousPyconKr