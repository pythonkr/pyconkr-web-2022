import React from 'react'
import { useTranslation } from 'react-i18next'
import { Paragraph } from '../../../assets/styles/typo'
import styled from 'styled-components'

const Container = styled.div`
    text-align: center;
    color: ${props => props.theme.colors.white};
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`

const Title = styled.div`
    font-size: 3.5rem;
    font-weight: bold;
    word-break: normal;
`

const BodyText = styled(Paragraph)`
    font-size: 2rem;
    font-weight: bold;
    margin-top: 2rem;
    @media (max-width: 1080px) {
        font-size: 1.3rem;
    }
`

const Background = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
    overflow: hidden;
    opacity: 0.7;
    background: linear-gradient(118deg,rgb(12, 0, 96) 0%,
                rgb(98,89,156) 49%,
                rgb(255,247,53) 100%);
`

const MainBackground = () => {
    const { t } = useTranslation()

    return (
        <>
            <Container>
                <Title>{t(`label:pyconkrTitle`)}</Title>
                <BodyText>{t(`label:comingSoon`)}</BodyText>
            </Container>
            <Background />
        </>
    )
}

export default MainBackground
