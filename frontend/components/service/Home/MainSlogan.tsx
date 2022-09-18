import React from 'react'
import { useTranslation } from 'react-i18next'
import { Heading2, Paragraph } from '../../../assets/styles/typo'
import styled from 'styled-components'

const Content = styled(Paragraph)`
    margin-top: 1rem;
    white-space: pre-line;
`

const MainSlogan = () => {
    const { t } = useTranslation()

    return (
        <div>
            <Heading2 useGradient={true}>
                {t('label:about.slogan.title')}
            </Heading2>
            <Content>{t('label:about.slogan.desc')}</Content>
        </div>
    )
}

export default MainSlogan
