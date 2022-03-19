import React, { ReactNode } from 'react'
import NavBar from "../core/NavBar";

interface LayoutProps {
    children: ReactNode
}

const Layout = (props: LayoutProps) => {
    return (
        <>
            <NavBar />
            {props.children}
        </>
    )
}

export default Layout
