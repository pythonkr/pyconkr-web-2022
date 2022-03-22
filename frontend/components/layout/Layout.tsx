import React, { ReactNode } from 'react'
import NavBar from '../core/NavBar'
import NavBarMobile from '../core/NavBarMobile'
import styled from 'styled-components'
import { media } from '../../assets/styles/mixin'

interface LayoutProps {
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
    margin-top: 3.5rem;
    ${media.mobile(`
        margin-top: 4rem;
        padding: 0 1.25rem;
    `)}
`

const Layout = (props: LayoutProps) => {
    return (
        <Container>
            <NavBarMobile />
            <NavBar />
            <Body>
                {props.children}
            </Body>
        </Container>
    )
}

export default Layout