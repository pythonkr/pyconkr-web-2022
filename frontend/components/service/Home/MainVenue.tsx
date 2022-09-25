import React from 'react'
import { useTranslation } from 'react-i18next'
import { Heading2, Paragraph } from '../../../assets/styles/typo'
import styled from 'styled-components'

const Content = styled(Paragraph)`
    margin-top: 1rem;
    white-space: pre-line;
`

const MainVenue = () => {
    const { t } = useTranslation()

    return <div>오프라인 행사 장소 안내</div>
}

export default MainVenue
