import React, { useState } from 'react'
import type { NextPage, GetServerSideProps } from 'next'
import { useTranslation } from 'react-i18next'
import { PageName } from '../../data/enums/PageName'
import PageTitle from '../../components/core/PageTitle'
import { PageProps } from '../../interfaces/PageProps'
import { getTalkList } from '../api/program'
import { GetServerSidePropsContext } from 'next'
import { ITalkItem, ITalkList } from '../../interfaces/IProgram'
import { compareAsc, isSameDay } from 'date-fns'
import TalkTableToggleButton from '../../components/service/Program/TalkTableToggleButton'
import TalkTable from '../../components/service/Program/TalkTable'

interface TalkTableProps extends PageProps {
    data: ITalkList
}

const TalkSchedule: NextPage = (props: TalkTableProps) => {
    const { t } = useTranslation()
    const { pageName, data } = props
    const [selectedDay, setSelectedDay] = useState<string>('day1')

    const updateSelectedDay = (day: string) => {
        setSelectedDay(day)
    }

    const tableData: ITalkItem[] = data.list.sort((a, b) =>
        compareAsc(new Date(a.video_open_at), new Date(b.video_open_at))
    )

    const day1tableList: ITalkItem[] = tableData.filter((item) =>
        isSameDay(new Date(item.video_open_at), new Date(2022, 9, 1))
    )
    const day2tableList: ITalkItem[] = tableData.filter((item) =>
        isSameDay(new Date(item.video_open_at), new Date(2022, 10, 1))
    )

    return (
        <div>
            <PageTitle title={pageName} />
            <TalkTableToggleButton handleClick={updateSelectedDay} />
            {selectedDay === 'day1' ? (
                <TalkTable
                    day="day1"
                    headers={['트랙1(101)', '트랙2(102)']}
                    list={day1tableList}
                />
            ) : (
                <TalkTable
                    day="day2"
                    headers={['트랙1(103)', '트랙2(104)']}
                    list={day2tableList}
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
