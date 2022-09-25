import React from 'react'
import { Heading2 } from '../../assets/styles/typo'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import SponsorList from '../service/Sponsor/SponsorList'
import { ISponsorList } from '../../interfaces/ISponsor'

const Container = styled.div`
    margin-top: 8rem;
`

const LayoutSponsorList = (props: { list: ISponsorList }) => {
    const { t } = useTranslation()

    return (
        <Container>
            <Heading2>{t('label:sponsorList')}</Heading2>
            <SponsorList list={props.list} />
        </Container>
    )
}

export default LayoutSponsorList
