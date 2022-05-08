import { PageName } from '../data/enums/PageName'

export interface RouteType {
    path: string
    name: string
    subMenu?: RouteType[]
}

export const routes: RouteType[] = [
    {
        path: '/',
        name: PageName.Home
    },
    {
        path: '/about',
        name: PageName.About,
        subMenu: [
            {
                path: '/about/pyconkr',
                name: PageName.Pyconkr2022
            },
            {
                path: '/about/previous-pyconkr',
                name: PageName.PreviousPyconkr
            }
        ]
    },
    {
        path: '/contribute',
        name: PageName.Contribute
    },
    {
        path: '/sponsor',
        name: PageName.Sponsor,
        subMenu: [
            {
                path: '/sponsor/prospectus',
                name: PageName.SponsorProspectus
            },
            {
                path: '/sponsor/benefit',
                name: PageName.SponsorBenefit
            },
            {
                path: '/sponsor/terms-of-sponsor',
                name: PageName.SponsorTerms
            }
        ]
    },
    {
        path: '/coc',
        name: PageName.CoC
    }
]
