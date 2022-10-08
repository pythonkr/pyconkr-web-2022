import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import React from 'react'
import { LocalePage } from '../../../interfaces/PageProps'
import { IPerson, ITalkItem } from '../../../interfaces/IProgram'
import { getTalkById } from '../../api/program'
import PageTitle from '../../../components/core/PageTitle'
import { useTranslation } from 'react-i18next'
import Speaker from '../../../components/service/Program/Speaker'
import { DEFAULT_PROFILE_PATH } from '../../../data/constants/config'
import styled from 'styled-components'
import { Heading3 } from '../../../assets/styles/typo'
import Linkify from 'react-linkify'

interface TalkListDetailProps extends LocalePage<ITalkItem> {
    locale: string
}

const DetailContainer = styled.div`
    a {
        color: ${(props) => props.theme.colors.blue0};
    }
`

const Description = styled.div`
    margin-top: 2rem;
    white-space: pre-line;
    & + & {
        margin-top: 4rem;
    }
`

const SpeakerContainer = styled.div`
    margin-top: 4rem;
`

const TalkListDetail: NextPage = (props: TalkListDetailProps) => {
    const { t } = useTranslation()

    const item: ITalkItem = props[props.locale]
    const speaker: IPerson = {
        image: item.speaker_profile_img ?? DEFAULT_PROFILE_PATH,
        name: item.user_name,
        introduction: item.introduction
    }
    const videoUrl = item.video_url ?? ''

    return (
        <DetailContainer>
            <PageTitle title={item.title} />
            <div>
                {t('label:category')}: {item.category}
            </div>
            <div>
                {t('label:difficulty')}: {item.difficulty}
            </div>
            <div>
                {t('label:duration')}: {t(`enum:TalkDuration.${item.duration}`)}
            </div>
            <div>
                {t('label:language')}: {t(`enum:TalkLanguage.${item.language}`)}
            </div>
            <Description>
                <Heading3 useGradient={true}>{t('label:description')}</Heading3>
                <Linkify>{item.desc}</Linkify>
            </Description>
            <Description>
                <Heading3 useGradient={true}>{t('label:videoLink')}</Heading3>
                <a href={videoUrl} target={'_blank'} rel="noreferrer">
                    {videoUrl}
                </a>
            </Description>
            <SpeakerContainer>
                <Heading3 useGradient={true}>
                    {t('label:speakerIntro')}
                </Heading3>
                <Speaker item={speaker} />
            </SpeakerContainer>
        </DetailContainer>
    )
}

export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    const { locale, params } = context
    try {
        const data = await getTalkById(params?.id as string)

        // TODO: Apply locale
        return {
            props: {
                locale,
                title: data.title,
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

export default TalkListDetail
