import { TalkDuration } from '../../data/enums/TalkDuration'
import { TalkLanguage } from '../../data/enums/TalkLanguage'

export default {
    TalkDuration: {
        [TalkDuration.S]: '15분',
        [TalkDuration.L]: '30분'
    },
    TalkLanguage: {
        [TalkLanguage.ko]: '한국어',
        [TalkLanguage.en]: '영어'
    }
}
