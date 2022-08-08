import React, { useState, useEffect } from 'react'
import { routes, RouteType } from '../../routes/routes'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { media } from '../../assets/styles/mixin'
import {
    Link,
    SubMenuList,
    SubMenuListItem,
    SubMenuToggleCheckbox,
    SubMenuToggleIcon,
    SubMenuToggleLabel,
    SubMenuToggleSpan
} from './NavBar'
import SnsLink from './SnsLink'

const Container = styled.div`
    display: none;
    ${media.mobile(`
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        height: 3.75rem;
    `)}
    ${(props) => {
        if (props.isTransparent) {
            return `background: transparent;`
        }
        return `background-image: ${props.theme.gradient};`
    }}
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
    background-color: ${(props) => props.theme.colors.primary0};
`

const List = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 2.5rem 2rem;
`

const ListItem = styled.li<{ active?: boolean }>`
    padding: 1.3rem 0;
    text-decoration: ${(props) => (props.active ? 'underline' : 'none')};
    color: ${(props) => props.theme.colors.white};
    line-height: 2rem;
    position: relative;
`

const MobileSubMenuToggleCheckbox = styled(SubMenuToggleCheckbox)``
const MobileSubMenuToggleLabel = styled(SubMenuToggleLabel)`
    padding: 0;
    width: 100%;
`
const MobileSubMenuToggleSpan = styled(SubMenuToggleSpan)``
const MobileSubMenuToggleIcon = styled(SubMenuToggleIcon)`
    position: absolute;
    right: 0;
    top: 2.3rem;
`
const MobileSubMenuList = styled(SubMenuList)`
    position: relative;
    left: initial;
    right: initial;
    top: initial;
    width: auto;
    background: inherit;
    color: inherit;
    padding: 0;
    box-shadow: none;
    border: 0;
    ${MobileSubMenuToggleCheckbox}:checked ~ & {
        padding: 1rem 0;
    }
`
const MobileSubMenuListItem = styled(SubMenuListItem)``

const LanguageChangeButton = styled.button`
    background: transparent;
    border: 0;
    color: inherit;
    font-size: inherit;
    cursor: pointer;
`

interface NavProps {
    locale: string
}

const NavBarMobile = (props: NavProps) => {
    const { t } = useTranslation()
    const router = useRouter()

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [openedSubMenu, setOpenedSubMenu] = useState('')

    const isActive = (route: RouteType) => {
        return route.path !== routes[0].path && router.pathname === route.path
    }
    const isHome = router.pathname === routes[0].path

    const toggleMenu = () => {
        setIsMenuOpen((isMenuOpen) => !isMenuOpen)
    }
    const toggleSubMenu = (menuName: string) => {
        setOpenedSubMenu(openedSubMenu === menuName ? null : menuName)
    }

    const getPath = (routePath: string) => {
        return props.locale === 'ko'
            ? routePath
            : `/${props.locale}${routePath}`
    }

    const onChangeLanguage = (lang) => (e) => {
        e.preventDefault()
        router.push(router.asPath, undefined, { locale: lang })
    }

    return (
        <Container isTransparent={isHome}>
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
                            return route.subMenu ? (
                                <ListItem key={index} active={isActive(route)}>
                                    <MobileSubMenuToggleCheckbox
                                        type="checkbox"
                                        id={route.name}
                                        checked={openedSubMenu === route.name}
                                        onChange={() =>
                                            toggleSubMenu(route.name)
                                        }
                                    />
                                    <MobileSubMenuToggleLabel
                                        htmlFor={route.name}
                                    >
                                        <MobileSubMenuToggleSpan>
                                            {t(`pageTitle:${route.name}`)}
                                        </MobileSubMenuToggleSpan>
                                    </MobileSubMenuToggleLabel>
                                    <MobileSubMenuToggleIcon />
                                    <MobileSubMenuList>
                                        {route.subMenu.map((subMenu, index) => (
                                            <MobileSubMenuListItem key={index}>
                                                <Link
                                                    href={getPath(subMenu.path)}
                                                >
                                                    {t(
                                                        `pageTitle:${subMenu.name}`
                                                    )}
                                                </Link>
                                            </MobileSubMenuListItem>
                                        ))}
                                    </MobileSubMenuList>
                                </ListItem>
                            ) : (
                                <ListItem key={index} active={isActive(route)}>
                                    <Link href={getPath(route.path)}>
                                        {t(`pageTitle:${route.name}`)}
                                    </Link>
                                </ListItem>
                            )
                        })}
                        {props.locale === 'ko' ? (
                            <ListItem>
                                <LanguageChangeButton
                                    onClick={onChangeLanguage('en')}
                                >
                                    English
                                </LanguageChangeButton>
                            </ListItem>
                        ) : (
                            <ListItem>
                                <LanguageChangeButton
                                    onClick={onChangeLanguage('ko')}
                                >
                                    한국어
                                </LanguageChangeButton>
                            </ListItem>
                        )}
                        <SnsLink />
                    </List>
                </Navigation>
            )}
        </Container>
    )
}

export default NavBarMobile
