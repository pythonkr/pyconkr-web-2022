import axios from 'axios'
import { IContents } from '../../interfaces/IContents'
import { IApiContents } from '../../interfaces/api/IApiContents'

export const getCfp = async (): Promise<IContents> => {
    const response = await axios.get(
        `https://api.2022.pycon.kr/api/content/cfp`
    )
    const data: IApiContents = response.data

    return {
        content: {
            ko: data.content,
            en: data.eng_content
        }
    }
}

export const getCfpGuide = async (): Promise<IContents> => {
    const response = await axios.get(
        `https://api.2022.pycon.kr/api/content/cfp-guide`
    )
    const data: IApiContents = response.data

    return {
        content: {
            ko: data.content,
            en: data.eng_content
        }
    }
}
