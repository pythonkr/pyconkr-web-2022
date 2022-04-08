import React from 'react'
import { routes, RouteType } from '../../routes/routes'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { media } from '../../assets/styles/mixin'
import theme from '../../assets/styles/theme'

const Container = styled.nav`
    ${media.mobile(`
        display: none;
    `)}
    ${(props) => {
        if (props.isTransparent) {
            return `background: transparent;`
        }
        return `background-image: ${theme.gradient};`
    }}
`

const List = styled.ul`
    width: 1080px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const ListItem = styled.li<{ active?: boolean }>`
    padding: 1.3rem 0;
    font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
    color: ${(props) => props.theme.colors.white};
`
const Link = styled.a`
    display: block;
    cursor: pointer;
`

interface NavProps {
    locale: string
}

const NavBar = (props: NavProps) => {
    const { t } = useTranslation()
    const router = useRouter()
    const isHome = router.pathname === routes[0].path

    const isActive = (route: RouteType) => {
        return route.path !== routes[0].path && router.pathname === route.path
    }

    const getPath = (routePath: string) => {
        return props.locale === 'ko'
            ? routePath
            : `/${props.locale}${routePath}`
    }

    return (
        <Container isTransparent={isHome}>
            <List>
                {routes.map((route, index) => {
                    return (
                        <ListItem key={index} active={isActive(route)}>
                            <Link href={getPath(route.path)}>
                                {t(`pageTitle:${route.name}`)}
                            </Link>
                        </ListItem>
                    )
                })}
                {props.locale === 'ko' ? (
                    <ListItem>
                        <Link href="/en">English</Link>
                    </ListItem>
                ) : (
                    <ListItem>
                        <Link href="/">한국어</Link>
                    </ListItem>
                )}
            </List>
        </Container>
    )
}

export default NavBar
