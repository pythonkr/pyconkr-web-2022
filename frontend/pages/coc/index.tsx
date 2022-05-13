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
import HeadingComponents from '../../components/core/MarkdownHeadings'
import MarkdownStyle from '../../assets/styles/markdown'
import remarkGfm from 'remark-gfm'

const CoC: NextPage = (props: any) => {
    const { t } = useTranslation()

    return (
        <div>
            <MarkdownStyle>
                <ReactMarkdown
                    components={HeadingComponents}
                    remarkPlugins={[remarkGfm]}
                >
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
