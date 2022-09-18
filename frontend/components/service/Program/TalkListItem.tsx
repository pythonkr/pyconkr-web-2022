import React from 'react'
import { ITalkItem } from '../../../interfaces/IProgram'
import styled from 'styled-components'

const ListITem = styled.a`
    &:hover {
        text-decoration: underline;
    }
`

const TalkListItem = (props: { item: ITalkItem }) => {
    const item = props.item

    return (
        <div>
            <ListITem href={`/program/talks/${item.id}`}>
                {item.user_name} / {item.title}
            </ListITem>
        </div>
    )
}

export default TalkListItem
