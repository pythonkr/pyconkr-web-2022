import React from 'react'
import { Heading2 } from '../../assets/styles/typo'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

const Title = styled(Heading2)`
    margin: 2rem 0;
`

interface PageTitleProps {
    title: string
}

const PageTitle = (props: PageTitleProps) => {
    const { t } = useTranslation()

    return <Title>{t(`pageTitle:${props.title}`)}</Title>
}

export default PageTitle
