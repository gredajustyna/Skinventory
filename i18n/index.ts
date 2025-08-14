import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as Localization from 'expo-localization';
import translationEn from './locales/en-US/translation.json';

const resources = {
  'en-US': {translation: translationEn},
};

const initI18n = async () => {
  const savedLanguage = Localization.getLocales()[0]?.languageTag || 'en-US';

  i18n.use(initReactI18next).init({
    compatibilityJSON: 'v4',
    resources,
    lng: savedLanguage,
    fallbackLng: 'en-US',
    interpolation: {
      escapeValue: false,
    },
  });
};

initI18n();

export default i18n;
