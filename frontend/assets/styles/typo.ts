import styled from 'styled-components'
import theme from './theme'
import { media } from './mixin'

const Heading1 = styled.h1`
    font-size: 2.4rem;
    line-height: 1.3;
`

const Heading2 = styled.h2`
    font-size: 1.9rem;
    line-height: 1.3;
    margin: 1.4rem 0 2rem;
    ${(props) => {
        if (props.useGradient) {
            return `background: ${props.theme.gradient_violet};
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;`
        }
    }}
`

const Heading3 = styled.h3`
    font-size: 1.6rem;
    line-height: 1.3;
    margin: 1.4rem 0 2rem;
    ${media.mobile(`
        margin: 1rem 0;
    `)}
    ${(props) => {
        if (props.useGradient) {
            return `background: ${props.theme.gradient_violet};
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;`
        }
    }}
`

const Heading4 = styled.h4`
    font-size: 1.1rem;
    line-height: 1.4;
`

const Paragraph = styled.p`
    font-size: 1rem;
`

const Caption = styled.div`
    font-size: 0.8rem;
`

const ColorLink = styled.a`
    color: ${theme.colors.blue0};
`

export { Heading1, Heading2, Heading3, Heading4, Paragraph, Caption, ColorLink }
