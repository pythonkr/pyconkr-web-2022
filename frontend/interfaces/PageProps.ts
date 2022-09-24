import { ReactNode } from 'react'

export interface PageProps {
    pageName: string
    children: ReactNode
}

export interface ContentPage extends PageProps {
    content: {
        ko: string
        en: string
    }
}

export interface LocalePage<T> extends PageProps {
    title?: string
    ko: T
    en: T
}
