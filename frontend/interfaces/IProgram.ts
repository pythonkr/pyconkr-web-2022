import { IApiTalkItem } from './api/IApiPrograms'

export interface ITalkTableList {
    [key: string]: any
    talkList: ITalkItem[]
}

export interface ITalkItem extends IApiTalkItem {}

export interface ICategoryListItem {
    name: string
    talkList: ITalkItem[]
}

export interface ITalkList {
    list: ITalkItem[]
}

export interface IPerson {
    image?: string
    name: string
    introduction: string
}
