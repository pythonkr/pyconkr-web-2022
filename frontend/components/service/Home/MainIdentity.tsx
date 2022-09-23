import React from 'react'
import { media } from '../../../assets/styles/mixin'
import { Paragraph } from '../../../assets/styles/typo'
import styled, { useTheme, keyframes } from 'styled-components'
import { useTranslation } from 'react-i18next'

const MainTheme = styled.div`
    height: calc(100vh - 100px);
`

const Window = styled.div`
    position: absolute;
    left: 20%;
    right: 20%;
    top: 50%;
    transform: translateY(-50%);
    border: 2px solid ${(props) => props.theme.colors.white};
    padding: 2rem 4rem;
    ${media.mobile(`
        left: 10%;
        right: 10%;
    `)}

    &:after {
        content: ' ';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        border-bottom: 2px solid ${(props) => props.theme.colors.white};
        height: 3rem;
    }
`

const WindowButton = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    width: 3rem;
    height: 3rem;
    border-left: 2px solid ${(props) => props.theme.colors.white};
    &:before,
    &:after {
        position: absolute;
        left: 50%;
        top: 0;
        content: ' ';
        height: 40px;
        width: 2px;
        background-color: ${(props) => props.theme.colors.white};
    }
    &:before {
        transform: rotate(45deg);
    }
    &:after {
        transform: rotate(-45deg);
    }
`

const typing = keyframes`
    0% {
        width: 0;
    }
    100% {
        width: 100%;
    }
`

const TitleContainer = styled.div`
    margin-top: 4rem;
    overflow: hidden;
`

const Title = styled.div`
    font-size: 5rem;
    line-height: 1.1;
    display: inline-block;
    color: ${(props) => props.color || props.theme.colors.white};
    white-space: nowrap;
    animation: ${typing} 5s linear;
    animation-fill-mode: both;
    &:nth-child(2) {
        animation-delay: 2s;
    }
    &:nth-child(3) {
        animation-delay: 4s;
    }
`

const MainText = styled.div`
    font-size: 1.7rem;
    font-weight: normal;
    margin-top: 2rem;
    margin-left: 12rem;
    ${media.mobile(`
        margin-top: 3rem;
        margin-left: 6rem;
    `)}
`

const MainIdentity = () => {
    const { t } = useTranslation()
    const theme = useTheme()

    return (
        <MainTheme>
            <Window>
                <WindowButton />
                <TitleContainer>
                    <div>
                        <Title color={theme.colors.violet0}>
                            {t(`label:pycon`)}
                        </Title>
                    </div>
                    <div>
                        <Title color={theme.colors.violet1}>
                            {t(`label:korea`)}
                        </Title>
                    </div>
                    <div>
                        <Title color={theme.colors.yellow0}>
                            {t(`label:thisYear`)}
                        </Title>
                    </div>
                </TitleContainer>
                <MainText>{t(`label:pyconkrDate`)}</MainText>
            </Window>
        </MainTheme>
    )
}

export default MainIdentity
