import React, { ReactNode } from 'react'
import NavBar from '../core/NavBar'
import NavBarMobile from '../core/NavBarMobile'
import styled from 'styled-components'
import { media } from '../../assets/styles/mixin'
import { NextSeo } from 'next-seo'
import { useTranslation } from 'react-i18next'

interface LayoutProps {
    locale: string
    pageName: string
    children: ReactNode
}

const Container = styled.div`
    width: 1080px;
    margin: 0 auto;
    ${media.mobile(`
        width: 100%;
    `)}
`
const Body = styled.div`
    margin: 3.5rem 0 6rem;
    ${media.mobile(`
        margin: 6rem 0;
        padding: 0 1.25rem;
    `)}
`

const Layout = (props: LayoutProps) => {
    const { t } = useTranslation()

    const title = props.pageName
        ? `${t(`pageTitle:${props.pageName}`)} : ${t(`label:siteTitle`)}`
        : `${t(`label:siteTitle`)}`

    // TODO: locale을 context로 관리
    return (
        <>
            <NextSeo
                title={title}
                description=""
                openGraph={{
                    type: 'website',
                    url: 'https://pycon.kr',
                    title: `${t(`pageTitle:${props.pageName}`)} : ${t(
                        `label:siteTitle`
                    )}`,
                    site_name: `${t(`pageTitle:${props.pageName}`)} : ${t(
                        `label:siteTitle`
                    )}`
                }}
            />
            <NavBarMobile locale={props.locale} />
            <NavBar locale={props.locale} />
            <Container>
                <Body>{props.children}</Body>
            </Container>
        </>
    )
}

export default Layout
