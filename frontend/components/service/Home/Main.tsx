import React from 'react'
import { useTranslation } from 'react-i18next'
import { Paragraph } from '../../../assets/styles/typo'
import styled, { useTheme } from 'styled-components'
import { media } from '../../../assets/styles/mixin'
import MainSlogan from './MainSlogan'
import MainTalkList from './MainTalkList'
import MainContact from './MainContact'

const Container = styled.div`
    & + & {
        margin: 7rem 0;
        ${media.mobile(`
            margin: 3rem 0;
        `)}
    }
`

const MainTheme = styled.div`
    height: 100vh;
`

const ThemeContainer = styled.div`
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

export const MainTitle = styled(Title)`
    word-break: keep-all;
    position: relative;
    display: inline-block;
    color: ${(props) => props.theme.colors.black_10};
    ${media.mobile(`
        font-size: 56px;
    `)}
    &::before {
        background-color: ${(props) => props.color};
        transform: rotate(4.25deg);
        content: '';
        width: 120%;
        height: 110px;
        display: inline-block;
        position: absolute;
        z-index: -1;
    }
`

export const FirstTitle = styled(MainTitle)`
    &::before {
        left: -12%;
        top: 3%;
    }
`

export const SecondTitle = styled(MainTitle)`
    &::before {
        left: -12%;
        top: -2%;
        transform: rotate(-1deg);
    }
`
export const ThirdTitle = styled(MainTitle)`
    &::before {
        width: 120%;
        left: -10%;
        top: -6%;
        transform: rotate(-10deg);
        z-index: -2;
    }
`

const MainText = styled(BodyText)`
    font-size: 1.7rem;
    font-weight: normal;
    margin-top: 2rem;
    margin-left: 12rem;
    ${media.mobile(`
        margin-top: 3rem;
        margin-left: 6rem;
    `)}
`

const MainBackground = () => {
    const { t } = useTranslation()
    const theme = useTheme()

    return (
        <>
            <MainTheme>
                <ThemeContainer>
                    <div>
                        <FirstTitle color={theme.colors.violet0}>
                            {t(`label:pycon`)}
                        </FirstTitle>
                    </div>
                    <div>
                        <SecondTitle color={theme.colors.violet1}>
                            {t(`label:korea`)}
                        </SecondTitle>
                    </div>
                    <div>
                        <ThirdTitle color={theme.colors.yellow0}>
                            {t(`label:thisYear`)}
                        </ThirdTitle>
                    </div>
                    <MainText>{t(`label:pyconkrDate`)}</MainText>
                </ThemeContainer>
            </MainTheme>
            <Container>
                <MainSlogan />
            </Container>
            <Container>
                <MainTalkList />
            </Container>
            <Container>
                <MainContact />
            </Container>
        </>
    )
}

export default MainBackground
