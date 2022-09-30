import React from 'react'
import styled, { useTheme } from 'styled-components'
import { ISponsorLevelItem, ISponsorList } from '../../../interfaces/ISponsor'
import { useTranslation } from 'react-i18next'
import { Heading3 } from '../../../assets/styles/typo'
import { DEFAULT_PROFILE_PATH } from '../../../data/constants/config'
import { media } from '../../../assets/styles/mixin'
import { SponsorLevel } from '../../../data/enums/SponsorLevel'

const SponsorLevelContainer = styled.div`
    margin-bottom: 6rem;
`
const SponsorGroup = styled.ul`
    ${(props) => {
        if (props.keynote) {
            return `
                width: 100%;
                background: ${props.theme.colors.white};
            `
        }
    }}
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex: auto;
    gap: 2rem;
`

const SponsorItem = styled.li`
    background: ${(props) => props.color ?? props.theme.colors.white};
    width: 200px;
    height: 200px;
    text-align: center;
    list-style: none;
    display: inline-flex;
    align-items: center;
    ${media.mobile(`
        width: 140px;
        height: 140px;
    `)}
`

const SponsorLink = styled.a`
    display: block;
    margin: 0 auto;
`

const SponsorImage = styled.img`
    width: 100%;
    display: inline-block;
    vertical-align: top;
`

const SponsorList = (props: {
    list: ISponsorList
    useGradientTitle?: boolean
}) => {
    const { t } = useTranslation()
    const theme = useTheme()
    const sponsorList: { [key: string]: ISponsorLevelItem } = {}
    const blackBackgroundId = [3]
    const useGradient = props.useGradientTitle ?? true

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

    const isKeynote = (key: string) => {
        return (key as SponsorLevel) === SponsorLevel.LEVEL_1
    }

    return (
        <>
            {Object.keys(sponsorList)
                .sort()
                .map((key, index) => {
                    const item = sponsorList[key]
                    return (
                        <SponsorLevelContainer key={`sponsor-${index}`}>
                            <Heading3 useGradient={useGradient}>
                                {item.name}
                            </Heading3>
                            <SponsorGroup keynote={isKeynote(key)}>
                                {item.list.map((sponsor) => (
                                    <SponsorItem
                                        key={sponsor.slug}
                                        color={backgroundColor(sponsor.id)}
                                    >
                                        <SponsorLink
                                            href={`/sponsor/list/${sponsor.id}`}
                                        >
                                            <SponsorImage
                                                src={
                                                    sponsor.logo_image ??
                                                    DEFAULT_PROFILE_PATH
                                                }
                                                alt={sponsor.name}
                                            />
                                        </SponsorLink>
                                    </SponsorItem>
                                ))}
                            </SponsorGroup>
                        </SponsorLevelContainer>
                    )
                })}
        </>
    )
}

export default SponsorList
