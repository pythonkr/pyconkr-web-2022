import React from 'react'
import type { NextPage, GetServerSideProps } from 'next'
import { PageName } from '../../../data/enums/PageName'
import { SponsorPage } from '../../../interfaces/PageProps'
import { GetServerSidePropsContext } from 'next'
import { getCfpGuide } from '../../api/contribute'
import ReactMarkdown from 'react-markdown'
import HeadingComponents from '../../../components/core/MarkdownHeadings'
import MarkdownStyle from '../../../assets/styles/markdown'
import PageTitle from '../../../components/core/PageTitle'
import remarkGfm from 'remark-gfm'
import styled from 'styled-components'

interface SponsorSponsorFaqPage extends SponsorPage {
    locale: string
}

const CfpGuideStyle = styled.div`
    ol {
        margin-top: 1.4rem;
    }
    a {
        display: block;
    }
`

const SponsorFaq: NextPage = (props: SponsorSponsorFaqPage) => {
    return (
        <div>
            <PageTitle title={props.pageName} />
            <MarkdownStyle>
                <CfpGuideStyle>
                    <ReactMarkdown
                        components={HeadingComponents}
                        remarkPlugins={[remarkGfm]}
                    >
                        {props.content[props.locale]}
                    </ReactMarkdown>
                </CfpGuideStyle>
            </MarkdownStyle>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    const { locale } = context
    const content = await getCfpGuide()

    return {
        props: {
            title: PageName.CfpGuide,
            locale,
            ...content
        }
    }
}

export default SponsorFaq
