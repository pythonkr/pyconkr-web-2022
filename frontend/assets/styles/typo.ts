import styled from 'styled-components'
import theme from './theme'

const Heading1 = styled.h1`
    font-size: 2.4rem;
    line-height: 1.3;
`

const Heading2 = styled.h2`
    font-size: 1.9rem;
    line-height: 1.3;
`

const Heading3 = styled.h3`
    font-size: 1.5rem;
    line-height: 1.3;
`

const Heading4 = styled.h4`
    font-size: 1.25rem;
    line-height: 1.3;
`

const Paragraph = styled.p`
    font-size: 1rem;
`

const Caption = styled.div`
    font-size: 0.8rem;
`

const ColorLink = styled.a`
    color: ${theme.colors.primary2};
`

export { Heading1, Heading2, Heading3, Heading4, Paragraph, Caption, ColorLink }
