import { PageName } from '../data/enums/PageName'

export interface RouteType {
    path: string
    name: string
}

export const routes: RouteType[] = [
    {
        path: '/',
        name: PageName.Home
    },
    {
        path: '/about',
        name: PageName.About
    },
    {
        path: '/contribute',
        name: PageName.Contribute
    },
    {
        path: '/support',
        name: PageName.Support
    },
    {
        path: '/coc',
        name: PageName.CoC
    }
]
