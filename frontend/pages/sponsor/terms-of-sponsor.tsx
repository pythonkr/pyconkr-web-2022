import React from 'react'
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import { SponsorPage } from '../../interfaces/PageProps'
import { useTranslation } from 'react-i18next'
import { PageName } from '../../data/enums/PageName'
import { getSponsorTerms } from '../api/sponsor'
import MarkdownStyle from '../../assets/styles/markdown'
import ReactMarkdown from 'react-markdown'
import HeadingComponents from '../../components/core/MarkdownHeadings'

interface TermsOfSponsorPage extends SponsorPage {
    locale: string
}

const SponsorTerms: NextPage = (props: TermsOfSponsorPage) => {
    const { t } = useTranslation()

    return (
        <MarkdownStyle>
            <ReactMarkdown components={HeadingComponents}>
                {props.content[props.locale]}
            </ReactMarkdown>
        </MarkdownStyle>
    )
}

export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    const content = await getSponsorTerms()
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
