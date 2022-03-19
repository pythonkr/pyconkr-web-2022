import React from 'react'
import Routes from '../../routes/routes'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'

const List = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const ListItem = styled.li<{active?: boolean}>`
    cursor: pointer;
    padding: 1.3rem 0;
    font-weight: ${props => props.active ? 'bold' : 'normal'};
    color: ${props => props.theme.colors.white};
`
const Link = styled.a`
    display: block;
`


const NavBar = () => {
    const { t } = useTranslation()
    const router = useRouter()

    return (
        <nav>
            <List>
            {Routes.map((route, index) => {
                return (
                    <ListItem
                        key={index}
                        active={router.pathname === route.path}
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
