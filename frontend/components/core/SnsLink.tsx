import React from 'react'
import Icon from '@mdi/react'
import { mdiFacebook, mdiTwitter } from '@mdi/js'
import styled from 'styled-components'
import Resource from '../../data/constants/resources'
import { media } from '../../assets/styles/mixin'

const List = styled.ul`
    display: flex;
`
const ListItem = styled.li`
    padding: 0.4rem;
    color: ${(props) => props.theme.colors.white};
    ${media.mobile(`
        padding: 1.3rem 0;
    `)}
    & + & {
        ${media.mobile(`
            padding-left: 1rem;
        `)}
    }
`

export const Link = styled.a`
    display: flex;
    cursor: pointer;
`

const SnsLink = () => {
    return (
        <List>
            <ListItem>
                <Link
                    target="_blank"
                    aria-label="Facebook Link"
                    href={Resource.pyconkrFacebook}
                >
                    <Icon path={mdiFacebook} size={1} />
                </Link>
            </ListItem>
            <ListItem>
                <Link
                    target="_blank"
                    aria-label="Twitter Link"
                    href={Resource.pyconkrTwitter}
                >
                    <Icon path={mdiTwitter} size={1} />
                </Link>
            </ListItem>
        </List>
    )
}

export default SnsLink
