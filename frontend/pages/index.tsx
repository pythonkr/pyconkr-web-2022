import React from 'react'
import type { NextPage } from 'next'
import MainIdentity from '../components/service/Home/MainIdentity'
import MainSlogan from '../components/service/Home/MainSlogan'
import MainTalkList from '../components/service/Home/MainTalkList'
import MainContact from '../components/service/Home/MainContact'
import { media } from '../assets/styles/mixin'
import styled from 'styled-components'

const Container = styled.div`
    & + & {
        margin: 7rem 0;
        ${media.mobile(`
            margin: 3rem 0;
        `)}
    }
`

const Index: NextPage = () => {
    return (
        <div>
            <MainIdentity />
            <Container>
                <MainSlogan />
            </Container>
            <Container>
                <MainTalkList />
            </Container>
            <Container>
                <MainContact />
            </Container>
        </div>
    )
}

export default Index
