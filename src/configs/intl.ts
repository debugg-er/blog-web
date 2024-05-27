import { Formats } from 'next-intl'

export const defaultLocale = 'en' as const
export const locales = ['en', 'vi'] as const
export const localePrefix = 'always'

export const formats: Partial<Formats> = {
    dateTime: {
        medium: {
            timeStyle: 'medium',
            dateStyle: 'medium',
        },
    },
}
