import { ref, computed, unref } from "vue";

export const useLocaleText = (texts: Record<string, string>, locale = "") => {
  return computed(() => {
    const localeText = texts[locale];
    return localeText || texts["ru"]; // Если текст на текущем языке не найден, используем русский текст
  });
};
