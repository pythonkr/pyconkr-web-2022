import { IApiTalkItem } from './api/IApiPrograms'

export interface ITalkItem extends IApiTalkItem {}

export interface ITalkList {
    list: ITalkItem[]
}
