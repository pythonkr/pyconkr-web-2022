import axios from 'axios'
import { API_SERVER } from '../../data/constants/config'
import { ITalkItem, ITalkList } from '../../interfaces/IProgram'
import { IApiTalkItem } from '../../interfaces/api/IApiPrograms'
import Resources from '../../data/constants/resources'

export const getTalkList = async (): Promise<ITalkList> => {
    const response = await axios.get(`${API_SERVER}/program/list`)
    const data: IApiTalkItem[] = response.data

    return {
        list: data
    }
}

export const getTalkById = async (id: string): Promise<ITalkItem> => {
    const response = await axios.get(`${API_SERVER}/program/list/${id}`)
    const data: IApiTalkItem = response.data

    return {
        ...data
    }
}

export const getKeynoteList = async (): Promise<ITalkList> => {
    const response = await axios.get(
        `${API_SERVER}/program/category/${Resources.KEYNOTE_CATEGORY}`
    )
    const data: IApiTalkItem[] = response.data

    return {
        list: data
    }
}
