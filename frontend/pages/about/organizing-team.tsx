import { GetServerSideProps, NextPage } from 'next'
import PageTitle from '../../components/core/PageTitle'
import React from 'react'
import { PageProps } from '../../interfaces/PageProps'
import { PageName } from '../../data/enums/PageName'
import { useTranslation } from 'react-i18next'
import { Heading3 } from '../../assets/styles/typo'
import staffList from '../../data/constants/staff'
import { IPerson } from '../../interfaces/IProgram'
import PersonListItem from '../../components/service/Home/PersonListItem'
import styled from 'styled-components'

const PageInfo = styled.div`
    margin: 2rem 0 3rem;
`
const PersonList = styled.ul`
    margin-top: 2rem;
`

const OrganizingTeamPage: NextPage = (props: PageProps) => {
    const { t } = useTranslation()
    const list: IPerson[] = staffList

    return (
        <>
            <PageTitle title={props.pageName} />
            <PageInfo>{t('label:organizingTeamInfo')}</PageInfo>
            <Heading3 useGradient={true}>{t('label:staffList')}</Heading3>
            <PersonList>
                {list.map((item, index) => (
                    <PersonListItem key={`staff-${index}`} item={item} />
                ))}
            </PersonList>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    return {
        props: {
            title: PageName.OrganizingTeam
        }
    }
}

export default OrganizingTeamPage
