import React from 'react'
import { useTranslation } from 'react-i18next'
import { Heading2, Paragraph } from '../../../assets/styles/typo'
import styled from 'styled-components'

const Content = styled(Paragraph)`
    margin-top: 1rem;
    white-space: pre-line;
`

const MainTalkList = () => {
    const { t } = useTranslation()

    return (
        <div>
            <Heading2 useGradient={true}>{t('label:talk')}</Heading2>
            <Content>발표목록</Content>
        </div>
    )
}

export default MainTalkList
