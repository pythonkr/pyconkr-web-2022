import React, { useState } from 'react'
import type { NextPage, GetServerSideProps } from 'next'
import { useTranslation } from 'react-i18next'
import { PageName } from '../../data/enums/PageName'
import PageTitle from '../../components/core/PageTitle'
import { PageProps } from '../../interfaces/PageProps'
import { getTalkList } from '../api/program'
import { GetServerSidePropsContext } from 'next'
import { ITalkItem, ITalkList, ITalkTableList } from '../../interfaces/IProgram'
import { compareAsc, isSameDay } from 'date-fns'
import TalkTableToggleButton from '../../components/service/Program/TalkTableToggleButton'
import TalkTable from '../../components/service/Program/TalkTable'
import styled from 'styled-components'

interface TalkTableProps extends PageProps {
    data: ITalkList
}

const ButtonWrap = styled.div`
    margin-top: 1.5rem;
`

const TalkSchedule: NextPage = (props: TalkTableProps) => {
    const { t } = useTranslation()
    const { pageName, data } = props
    const [selectedDay, setSelectedDay] = useState<string>('day1')

    const updateSelectedDay = (day: string) => {
        setSelectedDay(day)
    }

    const groupByProperty = (
        array: ITalkItem[],
        property: string
    ): ITalkTableList[] => {
        const groupByValue: { [key: string]: ITalkItem[] } = array.reduce(
            (obj, item) => {
                obj[item[property]] = obj[item[property]] || []
                obj[item[property]].push(item)
                return obj
            },
            {}
        )

        return Object.keys(groupByValue).map((key: string) => ({
            [property]: key,
            talkList: groupByValue[key]
        }))
    }

    const tableData: ITalkItem[] = data.list.sort((a, b) =>
        compareAsc(new Date(a.video_open_at), new Date(b.video_open_at))
    )

    const day1tableList: ITalkItem[] = tableData.filter((item) =>
        isSameDay(new Date(item.video_open_at), new Date(2022, 9, 1))
    )
    const day2tableList: ITalkItem[] = tableData.filter((item) =>
        isSameDay(new Date(item.video_open_at), new Date(2022, 9, 2))
    )

    return (
        <div>
            <PageTitle title={pageName} />
            <ButtonWrap>
                <TalkTableToggleButton handleClick={updateSelectedDay} />
            </ButtonWrap>
            {selectedDay === 'day1' ? (
                <TalkTable
                    day="day1"
                    headers={['트랙1', '트랙2']}
                    list={groupByProperty(day1tableList, 'video_open_at')}
                />
            ) : (
                <TalkTable
                    day="day2"
                    headers={['트랙3', '트랙4']}
                    list={groupByProperty(day2tableList, 'video_open_at')}
                />
            )}
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    const { locale } = context
    try {
        const data: ITalkList = await getTalkList()

        return {
            props: {
                title: PageName.TalkSchedule,
                locale,
                data
            }
        }
    } catch (error) {
        // TODO: Add error interface
        if (error.notFound) {
            return {
                notFound: true
            }
        }
    }
}

export default TalkSchedule
