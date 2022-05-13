import React from 'react'
import type { NextPage, GetServerSideProps } from 'next'
import { PageName } from '../../data/enums/PageName'
import { SponsorPage } from '../../interfaces/PageProps'
import { GetServerSidePropsContext } from 'next'
import ReactMarkdown from 'react-markdown'
import HeadingComponents from '../../components/core/MarkdownHeadings'
import MarkdownStyle from '../../assets/styles/markdown'
import PageTitle from '../../components/core/PageTitle'
import { getSponsorJoin } from '../api/sponsor'

interface SponsorSponsorJoinPage extends SponsorPage {
    locale: string
}

const SponsorJoin: NextPage = (props: SponsorSponsorJoinPage) => {
    return (
        <div>
            <PageTitle title={props.pageName} />
            <MarkdownStyle>
                <ReactMarkdown components={HeadingComponents}>
                    {props.content[props.locale]}
                </ReactMarkdown>
            </MarkdownStyle>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    const { locale } = context
    const content = await getSponsorJoin()

    return {
        props: {
            title: PageName.SponsorJoin,
            locale,
            ...content
        }
    }
}

export default SponsorJoin
