import React from 'react'
import type { NextPage, GetServerSideProps } from 'next'
import { PageName } from '../../../data/enums/PageName'
import PageTitle from '../../../components/core/PageTitle'
import { PageProps } from '../../../interfaces/PageProps'
import { GetServerSidePropsContext } from 'next'
import { getTalkList } from '../../api/program'
import { ITalkList } from '../../../interfaces/IProgram'
import CategoryList from '../../../components/service/Program/CategoryList'

interface TalkListProps extends PageProps {
    data: ITalkList
}

const TalkListPage: NextPage = (props: TalkListProps) => {
    const { pageName, data } = props
    return (
        <div>
            <PageTitle title={pageName} />
            <CategoryList list={data} />
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
        // TODO: Add error interface
        if (error.notFound) {
            return {
                notFound: true
            }
        }
    }
}

export default TalkListPage
