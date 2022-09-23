import axios from 'axios'
import { IContents } from '../../interfaces/IContents'
import { IApiContents } from '../../interfaces/api/IApiContents'
import { API_SERVER } from '../../data/constants/config'
import { IApiSponsorListItem } from '../../interfaces/api/IApiSponsor'
import { ISponsorList } from '../../interfaces/ISponsor'

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
