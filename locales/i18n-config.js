import { en } from './en'
import { ru } from './ru'
import { uz } from './uz'

export const vueI18n = {
  locales: ['en', 'ru', 'uz'],

  defaultLocale: 'ru',

  vueI18n: {
    fallbackLocale: 'ru',
    messages: {
      en,
      ru,
      uz,
    },
  },
}
