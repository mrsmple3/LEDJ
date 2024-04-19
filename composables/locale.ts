import { ref, computed, unref } from "vue";

const websiteStore = useWebsiteStore();

export const useLocaleText = (
  texts: Record<string, string>,
  locale = websiteStore.locale.currentLanguage
) => {
  return computed(() => {
    const localeText = texts[locale];
    return localeText || texts["ru"]; // Если текст на текущем языке не найден, используем русский текст
  });
};
