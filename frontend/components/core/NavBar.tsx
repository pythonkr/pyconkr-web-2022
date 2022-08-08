import React, { useState } from 'react'
import { routes, RouteType } from '../../routes/routes'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { media } from '../../assets/styles/mixin'
import SnsLink from './SnsLink'

const Container = styled.nav`
    ${media.mobile(`
        display: none;
    `)}
    ${(props) => {
        if (props.isTransparent) {
            return `background: transparent;`
        }
        return `background-image: ${props.theme.gradient};`
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
    padding: 1.3rem;
    font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
    color: ${(props) => props.theme.colors.white};
    position: relative;
`
export const Link = styled.a`
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
    top: 3.4rem;
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

    return (
        <Container isTransparent={isHome}>
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
                                        <Link href={getPath(subMenu.path)}>
                                            {t(`pageTitle:${subMenu.name}`)}
                                        </Link>
                                    </SubMenuListItem>
                                ))}
                            </SubMenuList>
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
