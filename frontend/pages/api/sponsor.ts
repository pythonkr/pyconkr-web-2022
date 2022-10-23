import axios from 'axios'
import { IContents } from '../../interfaces/IContents'
import { IApiContents } from '../../interfaces/api/IApiContents'
import { API_SERVER } from '../../data/constants/config'
import {
    IApiSponsorDetail,
    IApiSponsorListItem,
    IPatrons
} from '../../interfaces/api/IApiSponsor'
import { ISponsorDetail, ISponsorList } from '../../interfaces/ISponsor'

type SponsorDataEndPointType =
    | 'prospectus'
    | 'sporsor-benefit'
    | 'sponsor-join'
    | 'sponsor-faq'
    | 'terms-of-sponsor'

export const getSponsorList = async (): Promise<ISponsorList> => {
    const response = await axios.get(`${API_SERVER}/sponsor`)
    const data: IApiSponsorListItem[] = response.data

    return {
        list: data
    }
}

export const getSponsorDetail = async (id: string): Promise<ISponsorDetail> => {
    const response = await axios.get(`${API_SERVER}/sponsor/${id}`)
    const data: IApiSponsorDetail = response.data

    return {
        ...data
    }
}

export const getSponsorContentData = async (
    endPoint: SponsorDataEndPointType
): Promise<IContents> => {
    const response = await axios.get(`${API_SERVER}/content/${endPoint}`)
    const data: IApiContents = response.data

    return {
        content: {
            ko: data.content || '',
            en: data.eng_content || ''
        }
    }
}

export const getPatronData = async (): Promise<IPatrons[]> => {
    const response = await axios.get(`${API_SERVER}/sponsor/personal`)
    return response.data
}
