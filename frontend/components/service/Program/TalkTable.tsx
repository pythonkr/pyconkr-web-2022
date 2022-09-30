import React from 'react'
import { ITalkItem, ITalkTableList } from '../../../interfaces/IProgram'
import styled from 'styled-components'
import { format } from 'date-fns'
import Link from 'next/link'
import Resources from '../../../data/constants/resources'

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
`
const LeftColumn = styled.div`
    width: 90px;
`

const TableHeader = styled.thead`
    border-top: 2px solid ${(props) => props.theme.colors.white};
    border-bottom: 2px solid ${(props) => props.theme.colors.white};
`
const TableRow = styled.tr`
    & + & {
        border-top: 1px solid ${(props) => props.theme.colors.white};
    }
`
const TableCell = styled.div`
    padding: 1rem;
    text-align: ${(props) => props.align ?? 'center'};
`
const BadgeWrap = styled.div`
    margin-top: 0.5rem;
`
const Title = styled.div`
    margin: 0.4rem 0;
`
const Speaker = styled.div`
    color: ${(props) => props.theme.colors.violet0};
`
const BoldText = styled.div`
    font-weight: bold;
`

const TalkTableItem = (props: { item: ITalkItem }) => {
    const { item } = props
    const isKeynote = item.category === Resources.KEYNOTE_NAME

    return (
        <Link href={`/program/talks/${item.id}`}>
            <a>
                {isKeynote && <BoldText>[키노트]</BoldText>}
                <Title>{item.title}</Title>
                <Speaker>{item.user_name}</Speaker>
            </a>
        </Link>
    )
}

const TalkTable = (props: {
    day: string
    headers: string[]
    list: ITalkTableList[]
}) => {
    const { list } = props

    const sortByTrack = (list: ITalkItem[]) => {
        return list.sort((a, b) => a.track_num - b.track_num)
    }

    const getTime = (timeString: string): string => {
        return format(new Date(timeString), 'HH:mm')
    }

    return (
        <div>
            <Table>
                <TableHeader>
                    <tr>
                        <th>
                            <LeftColumn>
                                시간
                                <br />
                                (KST)
                            </LeftColumn>
                        </th>
                        {props.headers.map((header) => (
                            <th key={header}>{header}</th>
                        ))}
                    </tr>
                </TableHeader>
                <tbody>
                    {list.map((item, index) => (
                        <TableRow key={`time-${index}`}>
                            <td>
                                <TableCell align={'left'}>
                                    {getTime(item.video_open_at)}
                                </TableCell>
                            </td>
                            {item.talkList.length > 1 ? (
                                sortByTrack(item.talkList).map((talkItem) => (
                                    <td key={`talk-${talkItem.id}`}>
                                        <TableCell>
                                            <TalkTableItem item={talkItem} />
                                        </TableCell>
                                    </td>
                                ))
                            ) : (
                                <td colSpan={2}>
                                    <TableCell>
                                        <TalkTableItem
                                            item={item.talkList[0]}
                                        />
                                    </TableCell>
                                </td>
                            )}
                        </TableRow>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default TalkTable
