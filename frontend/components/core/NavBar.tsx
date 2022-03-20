import React from 'react'
import { routes, RouteType } from '../../routes/routes'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import {Route} from "next/dist/server/router";

const List = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const ListItem = styled.li<{active?: boolean}>`
    cursor: pointer;
    padding: 1.3rem 0;
    text-decoration: ${props => props.active ? 'underline' : 'none'};
    color: ${props => props.theme.colors.white};
`
const Link = styled.a`
    display: block;
`


const NavBar = () => {
    const { t } = useTranslation()
    const router = useRouter()

    const isActive = (route: RouteType) => {
        return route.path !== routes[0].path && router.pathname === route.path
    }

    return (
        <nav>
            <List>
            {routes.map((route, index) => {
                return (
                    <ListItem
                        key={index}
                        active={isActive(route)}
                    >
                        <Link href={route.path}>
                            {t(`pageTitle:${route.name}`)}
                        </Link>
                    </ListItem>
                )
            })}
            </List>
        </nav>
    )
}

export default NavBar
