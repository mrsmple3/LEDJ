import plugin from "vue-yandex-maps";

const settings = {
  apiKey: "8fa3ca51-8d11-48e6-939d-88b1ec66179e", // Индивидуальный ключ API
  lang: "ru_RU", // Используемый язык
  coordorder: "latlong", // Порядок задания географических координат
  debug: false, // Режим отладки
  version: "2.1", // Версия Я.Карт
};

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(plugin, settings);
});
