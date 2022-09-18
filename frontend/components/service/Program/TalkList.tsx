import React from 'react'
import { ITalkList } from '../../../interfaces/IProgram'
import TalkListItem from './TalkListItem'

const TalkList = (props: ITalkList) => {
    return (
        <div>
            {props.list.map((item) => (
                <TalkListItem key={`talk-${item.id}`} item={item} />
            ))}
        </div>
    )
}

export default TalkList
