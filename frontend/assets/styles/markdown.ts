import styled from 'styled-components'
import { media } from './mixin'
import theme from './theme'

const MarkdownStyle = styled.div`
    h1,
    h2,
    h3,
    h4 {
        margin: 1.2rem 0 1rem;
    }
    h1 ~ h1 {
        margin: 4rem 0 1.2rem;
    }
    h2:first-of-type {
        margin-top: 2rem;
    }
    h2 ~ h2 {
        margin: 3rem 0 1.2rem;
    }
    ol,
    ul {
        margin-left: 2rem;
    }
    ul,
    li {
        padding: 0;
        line-height: 1.6;
    }
    ol li {
        list-style: decimal !important;
    }
    ul li {
        list-style: disc !important;
    }
    hr {
        margin: 1rem 0;
    }
    a {
        text-decoration: underline;
    }
    table {
        border-collapse: collapse;
        color: ${theme.colors.grey_33};
        text-align: center;
        overflow: auto;
        display: block;
        margin: 1.2rem 0;
        ${media.mobile(`
            margin-right: -1rem;
        `)}
    }
    th {
        padding: 0.3rem;
        font-weight: bold;
    }
    tr {
        border-bottom: solid 1px ${theme.colors.grey_d9};
        height: 3rem;
    }
    tbody > tr:nth-of-type(odd) {
        background-color: ${theme.colors.grey_f9};
    }
    tr > td:first-of-type {
        font-weight: bold;
    }
    td {
        padding: 0.6rem;
    }
    p {
        margin-top: 1rem;
    }
`

export default MarkdownStyle
