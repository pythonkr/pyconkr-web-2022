import React from 'react'
import type { NextPage, GetServerSideProps } from 'next'
import { PageName } from '../../../data/enums/PageName'
import PageTitle from '../../../components/core/PageTitle'
import { PageProps } from '../../../interfaces/PageProps'
import TalkList from '../../../components/service/Program/TalkList'
import { GetServerSidePropsContext } from 'next'
import { getTalkList } from '../../api/program'
import { ITalkList } from '../../../interfaces/IProgram'

interface TalkListProps extends PageProps {
    data: ITalkList
}

const TalkListPage: NextPage = (props: TalkListProps) => {
    const { pageName, data } = props
    return (
        <div>
            <PageTitle title={pageName} />
            <TalkList list={data.list} />
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    const { locale } = context
    try {
        const data = await getTalkList()

        return {
            props: {
                title: PageName.Talks,
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

export default TalkListPage
