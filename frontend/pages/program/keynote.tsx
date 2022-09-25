import React from 'react'
import type { NextPage, GetServerSideProps } from 'next'
import { PageName } from '../../data/enums/PageName'
import PageTitle from '../../components/core/PageTitle'
import { PageProps } from '../../interfaces/PageProps'
import { GetServerSidePropsContext } from 'next'
import { getKeynoteList } from '../api/program'
import { ITalkList } from '../../interfaces/IProgram'
import KeynoteListItem from '../../components/service/Program/KeynoteListItem'

interface TalkListProps extends PageProps {
    data: ITalkList
}

const Keynote: NextPage = (props: TalkListProps) => {
    const { pageName, data } = props

    return (
        <div>
            <PageTitle title={pageName} />
            {data.list.map((item) => (
                <KeynoteListItem key={item.id} item={item} />
            ))}
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    const { locale } = context
    try {
        const data = await getKeynoteList()

        return {
            props: {
                title: PageName.Keynote,
                locale,
                data
            }
        }
    } catch (error) {
        if (error.notFound) {
            return {
                notFound: true
            }
        }
    }
}

export default Keynote
