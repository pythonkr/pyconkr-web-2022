import axios from 'axios'
import { IContents } from '../../interfaces/IContents'
import { IApiContents } from '../../interfaces/api/IApiContents'

export const getSponsorProspectus = async (): Promise<IContents> => {
    const response = await axios.get(
        `https://api.2022.pycon.kr/api/content/prospectus`
    )
    const data: IApiContents = response.data

    return {
        content: {
            ko: data.content,
            en: data.eng_content
        }
    }
}

export const getSponsorBenefit = async (): Promise<IContents> => {
    const response = await axios.get(
        `https://api.2022.pycon.kr/api/content/sporsor-benefit`
    )
    const data: IApiContents = response.data

    return {
        content: {
            ko: data.content,
            en: data.eng_content
        }
    }
}

export const getSponsorTerms = async (): Promise<IContents> => {
    const response = await axios.get(
        `https://api.2022.pycon.kr/api/content/terms-of-sponsor`
    )
    const data: IApiContents = response.data

    return {
        content: {
            ko: data.content,
            en: data.eng_content
        }
    }
}
