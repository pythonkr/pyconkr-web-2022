import React from 'react'
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import { ContentPage } from '../../interfaces/PageProps'
import { PageName } from '../../data/enums/PageName'
import PageTitle from '../../components/core/PageTitle'
import { getSponsorContentData } from '../api/sponsor'
import MarkdownStyle from '../../assets/styles/markdown'
import ReactMarkdown from 'react-markdown'
import HeadingComponents from '../../components/core/MarkdownHeadings'
import remarkGfm from 'remark-gfm'

interface SponsorProspectusPage extends ContentPage {
    locale: string
}

const SponsorProspectus: NextPage = (props: SponsorProspectusPage) => {
    return (
        <>
            <PageTitle title={props.pageName} />
            <MarkdownStyle>
                <ReactMarkdown
                    components={HeadingComponents}
                    remarkPlugins={[remarkGfm]}
                >
                    {props.content[props.locale]}
                </ReactMarkdown>
            </MarkdownStyle>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    const { locale } = context
    const content = await getSponsorContentData('prospectus')

    return {
        props: {
            title: PageName.SponsorProspectus,
            locale,
            ...content
        }
    }
}

export default SponsorProspectus
