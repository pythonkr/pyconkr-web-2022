import React from 'react'
import { useTranslation } from 'react-i18next'
import {Heading1, Paragraph} from '../../../assets/styles/typo'
import styled from 'styled-components'
import bg from '../../../public/images/main-bg-2.jpg'

const Container = styled.div`
    text-align: center;
    color: ${props => props.theme.colors.white};
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`

const Title = styled(Heading1)`
    font-size: 3.5rem;
    @media (max-width: 1080px) {
        font-size: 2rem;
    }
`

const BodyText = styled(Paragraph)`
    font-size: 2rem;
    font-weight: bold;
    margin-top: 2rem;
    @media (max-width: 1080px) {
        font-size: 1.3rem;
    }
`

const GradientLeft = styled.div`
    width: 200%;
    height: 200%;
    position: absolute;
    left: -78%;
    top: -84%;
    background: rgb(98,89,156);
    background: radial-gradient(circle, rgba(98,89,156,1) 0%, rgba(19,18,26,1) 67%);
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
    background: linear-gradient(118deg,rgb(19,18,26) 0.00%,rgb(98,89,156) 49.07%,rgb(255,247,53) 100.00%);
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
