import React from 'react'
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import { ContentPage } from '../../../interfaces/PageProps'
import { PageName } from '../../../data/enums/PageName'
import PageTitle from '../../../components/core/PageTitle'
import { getSponsorList } from '../../api/sponsor'
import { ISponsorList } from '../../../interfaces/ISponsor'
import SponsorList from '../../../components/service/Sponsor/SponsorList'

interface SponsorListPage extends ContentPage {
    locale: string
    data: ISponsorList
}

const SponsorListIndex: NextPage = (props: SponsorListPage) => {
    return (
        <>
            <PageTitle title={props.pageName} />
            <SponsorList list={props.data} />
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    const { locale } = context
    try {
        const data = await getSponsorList()

        return {
            props: {
                title: PageName.SponsorList,
                locale,
                data
            }
        }
    } catch (error) {
        return {
            notFound: true
        }
    }
}

export default SponsorListIndex
