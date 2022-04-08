import React from 'react'
import { useTranslation } from 'react-i18next'
import { Paragraph } from '../../../assets/styles/typo'
import styled, { keyframes } from 'styled-components'
import { media } from '../../../assets/styles/mixin'
import theme from '../../../assets/styles/theme'

const Container = styled.div`
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    color: ${(props) => props.theme.colors.white};
`

const Title = styled.div`
    font-size: 5rem;
    font-weight: bold;
    word-break: normal;
    ${media.mobile(`
        font-size: 2rem;
    `)}
`

const BodyText = styled(Paragraph)`
    font-size: 2rem;
    font-weight: bold;
    margin-top: 2rem;
    ${media.mobile(`
        font-size: 1rem;
    `)}
`
const Gradients = keyframes`
    0%  {background-position: 0 0;}
    50% {background-position: 100% 0;}
    100%  {background-position: 0 0;}
`

const Background = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
    overflow: hidden;
    background-size: 200%;
    background-position: 0 0;
    background-image: ${theme.gradient};
    animation: ${Gradients} 10s infinite;
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
