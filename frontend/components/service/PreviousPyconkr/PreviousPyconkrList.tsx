import React from 'react'
import { ColorLink, Heading3, Paragraph } from '../../../assets/styles/typo'
import { media } from '../../../assets/styles/mixin'
import styled from 'styled-components'
import { IPreviousPyconkr } from '../../../interfaces/IPreviousPyconkr'
import { useTranslation } from 'react-i18next'
import Resource from '../../../data/constants/resources'

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
        margin-left: 3rem;
        ${media.mobile(`
            margin-left: 0;
            margin-top: 1.2rem;
        `)}
    }
`
const Image = styled.img`
    display: inline-flex;
    max-width: 400px;
    height: auto;
    ${media.mobile(`
        width: 100%;
    `)}
`
const Container = styled.div`
    padding-bottom: 2rem;
    & + & {
        padding-top: 5rem;
        ${media.mobile(`
            padding-top: 3rem;
        `)}
    }
`
const Title = styled(Heading3)`
    margin: 0;
`
const ParagraphContainer = styled.div`
    margin-top: 1rem;
`
const Link = styled(ColorLink)`
    display: inline-block;
    margin-top: 0.5rem;
`

interface PreviousPyconkrList {
    keys: IPreviousPyconkr[]
}

const PreviousPyconkrList: React.FC<PreviousPyconkrList> = ({ keys }) => {
    const { t } = useTranslation()
    const images = Resource.previousPyconkrImage

    return (
        <>
            {keys.map((item, index) => {
                const { year } = item
                const imageKey = `${year}_IMG`
                const image = images[imageKey] ?? ''
                return (
                    <Container key={index}>
                        <Row>
                            <Col>
                                <Image src={image} alt={`Image of ${year}`} />
                            </Col>
                            <Col>
                                <Title useGradient={true}>
                                    {t(`contentDescription:${year}.title`)}
                                </Title>
                                <ParagraphContainer>
                                    <Paragraph>
                                        {t(
                                            `contentDescription:${year}.paragraph`
                                        )}
                                    </Paragraph>
                                </ParagraphContainer>
                                <Link
                                    href={t(`contentDescription:${year}.url`)}
                                >
                                    {t(`contentDescription:${year}.url`)}
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                )
            })}
        </>
    )
}

export default PreviousPyconkrList
