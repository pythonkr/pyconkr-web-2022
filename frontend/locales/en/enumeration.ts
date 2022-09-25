import { TalkDuration } from '../../data/enums/TalkDuration'
import { TalkLanguage } from '../../data/enums/TalkLanguage'

export default {
    TalkDuration: {
        [TalkDuration.S]: '15min',
        [TalkDuration.L]: '30min'
    },
    TalkLanguage: {
        [TalkLanguage.ko]: 'Korean',
        [TalkLanguage.en]: 'English'
    }
}
