import { PageName } from '../data/enums/PageName'

interface RouteType {
    path: string
    name: string
}

const routes: RouteType[] = [
    {
        path: '/',
        name: PageName.Home,
    },
    {
        path: '/about',
        name: PageName.About,
    },
    {
        path: '/contribute',
        name: PageName.Contribute,
    },
    {
        path: '/support',
        name: PageName.Support,
    },
    {
        path: '/coc',
        name: PageName.Coc,
    }
]

export default routes
