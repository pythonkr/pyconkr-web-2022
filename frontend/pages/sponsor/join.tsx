import React from 'react'
import type { NextPage, GetServerSideProps } from 'next'
import { PageName } from '../../data/enums/PageName'
import { SponsorPage } from '../../interfaces/PageProps'
import { GetServerSidePropsContext } from 'next'
import ReactMarkdown from 'react-markdown'
import HeadingComponents from '../../components/core/MarkdownHeadings'
import MarkdownStyle from '../../assets/styles/markdown'
import PageTitle from '../../components/core/PageTitle'
import { getSponsorData } from '../api/sponsor'
import remarkGfm from 'remark-gfm'
import styled from 'styled-components'

const SponsorJoinPageStyle = styled.div`
    h2 + p {
        margin-bottom: 1rem;
    }
`

interface SponsorSponsorJoinPage extends SponsorPage {
    locale: string
}

const SponsorJoin: NextPage = (props: SponsorSponsorJoinPage) => {
    return (
        <div>
            <PageTitle title={props.pageName} />
            <MarkdownStyle>
                <SponsorJoinPageStyle>
                    <ReactMarkdown
                        components={HeadingComponents}
                        remarkPlugins={[remarkGfm]}
                    >
                        {props.content[props.locale]}
                    </ReactMarkdown>
                </SponsorJoinPageStyle>
            </MarkdownStyle>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    const { locale } = context
    const content = await getSponsorData('sponsor-join')

    return {
        props: {
            title: PageName.SponsorJoin,
            locale,
            ...content
        }
    }
}

export default SponsorJoin
