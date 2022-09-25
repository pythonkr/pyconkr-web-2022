import React from 'react'
import styled from 'styled-components'
import Linkify from 'react-linkify'
import PageTitle from '../../../components/core/PageTitle'
import { ISponsorDetail, ISponsorListItem } from '../../../interfaces/ISponsor'
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import { getSponsorDetail } from '../../api/sponsor'
import { LocalePage } from '../../../interfaces/PageProps'
import { useTranslation } from 'react-i18next'
import { media } from '../../../assets/styles/mixin'

interface SponsorDetailProps extends LocalePage<ISponsorDetail> {
    title: string
    locale: string
}

const SponsorImage = styled.img`
    display: block;
    margin: 0 auto;
    max-width: 400px;
    margin-top: 4rem;
    background: ${(props) => props.theme.colors.white};
    ${media.mobile(`
        width: 100%;
    `)}
`
const SponsorUrl = styled.a`
    display: block;
    margin-top: 2rem;
    color: ${(props) => props.theme.colors.blue0};
    &:hover {
        text-decoration: underline;
    }
`
const SponsorContent = styled.p`
    white-space: pre-wrap;
    margin-top: 6rem;
    a {
        color: ${(props) => props.theme.colors.blue0};
    }
    ${media.mobile(`
        margin-top: 4rem;
    `)}
`

const SponsorDetail: NextPage = (props: SponsorDetailProps) => {
    const { t } = useTranslation()
    const sponsor: ISponsorListItem = props[props.locale]

    return (
        <>
            <PageTitle title={sponsor.name} />
            <SponsorImage src={sponsor.logo_image} alt={sponsor.name} />
            {!sponsor.url ?? (
                <SponsorUrl href={sponsor.url}>{sponsor.url}</SponsorUrl>
            )}
            <SponsorContent>
                <Linkify>{sponsor.desc}</Linkify>
            </SponsorContent>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    const { locale, params } = context
    try {
        const data = await getSponsorDetail(params?.id as string)

        // TODO: Apply locale
        return {
            props: {
                locale,
                title: data.name,
                ko: data,
                en: data
            }
        }
    } catch (error) {
        // TODO: Return custom error message
        return {
            notFound: true
        }
    }
}

export default SponsorDetail
