import axios from 'axios'
import { IContents } from '../../interfaces/IContents'
import { IApiContents } from '../../interfaces/api/IApiContents'
import { API_SERVER } from '../../data/constants/config';

type GetSponsorDataProps = 'prospectus' | 'sporsor-benefit' | 'sponsor-join' | 'sponsor-faq' | 'terms-of-sponsor';

export const getSponsorData = async (endPoint: GetSponsorDataProps): Promise<IContents> => {
    try {
        const response = await axios.get(
            `${API_SERVER}/content/${endPoint}`
        )
        const data: IApiContents = response.data
    
        return {
            content: {
                ko: data.content,
                en: data.eng_content
            }
        }
    } catch (error) {
        window?.alert('일시적인 오류가 발생하였습니다. 잠시 후 다시 시도해 주세요.')
    }
    
}

