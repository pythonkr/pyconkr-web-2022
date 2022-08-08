import { ReactNode } from 'react'

export interface PageProps {
    pageName: string
    children: ReactNode
}

export interface SponsorPage extends PageProps {
    content: {
        ko: string
        en: string
    }
}
