import React from 'react'
import { media } from '../../../assets/styles/mixin'
import styled, { useTheme, keyframes } from 'styled-components'
import { useTranslation } from 'react-i18next'

const MainTheme = styled.div`
    height: calc(100vh - 100px);
    ${media.mobile(`
        height: calc(100vh - 120px);
    `)}
`

const Window = styled.div`
    position: absolute;
    left: 25%;
    right: 25%;
    top: 50%;
    transform: translateY(-50%);
    border: 2px solid ${(props) => props.theme.colors.grey_f9};
    padding: 2rem 4rem;
    ${media.mobile(`
        left: 10%;
        right: 10%;
        padding: 1rem 2rem;
    `)}

    &:before {
        content: ' ';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        border-bottom: 2px solid ${(props) => props.theme.colors.grey_f9};
        height: 3rem;
    }
`

const WindowButton = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    width: 3rem;
    height: 3rem;
    border-left: 2px solid ${(props) => props.theme.colors.grey_f9};
    &:before,
    &:after {
        position: absolute;
        left: 50%;
        top: 0;
        content: ' ';
        height: 40px;
        width: 2px;
        background-color: ${(props) => props.theme.colors.grey_f9};
    }
    &:before {
        transform: rotate(45deg);
    }
    &:after {
        transform: rotate(-45deg);
    }
`

const TitleContainer = styled.div`
    margin: 4rem 0 5rem;
    overflow: hidden;
`

const cursorBlink = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`

const Title = styled.div`
    font-size: 5rem;
    line-height: 1.1;
    display: inline-block;
    color: ${(props) => props.color || props.theme.colors.grey_f9};
    white-space: nowrap;
    ${media.mobile(`
        font-size: 3rem;
    `)}
`

const LastTitle = styled(Title)`
    &:after {
        content: '';
        display: inline-block;
        width: 3px;
        height: 3.5rem;
        background: lime;
        margin-left: 7px;
        animation: ${cursorBlink} 1s steps(2) infinite;
        ${media.mobile(`
            height: 2rem;
        `)}
    }
`

const MainText = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    padding: 3rem 4rem 2rem;
    font-size: 1.1rem;
    ${media.mobile(`
        font-size: 0.9rem;
        padding: 3rem 2rem 1.5rem;
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
                        <LastTitle color={theme.colors.yellow0}>
                            {t(`label:thisYear`)}
                        </LastTitle>
                    </div>
                </TitleContainer>
                <MainText>
                    <div>{t(`label:pyconkrDate`)}</div>
                    <div>{t(`label:locationInfo`)}</div>
                </MainText>
            </Window>
        </MainTheme>
    )
}

export default MainIdentity
