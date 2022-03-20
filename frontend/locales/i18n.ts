import i18n, { i18n as I18n } from 'i18next'
import { initReactI18next } from 'react-i18next'
import ko from './ko'

type Props = {
    locale: string
}

const createI18n = ({ locale }: Props): I18n => {
    i18n.use(initReactI18next).init({
        resources: { ko },
        lng: locale,
        fallbackLng: 'ko',
        interpolation: {
            escapeValue: false,
        },
    })
    return i18n
}

export default createI18n
