import React from 'react'
import { ITalkItem, ITalkTableData } from '../../../interfaces/IProgram'
import styled from 'styled-components'

const Table = styled.table`
    width: 100%;
`

const TalkTable = (props: {
    day: string
    headers: string[]
    list: ITalkItem[]
}) => {
    const headers = ['트랙1(101)', '트랙2(102)']

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>
                            시간
                            <br />
                            (KST)
                        </th>
                        {headers.map((header) => (
                            <th key={header}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    )
}

export default TalkTable
