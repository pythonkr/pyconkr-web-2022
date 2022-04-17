import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

interface NavLinkPropsType {
    to: string
    locale: string
    name: string
    currentPath: string
    basePath: string
}

const NavLink = ({ currentPath, to, name, basePath }: NavLinkPropsType) => {
    return <Link href={to} prefetch></Link>
}

export default NavLink
