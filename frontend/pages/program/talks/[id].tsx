import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import React from 'react'
import { LocalePage } from '../../../interfaces/PageProps'
import { ISpeaker, ITalkItem } from '../../../interfaces/IProgram'
import { getTalkById } from '../../api/program'
import PageTitle from '../../../components/core/PageTitle'
import { useTranslation } from 'react-i18next'
import Speaker from '../../../components/service/Program/Speaker'
import { DEFAULT_PROFILE_PATH } from '../../../data/constants/config'
import styled from 'styled-components'
import { media } from '../../../assets/styles/mixin'

interface TalkListDetailProps extends LocalePage<ITalkItem> {
    locale: string
}

const SpeakerContainer = styled.div`
    margin-top: 4rem;
    ${media.mobile(`
        margin-top: 6rem;
    `)}
`
const Description = styled.div`
    margin-top: 1rem;
`


const TalkListDetail: NextPage = (props: TalkListDetailProps) => {
    const { t } = useTranslation()

    const item: ITalkItem = props[props.locale]
    const speaker: ISpeaker = {
        imageUrl: item.speaker_profile_img ?? DEFAULT_PROFILE_PATH,
        name: item.user_name,
        introduction: item.introduction
    }

    return (
        <>
            <PageTitle title={item.title} />
            <div>
                {t('label:category')}: {item.category}
            </div>
            <div>{t('label:difficulty')}: {item.difficulty}</div>
            <div>{t('label:duration')}: {item.duration}</div>
            <div>{t('label:language')}: {item.language}</div>
            <Description>{item.desc}</Description>
            <SpeakerContainer>
                <Speaker item={speaker} />
            </SpeakerContainer>
        </>
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
