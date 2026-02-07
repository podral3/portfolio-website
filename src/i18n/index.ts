import { createI18n } from 'vue-i18n'
import en from './en'
import pl from './pl'

const savedLang = localStorage.getItem('preferred-lang') || 'en'

const i18n = createI18n({
  legacy: false,
  locale: savedLang,
  fallbackLocale: 'en',
  messages: { en, pl },
})

export default i18n
