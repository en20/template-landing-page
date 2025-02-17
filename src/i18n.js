import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

// Pega o idioma salvo ou usa 'pt' como padrão
const savedLanguage = localStorage.getItem('userLanguage') || 'pt';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng: savedLanguage, // Define o idioma inicial com base no localStorage
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/translations/{{lng}}/global.json',
    },
    react: {
      useSuspense: false // Isso evita problemas com o carregamento inicial
    }
  });

// Atualiza o localStorage quando o idioma mudar
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('userLanguage', lng);
});

export default i18n; 