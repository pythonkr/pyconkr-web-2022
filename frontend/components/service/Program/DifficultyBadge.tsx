import styled from 'styled-components'

const DifficultyBadge = styled.span<{ level: string }>`
    display: inline-block;
    vertical-align: top;
    padding: 0.3em 0.5em;
    font-size: 0.7rem;
    border-radius: 4px;
    line-height: 1;
    ${({ level }) => {
        if (level === '초급') {
            return `background-color: #139d2b;`
        } else if (level === '중급') {
            return `background-color: #ff7f00;`
        } else if (level === '고급') {
            return `background-color: #cf3535;`
        }
        return `display: none;`
    }}
`

export default DifficultyBadge
