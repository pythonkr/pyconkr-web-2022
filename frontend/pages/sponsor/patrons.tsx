import React from 'react'
import type { NextPage, GetServerSideProps } from 'next'
import { useTranslation } from 'react-i18next'
import { PageName } from '../../data/enums/PageName'
import PageTitle from '../../components/core/PageTitle'
import { PageProps } from '../../interfaces/PageProps'
import PersonListItem from '../../components/service/Home/PersonListItem'
import { IPatrons } from '../../interfaces/api/IApiSponsor'
import { getPatronData } from '../api/sponsor'
import { IPerson } from '../../interfaces/IProgram'
import { Heading3 } from '../../assets/styles/typo'
import styled from 'styled-components'

const PageInfo = styled.div`
    margin: 2rem 0 3rem;
`

interface PatronsProps extends PageProps {
    list: IPerson[]
}

const Patrons: NextPage = (props: PatronsProps) => {
    const { t } = useTranslation()

    return (
        <div>
            <PageTitle title={props.pageName} />
            <PageInfo>{t('label:patronInfo')}</PageInfo>
            {props.list.map((item, index) => (
                <PersonListItem key={`patron-${index}`} item={item} />
            ))}
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const list: IPatrons[] = await getPatronData()

    const formattedList: IPerson[] = list.map((item) => ({
        name: item.name,
        introduction: item.message
    }))

    return {
        props: {
            title: PageName.SponsorPatrons,
            list: formattedList
        }
    }
}

export default Patrons
