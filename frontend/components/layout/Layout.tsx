import React, { ReactNode } from 'react'
import NavBar from '../core/NavBar'
import NavBarMobile from '../core/NavBarMobile'
import styled from 'styled-components'
import { media } from '../../assets/styles/mixin'
import LayoutSponsorList from './LayoutSponsorList'
import { ISponsorList } from '../../interfaces/ISponsor'

interface LayoutProps {
    locale: string
    pageName: string
    hideSponsor: boolean
    children: ReactNode
}

const Container = styled.div`
    width: 768px;
    margin: 0 auto;
    ${media.mobile(`
        width: 100%;
    `)}
`
const Body = styled.div`
    padding: 6rem 0;
    ${media.mobile(`
        margin: 0;
        padding: 6rem 1.25rem 5rem;
    `)}
`

export const Background = styled.div`
    background-color: ${(props) => props.theme.colors.black_10};
`

const Layout = (props: LayoutProps & { sponsorList?: ISponsorList }) => {
    // TODO: locale을 context로 관리
    return (
        <Background>
            <NavBarMobile locale={props.locale} />
            <NavBar locale={props.locale} />
            <Container>
                <Body>
                    {props.children}
                    {!props.hideSponsor && (
                        <LayoutSponsorList list={props.sponsorList} />
                    )}
                </Body>
            </Container>
        </Background>
    )
}

export default Layout
