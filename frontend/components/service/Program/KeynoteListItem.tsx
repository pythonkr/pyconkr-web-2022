import React from 'react'
import styled from 'styled-components'
import { ITalkItem } from '../../../interfaces/IProgram'
import { media } from '../../../assets/styles/mixin'
import { Heading3 } from '../../../assets/styles/typo'
import { DEFAULT_PROFILE_PATH } from '../../../data/constants/config'
import { Link } from '../../core/SnsLink'

const ListItem = styled.div`
    & + & {
        margin-top: 6rem;
    }
`
const TalkBlock = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    ${media.mobile(`
        flex-direction: column;
    `)}
`
const PersonBlock = styled.div`
    flex: 1;
    margin-left: 2rem;
    ${media.mobile(`
        margin: 1rem 0;
    `)}
`
const Speaker = styled(Heading3)`
    font-size: 1.6rem;
    font-weight: bold;
`
const Title = styled.div`
    font-size: 1.2rem;
    font-weight: bold;
`
const Intro = styled.div`
    margin-top: 1.4rem;
`

const SpeakerProfile = styled.div`
    width: 15rem;
    height: 15rem;
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-position: center;
    border-radius: 50%;
`

const KeynoteListItem = (props: { item: ITalkItem }) => {
    return (
        <ListItem>
            <Link href={`/program/talks/${props.item.id}`}>
                <a>
                    <TalkBlock>
                        <SpeakerProfile
                            image={
                                props.item.speaker_profile_img ??
                                DEFAULT_PROFILE_PATH
                            }
                        />
                        <PersonBlock>
                            <Speaker useGradient={true}>
                                {props.item.user_name}
                            </Speaker>
                            <Title>{props.item.title}</Title>
                            <Intro>{props.item.introduction}</Intro>
                        </PersonBlock>
                    </TalkBlock>
                </a>
            </Link>
        </ListItem>
    )
}

export default KeynoteListItem
