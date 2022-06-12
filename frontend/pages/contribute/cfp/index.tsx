import React from 'react'
import type { NextPage, GetServerSideProps } from 'next'
import { PageName } from '../../../data/enums/PageName'
import { SponsorPage } from '../../../interfaces/PageProps'
import { GetServerSidePropsContext } from 'next'
import { getCfp } from '../../api/contribute'
import ReactMarkdown from 'react-markdown'
import HeadingComponents from '../../../components/core/MarkdownHeadings'
import MarkdownStyle from '../../../assets/styles/markdown'
import PageTitle from '../../../components/core/PageTitle'
import remarkGfm from 'remark-gfm'
import styled from 'styled-components'

interface SponsorSponsorFaqPage extends SponsorPage {
    locale: string
}

const CfpIndexStyle = styled.div`
    ol {
        margin-top: 1.4rem;
    }
    blockquote + p {
        a {
            display: inline-block;
            padding: 0.9rem 1.4rem;
            background-color: ${(props) => props.theme.colors.violet0};
            border-radius: 8px;
            text-decoration: none;
            font-weight: bold;
            color: ${(props) => props.theme.colors.white};
        }
    }
`

const CfpIndex: NextPage = (props: SponsorSponsorFaqPage) => {
    return (
        <div>
            <PageTitle title={props.pageName} />
            <MarkdownStyle>
                <CfpIndexStyle>
                    <ReactMarkdown
                        components={HeadingComponents}
                        remarkPlugins={[remarkGfm]}
                    >
                        {props.content[props.locale]}
                    </ReactMarkdown>
                </CfpIndexStyle>
            </MarkdownStyle>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    const { locale } = context
    const content = await getCfp()

    return {
        props: {
            title: PageName.Cfp,
            locale,
            ...content
        }
    }
}

export default CfpIndex
