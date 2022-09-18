import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import React from 'react'
import { LocalePage } from '../../../interfaces/PageProps'
import { ITalkItem } from '../../../interfaces/IProgram'
import { getTalkById } from '../../api/program'

interface TalkListDetailProps extends LocalePage<ITalkItem> {
    locale: string
}

const TalkListDetail: NextPage = (props: TalkListDetailProps) => {
    return <div>{props.ko.title}</div>
}

export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    const { locale, params } = context
    try {
        const data = await getTalkById(params?.id as string)

        // TODO: Apply locale
        return {
            props: {
                locale,
                ko: data,
                en: data
            }
        }
    } catch (error) {
        // TODO: Return custom error message
        return {
            notFound: true
        }
    }
}

export default TalkListDetail
