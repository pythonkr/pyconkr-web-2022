import React from 'react'
import type { NextPage, GetServerSideProps } from 'next'
import { useTranslation } from 'react-i18next'
import { PageName } from '../../data/enums/PageName'
import { Heading2, Paragraph } from '../../assets/styles/typo'
import styled from 'styled-components'

const Block = styled.div`
    & + & {
        margin-top: 3rem;
    }
`

const Content = styled(Paragraph)`
    margin-top: 1rem;
`

const About: NextPage = () => {
    const { t } = useTranslation()

    return (
        <div>
            <Block>
                <Heading2>{t('label:about.main.title')}</Heading2>
                <Content>{t('label:about.main.desc')}</Content>
            </Block>
            <Block>
                <Heading2>{t('label:about.diff.title')}</Heading2>
                <Content>{t('label:about.diff.desc')}</Content>
            </Block>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    return {
        props: {
            title: PageName.About
        }
    }
}

export default About
