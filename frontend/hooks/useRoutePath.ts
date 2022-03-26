export const useRoutePath = (locale: string, path: string) => {
    return locale === 'ko' ? path : `/${locale}${path}`
}
