import { IApiSponsorDetail, IApiSponsorListItem } from './api/IApiSponsor'

export interface ISponsorListItem extends IApiSponsorListItem {}

export interface ISponsorList {
    list: ISponsorListItem[]
}

export interface ISponsorLevelItem {
    value: number
    name: string
    list: ISponsorListItem[]
}

export interface ISponsorDetail extends IApiSponsorDetail {}
