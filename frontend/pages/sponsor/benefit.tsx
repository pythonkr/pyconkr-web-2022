import React from 'react'
import type { NextPage, GetServerSideProps } from 'next'
import { PageName } from '../../data/enums/PageName'
import { ContentPage } from '../../interfaces/PageProps'
import { GetServerSidePropsContext } from 'next'
import { getSponsorContentData } from '../api/sponsor'
import ReactMarkdown from 'react-markdown'
import HeadingComponents from '../../components/core/MarkdownHeadings'
import MarkdownStyle from '../../assets/styles/markdown'
import remarkGfm from 'remark-gfm'

interface SponsorBenefitPage extends ContentPage {
    locale: string
}

const SponsorBenefit: NextPage = (props: SponsorBenefitPage) => {
    return (
        <div>
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
    const content = await getSponsorContentData('sporsor-benefit')

    return {
        props: {
            title: PageName.SponsorBenefit,
            locale,
            ...content
        }
    }
}

export default SponsorBenefit
