import React, { useState } from 'react'
import { routes, RouteType } from '../../routes/routes'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { media } from '../../assets/styles/mixin'
import Theme from '../../assets/styles/theme'

const Container = styled.div`
    display: none;
    ${media.mobile(`
        display: block;
    `)}
`

const ToggleMenu = styled.input`
    display: none;
`

const ToggleMenuLabel = styled.label`
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 0;
    padding: 1.25rem;
    user-select: none;
    z-index: 2;
`

const ToggleMenuIcon = styled.span`
    background: ${(props) => props.theme.colors.white};
    display: block;
    height: 0.125rem;
    position: relative;
    transition: background 0.2s ease-out;
    width: 1.4rem;
    margin-top: 0.5rem;
    &:before,
    &:after {
        background: ${(props) => props.theme.colors.white};
        content: '';
        display: block;
        height: 100%;
        position: absolute;
        transition: all 0.2s ease-out;
        width: 100%;
        top: 0;
    }
    &:before {
        top: 0.5rem;
    }
    &:after {
        top: -0.5rem;
    }
    ${ToggleMenu}:checked ~${ToggleMenuLabel} & {
        background: transparent;
        &:after,
        &:before {
            top: 0;
        }
        &:before {
            transform: rotate(-45deg);
        }
        &:after {
            transform: rotate(45deg);
        }
    }
`

const Navigation = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-color: ${Theme.colors.primary0};
`

const List = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.5rem 0;
`

const ListItem = styled.li<{ active?: boolean }>`
    padding: 1.3rem 0;
    text-decoration: ${(props) => (props.active ? 'underline' : 'none')};
    color: ${(props) => props.theme.colors.white};
`
const Link = styled.a`
    display: block;
    cursor: pointer;
`

interface NavProps {
    locale: string
}

const NavBarMobile = (props: NavProps) => {
    const { t } = useTranslation()
    const router = useRouter()

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const isActive = (route: RouteType) => {
        return route.path !== routes[0].path && router.pathname === route.path
    }
    const toggleMenu = () => {
        setIsMenuOpen((isMenuOpen) => !isMenuOpen)
    }

    const getPath = (routePath: string) => {
        return props.locale === 'ko'
            ? routePath
            : `/${props.locale}${routePath}`
    }

    return (
        <Container>
            <ToggleMenu
                type="checkbox"
                id="menu-btn"
                checked={isMenuOpen}
                onChange={toggleMenu}
            />
            <ToggleMenuLabel htmlFor="menu-btn">
                <ToggleMenuIcon />
            </ToggleMenuLabel>
            {isMenuOpen && (
                <Navigation>
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
                </Navigation>
            )}
        </Container>
    )
}

export default NavBarMobile
