import React from 'react'
import type { NextPage, GetServerSideProps } from 'next'
import { useTranslation } from 'react-i18next'
import { PageName } from '../../data/enums/PageName'
import PageTitle from '../../components/core/PageTitle'
import { PageProps } from '../../interfaces/PageProps'
import Resources from '../../data/constants/resources'
import styled from 'styled-components'
import { Paragraph } from '../../assets/styles/typo'

const TicketInfo = styled(Paragraph)`
    margin: 2rem 0;
    white-space: pre-line;
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
            <TicketInfo>{t('label:ticketInfo')}</TicketInfo>
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
