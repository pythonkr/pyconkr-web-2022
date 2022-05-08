import styled from 'styled-components'
import { media } from './mixin'

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
    h2 ~ h2 {
        margin: 4rem 0 1.2rem;
    }
    ul,
    li {
        margin: 0.3rem 0.6rem;
        padding: 0;
        list-style: circle;
    }
    hr {
        margin: 1rem 0;
    }
    a {
        text-decoration: underline;
    }
    table {
        border-collapse: collapse;
        color: #333;
        text-align: center;
        overflow: auto;
        display: block;
        ${media.mobile(`
            margin-right: -1rem;
        `)}
    }
    th {
        padding: 0.3rem;
        font-weight: bold;
    }
    tr {
        border-bottom: solid 1px #dfe3e6;
        height: 3rem;
    }
    tbody > tr:nth-of-type(odd) {
        background-color: #f9f9f9;
    }
    tr > td:first-of-type {
        font-weight: bold;
    }
    td {
        padding: 0.6rem;
    }
`

export default MarkdownStyle
