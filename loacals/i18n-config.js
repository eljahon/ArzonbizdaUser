import { en } from './en'
import { ru } from './ru'
import { uz } from './uz'
export const vueI18n = {
  locales: ['en', 'ru', 'uz'],
  defaultLocale: 'en',
  vueI18n: {
    fallbackLocale: 'en',
    messages: {
      en,
      ru,
      uz,
    },
  },
}
