import React from 'react'
import { Heading3 } from '../../assets/styles/typo'
import styled from 'styled-components'

const Container = styled.div`
    margin-top: 8rem;
`

const LayoutSponsorList = () => {
    return (
        <Container>
            <Heading3 useGradient={true}>후원사 목록</Heading3>
        </Container>
    )
}

export default LayoutSponsorList
