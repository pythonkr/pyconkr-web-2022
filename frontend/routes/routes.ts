import { PageName } from '../data/enums/PageName'

export interface RouteType {
    path: string
    name: string
    subMenu?: RouteType[]
}

export const routes: RouteType[] = [
    {
        path: '/about',
        name: PageName.About,
        subMenu: [
            {
                path: '/about/pyconkr',
                name: PageName.Pyconkr2022
            },
            {
                path: '/about/ticket',
                name: PageName.Ticket
            },
            {
                path: '/about/venue',
                name: PageName.Venue
            },
            {
                path: '/about/organizing-team',
                name: PageName.OrganizingTeam
            },
            {
                path: '/about/previous-pyconkr',
                name: PageName.PreviousPyconkr
            }
        ]
    },
    {
        path: '/program',
        name: PageName.Program,
        subMenu: [
            {
                path: '/program/keynote',
                name: PageName.Keynote
            },
            {
                path: '/program/talks',
                name: PageName.Talks
            },
            {
                path: '/program/talk-schedule',
                name: PageName.TalkSchedule
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
                path: '/sponsor/list',
                name: PageName.SponsorList
            },
            {
                path: '/sponsor/patrons',
                name: PageName.SponsorPatrons
            },
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
