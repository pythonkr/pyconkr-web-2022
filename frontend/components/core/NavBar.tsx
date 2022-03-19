import React from 'react'
import Routes from '../../routes/routes'
import Link from "next/link";

const NavBar = () => {
    return (
        <nav>
            <ul>
            {Routes.map((route, index) => {
                return (
                    <Link
                        key={index}
                        href={route.path}
                    >
                        <li>{route.name}</li>
                    </Link>
                )
            })}
            </ul>
        </nav>
    )
}

export default NavBar
