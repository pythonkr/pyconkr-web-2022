import { Link } from '../../core/SnsLink'
import React from 'react'
import styled from 'styled-components'
import { ISponsorLevelItem, ISponsorList } from '../../../interfaces/ISponsor'
import categoryList from '../Program/CategoryList'
import Sponsor from '../../../pages/sponsor/list'
import { useTranslation } from 'react-i18next'
import { Heading3 } from '../../../assets/styles/typo'
import sponsorLevel from '../../../locales/ko/sponsorLevel'
import { DEFAULT_PROFILE_PATH } from '../../../data/constants/config'

const SponsorLevel = styled.div`
    margin-bottom: 6rem;
`
const SponsorGroup = styled.ul`
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    margin-top: 3rem;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const SponsorItem = styled.li`
    min-height: 100px;
    max-width: 200px;
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    & + & {
        margin-left: 1.6rem;
        @media (max-width: 768px) {
            margin-left: 0;
            margin-top: 2rem;
        }
    }
`

const SponsorImage = styled.img`
    width: 100%;
    display: inline-block;
    vertical-align: top;
`

const SponsorList = (props: { list: ISponsorList }) => {
    const { t } = useTranslation()
    const sponsorList: { [key: string]: ISponsorLevelItem } = {}

    props.list.list.forEach((sponsor) => {
        const key = `LEVEL_${sponsor.level}`
        if (!sponsorList.hasOwnProperty(key)) {
            sponsorList[key] = {
                value: sponsor.level,
                name: t(`sponsorLevel:${key}`),
                list: []
            }
        }
        sponsorList[key].list.push(sponsor)
    })

    return (
        <>
            {Object.keys(sponsorList)
                .sort()
                .map((key) => {
                    const item = sponsorList[key]
                    return (
                        <SponsorLevel key={key}>
                            <Heading3 useGradient={true}>{item.name}</Heading3>
                            <SponsorGroup>
                                {item.list.map((sponsor) => (
                                    <SponsorItem key={sponsor.slug}>
                                        <Link
                                            href={`/sponsor/list/${sponsor.slug}`}
                                        >
                                            <a>
                                                <SponsorImage
                                                    src={
                                                        sponsor.logo_image ??
                                                        DEFAULT_PROFILE_PATH
                                                    }
                                                    alt={sponsor.name}
                                                />
                                            </a>
                                        </Link>
                                    </SponsorItem>
                                ))}
                            </SponsorGroup>
                        </SponsorLevel>
                    )
                })}
        </>
    )
}

export default SponsorList
