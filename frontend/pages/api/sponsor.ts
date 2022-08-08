import axios from 'axios'
import { IContents } from '../../interfaces/IContents'
import { IApiContents } from '../../interfaces/api/IApiContents'
import { API_SERVER } from '../../data/constants/config';

type SponsorDataEndPointType = 'prospectus' | 'sporsor-benefit' | 'sponsor-join' | 'sponsor-faq' | 'terms-of-sponsor';

export const getSponsorData = async (endPoint: SponsorDataEndPointType): Promise<IContents> => {
    const response = await axios.get(
        `${API_SERVER}/content/${endPoint}`
    );
    const data: IApiContents = response.data;
    
    return {
        content: {
            ko: data.content,
            en: data.eng_content
        }
    }
}

