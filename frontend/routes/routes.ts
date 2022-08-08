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
        name: PageName.Contribute,
        subMenu: [
            {
                path: '/contribute/cfp',
                name: PageName.Cfp
            },
            {
                path: '/contribute/cfp/guide',
                name: PageName.CfpGuide
            }
        ]
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
                path: '/sponsor/join',
                name: PageName.SponsorJoin
            },
            {
                path: '/sponsor/benefit',
                name: PageName.SponsorBenefit
            },
            {
                path: '/sponsor/faq',
                name: PageName.SponsorFaq
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
