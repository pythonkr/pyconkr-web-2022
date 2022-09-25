import React from 'react'
import { Heading2 } from '../../assets/styles/typo'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

const Title = styled(Heading2)`
    margin: 2rem 0 3rem;
`

interface PageTitleProps {
    title: string
}

const PageTitle = (props: PageTitleProps) => {
    const { t, i18n } = useTranslation()
    const title = i18n.exists(`pageTitle:${props.title}`)
        ? t(`pageTitle:${props.title}`)
        : props.title

    return <Title>{title}</Title>
}

export default PageTitle
