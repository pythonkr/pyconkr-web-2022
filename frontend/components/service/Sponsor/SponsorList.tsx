import { Link } from '../../core/SnsLink'
import React from 'react'
import styled, { useTheme } from 'styled-components'
import { ISponsorLevelItem, ISponsorList } from '../../../interfaces/ISponsor'
import { useTranslation } from 'react-i18next'
import { Heading3 } from '../../../assets/styles/typo'
import { DEFAULT_PROFILE_PATH } from '../../../data/constants/config'
import { media } from '../../../assets/styles/mixin'

const SponsorLevel = styled.div`
    margin-bottom: 6rem;
`
const SponsorGroup = styled.ul`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex: auto;
    gap: 2rem;
    ${media.mobile(`
        flex-direction: column;
    `)}
`

const SponsorItem = styled.li`
    background: ${(props) => props.color ?? props.theme.colors.white};
    max-width: 200px;
    height: 200px;
    list-style: none;
    display: inline-flex;
    align-items: center;
`

const SponsorImage = styled.img`
    width: 100%;
    display: inline-block;
    vertical-align: top;
`

const SponsorList = (props: { list: ISponsorList }) => {
    const { t } = useTranslation()
    const theme = useTheme()
    const sponsorList: { [key: string]: ISponsorLevelItem } = {}
    const blackBackgroundId = [3]

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

    const backgroundColor = (id: number): string => {
        if (blackBackgroundId.includes(id)) {
            return theme.colors.black
        }
        return theme.colors.white
    }

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
                                    <SponsorItem
                                        key={sponsor.slug}
                                        color={backgroundColor(sponsor.id)}
                                    >
                                        <Link
                                            href={`/sponsor/list/${sponsor.id}`}
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