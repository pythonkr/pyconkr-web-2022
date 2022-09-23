import React from 'react'
import type { NextPage, GetServerSideProps } from 'next'
import { PageName } from '../../data/enums/PageName'
import { ContentPage } from '../../interfaces/PageProps'
import { GetServerSidePropsContext } from 'next'
import { getSponsorContentData } from '../api/sponsor'
import ReactMarkdown from 'react-markdown'
import HeadingComponents from '../../components/core/MarkdownHeadings'
import MarkdownStyle from '../../assets/styles/markdown'
import PageTitle from '../../components/core/PageTitle'
import remarkGfm from 'remark-gfm'

interface SponsorSponsorFaqPage extends ContentPage {
    locale: string
}

const SponsorFaq: NextPage = (props: SponsorSponsorFaqPage) => {
    return (
        <div>
            <PageTitle title={props.pageName} />
            <MarkdownStyle>
                <ReactMarkdown
                    components={HeadingComponents}
                    remarkPlugins={[remarkGfm]}
                >
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
    const content = await getSponsorContentData('sponsor-faq')

    return {
        props: {
            title: PageName.SponsorFaq,
            locale,
            ...content
        }
    }
}

export default SponsorFaq
