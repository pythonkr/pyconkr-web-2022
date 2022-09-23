import React, { useState, useEffect } from 'react'
import { routes, RouteType } from '../../routes/routes'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { media } from '../../assets/styles/mixin'
import SnsLink from './SnsLink'
import PyconLogoWhite from '../../public/images/pyconkr_2022_logo_white.png'
import Link from 'next/link'

const Container = styled.nav`
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    background: ${(props) =>
        `linear-gradient(to bottom, ${props.theme.colors.black_10}, transparent)`};
    ${media.mobile(`
        display: none;
    `)}
`

const HomeLink = styled.a`
    display: block;
    padding: 1.3rem;
`

const List = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 1.5rem;
`
const ListItem = styled.li<{ active?: boolean }>`
    padding: 0 1.3rem;
    font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
    color: ${(props) => props.theme.colors.white};
    position: relative;
`
export const BlockLink = styled(Link)`
    display: block;
    cursor: pointer;
`
export const SubMenuToggleCheckbox = styled.input`
    display: none;
`
export const SubMenuToggleLabel = styled.label`
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    padding: 0 0.6rem;
`
export const SubMenuToggleSpan = styled.span``
export const SubMenuToggleIcon = styled.span`
    display: inline-block;
    vertical-align: middle;
    width: 0;
    height: 0;
    margin: 0 0 0.19rem 0.32rem;
    border-style: solid;
    border-width: 0.38rem 0.38rem 0 0.38rem;
    border-color: rgba(255, 255, 255, 0.75) transparent transparent transparent;
    ${SubMenuToggleCheckbox}:checked ~ & {
        transform: rotate(180deg);
    }
`
export const SubMenuList = styled.ul`
    visibility: hidden;
    height: 0;
    display: flex;
    flex-direction: column;
    background: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.grey_66};
    padding: 1rem 0;
    position: absolute;
    left: 0;
    right: 0;
    top: 2.5rem;
    width: 13rem;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    ${SubMenuToggleCheckbox}:checked ~ & {
        visibility: visible;
        height: auto;
    }
`
export const SubMenuListItem = styled.li`
    padding: 0 1rem;
    & + & {
        padding-top: 0.6rem;
    }
`
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

const NavBar = (props: NavProps) => {
    const { t } = useTranslation()
    const router = useRouter()
    const isHome = router.pathname === routes[0].path

    const isActive = (route: RouteType) => {
        return route.path !== routes[0].path && router.pathname === route.path
    }
    const [openedSubMenu, setOpenedSubMenu] = useState('')

    const getPath = (routePath: string) => {
        return props.locale === 'ko'
            ? routePath
            : `/${props.locale}${routePath}`
    }

    const toggleSubMenu = (menuName: string) => {
        setOpenedSubMenu(openedSubMenu === menuName ? null : menuName)
    }

    const handleChangeLanguage = (lang) => (e) => {
        e.preventDefault()
        router.push(router.asPath, undefined, { locale: lang })
    }

    useEffect(() => {
        setOpenedSubMenu('')
    }, [router.pathname])

    return (
        <Container isTransparent={isHome}>
            <HomeLink href="/">
                <Image
                    src={PyconLogoWhite}
                    alt="Pycon Korea 2022"
                    width={140}
                    height={40}
                />
            </HomeLink>
            <List>
                {routes.map((route, index) => {
                    return route.subMenu ? (
                        <ListItem key={index} active={isActive(route)}>
                            <SubMenuToggleCheckbox
                                type="checkbox"
                                id={route.name}
                                checked={openedSubMenu === route.name}
                                onChange={() => toggleSubMenu(route.name)}
                            />
                            <SubMenuToggleLabel htmlFor={route.name}>
                                <SubMenuToggleSpan>
                                    {t(`pageTitle:${route.name}`)}
                                </SubMenuToggleSpan>
                            </SubMenuToggleLabel>
                            <SubMenuToggleIcon />
                            <SubMenuList>
                                {route.subMenu.map((subMenu, index) => (
                                    <SubMenuListItem key={index}>
                                        <BlockLink href={getPath(subMenu.path)}>
                                            {t(`pageTitle:${subMenu.name}`)}
                                        </BlockLink>
                                    </SubMenuListItem>
                                ))}
                            </SubMenuList>
                        </ListItem>
                    ) : (
                        <ListItem key={index} active={isActive(route)}>
                            <BlockLink href={getPath(route.path)}>
                                {t(`pageTitle:${route.name}`)}
                            </BlockLink>
                        </ListItem>
                    )
                })}
                {props.locale === 'ko' ? (
                    <ListItem>
                        <LanguageChangeButton
                            onClick={handleChangeLanguage('en')}
                        >
                            English
                        </LanguageChangeButton>
                    </ListItem>
                ) : (
                    <ListItem>
                        <LanguageChangeButton
                            onClick={handleChangeLanguage('ko')}
                        >
                            한국어
                        </LanguageChangeButton>
                    </ListItem>
                )}
                <SnsLink />
            </List>
        </Container>
    )
}

export default NavBar
