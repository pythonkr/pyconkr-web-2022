import React from 'react'
import type { NextPage, GetServerSideProps } from 'next'
import { useTranslation } from 'react-i18next'
import { PageName } from '../../data/enums/PageName'
import PageTitle from '../../components/core/PageTitle'
import { PageProps } from '../../interfaces/PageProps'
import Resources from '../../data/constants/resources'
import styled from 'styled-components'
import Linkify from 'react-linkify'

const TicketInfo = styled.div`
    margin: 2rem 0;
`

const InfoTitle = styled.div`
    font-size: 1.2rem;
    font-weight: bold;
    margin: 1rem 0;
`
const InfoContent = styled.div`
    white-space: pre-line;
    a {
        color: ${(props) => props.theme.colors.blue0};
    }
`

const TicketLink = styled.a`
    display: inline-block;
    padding: 0.9rem 1.4rem;
    background-color: ${(props) => props.theme.colors.violet0};
    border-radius: 8px;
    text-decoration: none;
    font-weight: bold;
    color: ${(props) => props.theme.colors.white};
`

const Ticket: NextPage = (props: PageProps) => {
    const { t } = useTranslation()

    return (
        <div>
            <PageTitle title={props.pageName} />
            <TicketInfo>
                <InfoTitle>{t('label:applyOnline')}</InfoTitle>
                <InfoContent>
                    <Linkify>{t('label:onlineTicketInfo')}</Linkify>
                </InfoContent>
            </TicketInfo>
            <TicketInfo>
                <InfoTitle>{t('label:applyOffline')}</InfoTitle>
                <InfoContent>
                    <Linkify>{t('label:offlineTicketInfo')}</Linkify>
                </InfoContent>
            </TicketInfo>
            <TicketLink
                href={Resources.FESTA_TICKET_LINK}
                target="_blank"
                rel="noreferrer"
            >
                {t('label:buyTicket')}
            </TicketLink>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    return {
        props: {
            title: PageName.Ticket
        }
    }
}

export default Ticket
