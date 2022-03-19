import React, { ReactNode } from 'react'
import NavBar from '../core/NavBar'
import styled from 'styled-components'

interface LayoutProps {
    children: ReactNode
}

const Container = styled.div`
    width: 1080px;
    margin: 0 auto;
    @media (max-width: 1080px) {
        width: 100%;
        padding: 0 1rem;
    }
`
const Body = styled.div`
    margin-top: 3.5rem;
`


const Layout = (props: LayoutProps) => {
    return (
        <Container>
            <NavBar />
            <Body>
                {props.children}
            </Body>
        </Container>
    )
}

export default Layout
