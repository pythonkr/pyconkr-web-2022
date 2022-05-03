import React from 'react'
import type {
    GetServerSideProps,
    GetServerSidePropsContext,
    NextPage
} from 'next'
import { useTranslation } from 'react-i18next'
import { PageName } from '../../data/enums/PageName'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import HeadingComponents from '../../components/core/MarkdownHeadings'

const MarkdownStyle = styled.div`
    h1 {
        margin: 1.2rem 0 0.9rem;
    }
    h1 ~ h1 {
        margin: 4rem 0 1.2rem;
    }
    h2 {
        margin: 1.2rem 0 1rem;
    }
    ul,
    li {
        margin: 0.3rem 0.6rem;
        padding: 0;
        list-style: circle;
    }
    hr {
        margin: 1rem 0;
    }
    a {
        text-decoration: underline;
    }
`

const CoC: NextPage = (props: any) => {
    const { t } = useTranslation()

    return (
        <div>
            <MarkdownStyle>
                <ReactMarkdown components={HeadingComponents}>
                    {props.content}
                </ReactMarkdown>
            </MarkdownStyle>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    const { locale } = context

    const dataKo = await import('../../data/docs/code-of-conduct.md')
    const dataEn = await import('../../data/docs/code-of-conduct-en.md')

    const data = locale === 'en' ? dataEn : dataKo
    const CodeOfConduct = matter(data.default)

    return {
        props: {
            title: PageName.CoC,
            content: CodeOfConduct.content
        }
    }
}

export default CoC
