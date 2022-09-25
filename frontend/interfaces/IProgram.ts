import { IApiTalkItem } from './api/IApiPrograms'

export interface ITalkItem extends IApiTalkItem {}

export interface ICategoryListItem {
    name: string
    talkList: ITalkItem[]
}

export interface ITalkList {
    list: ITalkItem[]
}

export interface ISpeaker {
    imageUrl: string
    name: string
    introduction: string
}
