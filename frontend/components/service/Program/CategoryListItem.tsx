import React from 'react'
import styled from 'styled-components'
import { ITalkItem } from '../../../interfaces/IProgram'
import { media } from '../../../assets/styles/mixin'
import { Heading4 } from '../../../assets/styles/typo'
import { DEFAULT_PROFILE_PATH } from '../../../data/constants/config'

const TalkList = styled.ul`
    margin-top: 1.5rem;
`
const TalkListItem = styled.li`
    & + & {
        margin-top: 2rem;
        ${media.mobile(`
            margin-top: 1.5rem;
        `)}
    }
`
const TalkLink = styled.a`
    display: block;
`
const TalkBlock = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
`
const PersonBlock = styled.div`
    margin-left: 2rem;
    flex: 1;
`
const Speaker = styled.div`
    margin-top: 0.4rem;
`
const Title = styled(Heading4)`
    font-weight: bold;
`
const SpeakerProfile = styled.div`
    width: 6rem;
    height: 6rem;
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-position: center;
    border-radius: 50%;
`

const CategoryListItem = (props: { list: ITalkItem[] }) => {
    return (
        <TalkList>
            {props.list.map((talk, index) => (
                <TalkListItem key={talk.id}>
                    <TalkLink href={`/program/talks/${talk.id}`}>
                        <TalkBlock>
                            <SpeakerProfile
                                image={
                                    talk.speaker_profile_img ??
                                    DEFAULT_PROFILE_PATH
                                }
                            />
                            <PersonBlock>
                                <Title>{talk.title}</Title>
                                <Speaker>{talk.user_name}</Speaker>
                            </PersonBlock>
                        </TalkBlock>
                    </TalkLink>
                </TalkListItem>
            ))}
        </TalkList>
    )
}

export default CategoryListItem
