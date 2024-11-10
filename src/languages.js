import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './languages/en.json';
import translationPL from './languages/pl.json';

const resources = {
  ENG: {
    translation: translationEN,
  },
  PL: {
    translation: translationPL,
  },
};

const savedLanguage = localStorage.getItem('language');
const defaultLanguage = JSON.parse(savedLanguage);

i18n.use(initReactI18next).init({
  resources,
  lng: defaultLanguage,
  fallbackLng: 'ENG',
  debug: true,
  react: {
    useSuspense: false,
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
