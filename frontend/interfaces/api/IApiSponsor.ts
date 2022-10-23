export interface IApiSponsorListItem {
    slug: string
    name: string
    level: number
    desc: string
    eng_desc: string | null
    url: string | null
    logo_image: string | null
    id: number
}

export interface IApiSponsorDetail {
    id: number
    slug: string
    name: string
    level: number
    desc: string
    manager_name: string
    manager_email: string
    business_registration_number: string | null
    business_registration_file: string | null
    url: string | null
    logo_image: string | null
    virtual_booth_content: string
    submitted: boolean
    accepted: boolean
    paid_at: string | null
    exported: boolean
    created_at: string
    updated_at: string
}

export interface IPatrons {
    name: string
    message: string
}
