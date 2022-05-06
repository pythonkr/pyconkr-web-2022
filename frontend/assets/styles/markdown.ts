import styled from 'styled-components'

const MarkdownStyle = styled.div`
    h1 {
        margin: 1.2rem 0 0.9rem;
    }
    h1 ~ h1 {
        margin: 4rem 0 1.2rem;
    }
    h2 {
        margin: 1.2rem 0 1rem;
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
`

export default MarkdownStyle
