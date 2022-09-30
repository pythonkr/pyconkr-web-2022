import React, { useState } from 'react'
import styled from 'styled-components'

const ButtonGroup = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid ${(props) => props.theme.colors.white};
`
const Button = styled.button<{ selected: boolean }>`
    border-radius: 4px;
    font-size: 1rem;
    padding: 1rem 2rem;
    background: inherit;
    cursor: pointer;
    border: 0;
    cursor: pointer;
    color: ${(props) => props.theme.colors.white};
    text-decoration: ${(props) => (props.selected ? 'underline' : 'none')};
`

interface ToggleProps {
    handleClick: (day: string) => void
}

const TalkTableToggleButton: React.FC<ToggleProps> = ({ handleClick }) => {
    const [checked, setChecked] = useState<string>('day1')

    const handleToggle = (day: string): void => {
        setChecked(day)
        handleClick(day)
    }

    return (
        <ButtonGroup>
            <Button
                selected={checked === 'day1'}
                onClick={() => handleToggle('day1')}
            >
                10/1 (토)
            </Button>
            <Button
                selected={checked === 'day2'}
                onClick={() => handleToggle('day2')}
            >
                10/2 (일)
            </Button>
        </ButtonGroup>
    )
}

export default TalkTableToggleButton
