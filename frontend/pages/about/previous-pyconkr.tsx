import React from 'react'
import { GetServerSideProps, NextPage } from 'next'
import { PageProps } from '../../interfaces/PageProps'
import { PageName } from '../../data/enums/PageName'
import PageTitle from '../../components/core/PageTitle'
import { PreviousPyconkr } from '../../data/enums/PreviousPyconkr'
import PreviousPyconkrList from '../../components/service/PreviousPyconkr/PreviousPyconkrList'

const PreviousPyconkrPage: NextPage = (props: PageProps) => {
    const keys = Object.keys(PreviousPyconkr).map((item: PreviousPyconkr) => ({
        year: item
    }))

    return (
        <>
            <PageTitle title={props.pageName} />
            <PreviousPyconkrList keys={keys} />
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    return {
        props: {
            title: PageName.PreviousPyconkr
        }
    }
}

export default PreviousPyconkrPage
