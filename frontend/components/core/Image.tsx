import React from 'react'
import styled from 'styled-components'

const ImageBox = styled.img`
    display: inline-block;
    width: 100%;
    height: 100%;
    vertical-align: top;
`

interface ImageProps {
    src: string
    alt: string
}

const Image = (props: ImageProps) => {
    return <ImageBox src={props.src} alt={props.alt} />
}

export default Image
