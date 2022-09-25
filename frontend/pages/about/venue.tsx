import React from 'react'
import type { NextPage, GetServerSideProps } from 'next'
import { useTranslation } from 'react-i18next'
import { PageName } from '../../data/enums/PageName'
import PageTitle from '../../components/core/PageTitle'
import { PageProps } from '../../interfaces/PageProps'
import Image from 'next/image'
import styled from 'styled-components'
import FirstFloorMap from '../../public/images/1st-floor.jpg'
import SecondFloorMap from '../../public/images/2nd-floor.jpg'
import VenueMap from '../../public/images/venue.jpg'
import { Heading3, Heading4 } from '../../assets/styles/typo'
import Linkify from 'react-linkify'

const ImageBlock = styled(Image)`
    display: block;
    margin: 1rem 0;
`
const VenueInfo = styled.div`
    margin-bottom: 4rem;
    a {
        color: ${(props) => props.theme.colors.blue0};
    }
`
const Description = styled.div`
    margin: 1rem 0 2rem;
`
const List = styled.li`
    list-style: inside;
`
const FloorTitle = styled(Heading4)`
    margin: 1rem 0;
`

const TalkSchedule: NextPage = (props: PageProps) => {
    const { t } = useTranslation()

    return (
        <>
            <PageTitle title={props.pageName} />
            <VenueInfo>
                <Heading3 useGradient={true}>
                    {t('label:pyConKrYoutube')}
                </Heading3>
                <Description>
                    <Linkify>{t('label:youtubeStreaming')}</Linkify>
                </Description>
            </VenueInfo>
            <VenueInfo>
                <Heading3 useGradient={true}>{t('label:venueTitle')}</Heading3>
                <ImageBlock src={VenueMap} alt={'Venue Image'} />
                <Description>
                    <ul>
                        <List>{t('label:venueAddress')}</List>
                        <List>{t('label:elevatorAvailable')}</List>
                        <List>{t('label:noParking')}</List>
                    </ul>
                </Description>
                <Heading3 useGradient={true}>{t('label:floorInfo')}</Heading3>
                <FloorTitle>{t('label:firstFloor')}</FloorTitle>
                <ImageBlock src={FirstFloorMap} alt={'First Floor Image'} />
                <FloorTitle>{t('label:secondFloor')}</FloorTitle>
                <ImageBlock src={SecondFloorMap} alt={'Second Floor Image'} />
            </VenueInfo>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    return {
        props: {
            title: PageName.Venue
        }
    }
}

export default TalkSchedule
