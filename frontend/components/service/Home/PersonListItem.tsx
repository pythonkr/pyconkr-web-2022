import styled from 'styled-components'
import { media } from '../../../assets/styles/mixin'
import { IPerson } from '../../../interfaces/IProgram'
import React from 'react'
import Linkify from 'react-linkify'
import { DEFAULT_PROFILE_PATH } from '../../../data/constants/config'

const PersonProfile = styled.div`
    width: 6rem;
    height: 6rem;
    flex-shrink: 0;
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-position: center;
    border-radius: 50%;
`

const PersonContainer = styled.li`
    display: flex;
    align-items: flex-start;
    overflow-wrap: anywhere;
    & + & {
        margin-top: 2rem;
        ${media.mobile(`
            margin-top: 2.5rem;
        `)}
    }
`
const PersonInfo = styled.div`
    margin-left: 1rem;
    ${media.mobile(`
        flex: 1;
    `)}
`
const PersonName = styled.div`
    font-weight: bold;
`
const PersonIntro = styled.p`
    margin-top: 0.8rem;
    a {
        color: ${(props) => props.theme.colors.blue0};
    }
`

const PersonListItem = (props: { item: IPerson }) => {
    const { item } = props

    return (
        <PersonContainer>
            <PersonProfile image={item?.image || DEFAULT_PROFILE_PATH} />
            <PersonInfo>
                <PersonName>{item.name}</PersonName>
                <PersonIntro>
                    <Linkify>{item.introduction}</Linkify>
                </PersonIntro>
            </PersonInfo>
        </PersonContainer>
    )
}

export default PersonListItem
