import React from 'react'
import { GetServerSideProps, NextPage } from 'next'
import { PageProps } from '../../interfaces/PageProps'
import { useTranslation } from 'react-i18next'
import { PageName } from '../../data/enums/PageName'
import PageTitle from '../../components/core/PageTitle'
import { PreviousPyconkr } from '../../data/enums/PreviousPyconkr'
import { Heading3, Paragraph, ColorLink } from '../../assets/styles/typo'
import styled from 'styled-components'

const Container = styled.div`
    padding-bottom: 2rem;
    & + & {
        padding-top: 2rem;
    }
`
const ParagraphContainer = styled.div`
    margin-top: 1rem;
`
const Link = styled(ColorLink)`
    display: inline-block;
    margin-top: 0.5rem;
`

const PreviousPyconkrPage: NextPage = (props: PageProps) => {
    const { t } = useTranslation()
    const keys = Object.keys(PreviousPyconkr)

    return (
        <>
            <PageTitle title={props.pageName} />
            {keys.map((item, index) => (
                <Container key={index}>
                    <Heading3>{t(`contentDescription:${item}.title`)}</Heading3>
                    <ParagraphContainer>
                        <Paragraph>
                            {t(`contentDescription:${item}.paragraph`)}
                        </Paragraph>
                    </ParagraphContainer>
                    <Link href={t(`contentDescription:${item}.url`)}>
                        {t(`contentDescription:${item}.url`)}
                    </Link>
                </Container>
            ))}
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    return {
        props: {
            title: PageName.PreviousPyconkr
        }
    }
}

export default PreviousPyconkrPage
