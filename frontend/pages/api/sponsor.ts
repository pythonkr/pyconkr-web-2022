import axios from 'axios'
import { ISponsorTerms } from '../../interfaces/ISponsor'
import { IApiSponsorTerms } from '../../interfaces/api/IApiSponsor'

export const getSponsorTerms = async (): Promise<ISponsorTerms> => {
    const response = await axios.get(
        `https://api.2022.pycon.kr/api/content/terms-of-sponsor`
    )
    const data: IApiSponsorTerms = response.data

    return {
        content: {
            ko: data.content,
            en: data.eng_content
        }
    }
}
