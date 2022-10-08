import React from 'react'
import { IPerson } from '../../../interfaces/IProgram'
import styled from 'styled-components'
import { media } from '../../../assets/styles/mixin'
import Linkify from 'react-linkify'

const SpeakerContainer = styled.div`
    display: flex;
    align-items: flex-start;
    ${media.mobile(`
        display: block;
    `)}
`
const SpeakerImage = styled.img`
    display: inline-flex;
    width: 200px;
    height: auto;
    ${media.mobile(`
        width: 100%;
    `)}
`
const SpeakerInfo = styled.div`
    margin-left: 1rem;
    ${media.mobile(`
        margin: 0;
    `)}
`
const SpeakerName = styled.div`
    font-weight: bold;
    ${media.mobile(`
        margin-top: 1rem;
    `)}
`
const SpeakerIntro = styled.p`
    margin-top: 0.8rem;
    white-space: pre-wrap;
`

const Speaker = (props: { item: IPerson }) => {
    const { item } = props

    return (
        <SpeakerContainer>
            <SpeakerImage src={item.image} alt={item.name} />
            <SpeakerInfo>
                <SpeakerName>{item.name}</SpeakerName>
                <SpeakerIntro>
                    <Linkify>{item.introduction}</Linkify>
                </SpeakerIntro>
            </SpeakerInfo>
        </SpeakerContainer>
    )
}

export default Speaker
