import React from 'react'
import { useTranslation } from 'react-i18next'
import { Heading2 } from '../../../assets/styles/typo'
import styled from 'styled-components'
import Linkify from 'react-linkify'
import Resources from '../../../data/constants/resources'

const Content = styled.div`
    margin-top: 1rem;
    white-space: pre-line;
    a {
        color: ${(props) => props.theme.colors.blue0};
    }
`

const ProgramLink = styled.a`
    color: ${(props) => props.theme.colors.blue0};
`

const MainTalkList = () => {
    const { t } = useTranslation()

    return (
        <div>
            <Heading2 useGradient={true}>{t('label:eventDetail')}</Heading2>
            <Content>
                {t('label:aboutEvent')}
                {''} 발표 및 시간표는 {''}
                <ProgramLink href={`/program/talks`}>
                    프로그램 {'>'} 발표
                </ProgramLink>
                에서 확인하실 수 있습니다.
            </Content>
            <Content>
                <Linkify>
                    파이썬 사용 사례와 지식을 공유하는 다양한 발표 세션이
                    열립니다. 이외의 모든 공지사항은 {''}
                    <ProgramLink
                        href={Resources.pyconkrFacebook}
                        target="_blank"
                    >
                        공식 페이스북
                    </ProgramLink>
                    , {''}
                    <ProgramLink
                        href={Resources.pyconkrTwitter}
                        target="_blank"
                    >
                        트위터
                    </ProgramLink>
                    , 이곳을 통해 공지될 예정입니다.
                </Linkify>
            </Content>
        </div>
    )
}

export default MainTalkList
