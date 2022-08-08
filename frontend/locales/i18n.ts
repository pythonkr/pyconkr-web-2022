import i18n, { i18n as I18n } from 'i18next'
import { initReactI18next } from 'react-i18next'
import ko from './ko'
import en from './en'

interface Props {
    locale: string
}

const createI18n = ({ locale }: Props): I18n => {
    i18n.use(initReactI18next).init({
        resources: { ko, en },
        fallbackLng: 'ko',
        lng: locale,
        interpolation: {
            escapeValue: false
        }
    })
    return i18n
}

export default createI18n
