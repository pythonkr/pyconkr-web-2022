import React from 'react'
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import { SponsorPage } from '../../interfaces/PageProps'
import { useTranslation } from 'react-i18next'
import { PageName } from '../../data/enums/PageName'
import { getSponsorData } from '../api/sponsor'
import MarkdownStyle from '../../assets/styles/markdown'
import ReactMarkdown from 'react-markdown'
import HeadingComponents from '../../components/core/MarkdownHeadings'
import PageTitle from '../../components/core/PageTitle'
import remarkGfm from 'remark-gfm'

interface TermsOfSponsorPage extends SponsorPage {
    locale: string
}

const SponsorTerms: NextPage = (props: TermsOfSponsorPage) => {
    const { t } = useTranslation()

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
    const content = await getSponsorData('terms-of-sponsor')
    const { locale } = context

    return {
        props: {
            title: PageName.SponsorTerms,
            locale,
            ...content
        }
    }
}

export default SponsorTerms
