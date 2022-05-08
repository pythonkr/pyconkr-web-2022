import React from 'react'
import { GetServerSideProps, NextPage } from 'next'
import { PageProps } from '../../interfaces/PageProps'
import { useTranslation } from 'react-i18next'
import { PageName } from '../../data/enums/PageName'
import PageTitle from '../../components/core/PageTitle'
import { PreviousPyconkr } from '../../data/enums/PreviousPyconkr'
import { Heading3, Paragraph, ColorLink } from '../../assets/styles/typo'
import styled from 'styled-components'
import Resource from '../../data/constants/resources'
import Image from '../../components/core/Image'
import { media } from '../../assets/styles/mixin'

const Row = styled.div`
    display: flex;
    ${media.mobile(`
        flex-direction: column;
    `)}
`
const Col = styled.div`
    width: 50%;
    ${media.mobile(`
        width: 100%;
    `)}
    & + & {
        margin-left: 1.2rem;
        ${media.mobile(`
            margin-left: 0;
            margin-top: 1.2rem;
        `)}
    }
`
const Container = styled.div`
    padding-bottom: 2rem;
    & + & {
        padding-top: 5rem;
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
    const images = Resource.previousPyconkrImage

    return (
        <>
            <PageTitle title={props.pageName} />
            {keys.map((item, index) => {
                const imageKey = `${item}_IMG`
                const imageUrl = images[imageKey] ?? ''
                return (
                    <Container key={index}>
                        <Row>
                            <Col>
                                <Image
                                    src={imageUrl}
                                    alt={`image of ${item}`}
                                />
                            </Col>
                            <Col>
                                <Heading3>
                                    {t(`contentDescription:${item}.title`)}
                                </Heading3>
                                <ParagraphContainer>
                                    <Paragraph>
                                        {t(
                                            `contentDescription:${item}.paragraph`
                                        )}
                                    </Paragraph>
                                </ParagraphContainer>
                                <Link
                                    href={t(`contentDescription:${item}.url`)}
                                >
                                    {t(`contentDescription:${item}.url`)}
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                )
            })}
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
