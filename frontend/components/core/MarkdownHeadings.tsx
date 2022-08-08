import React from 'react'

const flatten = (text: string, child) => {
    return typeof child === 'string'
        ? text + child
        : React.Children.toArray(child.props.children).reduce(flatten, text)
}

const HeadingRenderer = (props) => {
    const children = React.Children.toArray(props.children)
    const text = children.reduce(flatten, '')
    const slug = text.toLowerCase().replace(/\s/g, '-')
    return React.createElement('h' + props.level, { id: slug }, props.children)
}

const HeadingComponents = {
    h1: HeadingRenderer,
    h2: HeadingRenderer,
    h3: HeadingRenderer,
    h4: HeadingRenderer,
    h5: HeadingRenderer,
    h6: HeadingRenderer
}

export default HeadingComponents
