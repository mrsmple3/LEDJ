// Импортируем необходимые функции из Pinia
import { defineStore } from "pinia";

// Определяем хранилище
export const useWebsiteStore = defineStore("websiteStore", {
  // Описываем состояние хранилища
  state: () => ({
    http: "https://ledjmedia.uz/api.php/wp-json",
    cardInfos: {
      data: null,
      pending: true,
    },
    bilboards: {
      data: null,
      pending: true,
    },
    clients: {
      data: null,
      pending: true,
    },
    reviews: {
      data: null,
      pending: true,
    },
    footer: {
      data: null,
      pending: true,
    },
    popup: {
      active: false,
      title: "",
    },
    locale: {
      languages: null,
      currentLanguage: "ru",
    },
    contentWidht: null,
    isMounted: false,
    preLoader: true,
    currentServiceId: "",
    isPosted: false,
    map: {
      data: null,
      pending: true,
    },
  }),
  getters: {},
  // Описываем действия (actions), которые могут изменять состояние
  actions: {
    // Действие для установки cardInfos
    async setCardInfos() {
      const { data: card_infos, pending: pendingCard } = await useFetch<any>(
        `${this.http}/wp/v2/services?lang=${this.locale.currentLanguage}`
      );
      this.cardInfos.data = card_infos.value;
      this.cardInfos.pending = pendingCard.value as any;
    },
    setMounted(data: boolean) {
      this.isMounted = data;
    },
    async setBilboards() {
      const { data: bilboards, pending: pendingBilboards } =
        await useFetch<any>(
          `${this.http}/wp/v2/slides?lang=${this.locale.currentLanguage}`
        );
      this.bilboards.data = bilboards.value;
      this.bilboards.pending = pendingBilboards.value as any;
    },
    async setClients() {
      const { data: clinets, pending: pendingClients } = await useFetch<any>(
        `${this.http}/wp/v2/clients?lang=${this.locale.currentLanguage}`
      );
      this.clients.data = clinets.value;
      this.clients.pending = pendingClients.value as any;
    },
    async setReviews() {
      const { data: comments, pending: pendingReviews } = await useFetch<any>(
        `${this.http}/wp/v2/custom-comments?lang=${this.locale.currentLanguage}`
      );
      this.reviews.data = comments.value;
      this.reviews.pending = pendingReviews.value as any;
    },
    async setFooterInfo() {
      const { data: info, pending: pendingFooter } = await useFetch<any>(
        `${this.http}/options/all`
      );
      this.footer.data = info.value;
      this.footer.pending = pendingFooter as any;
    },
    setPopup(active: boolean, title: string = "") {
      this.popup.active = active;
      this.popup.title = title;
      if (active) {
        document.body.classList.add("overflow-hidden");
        document.body.style.paddingRight = this.contentWidht + "px";
      } else {
        setTimeout(() => {
          document.body.classList.remove("overflow-hidden");
          document.body.style.paddingRight = "0px";
        }, 300);
      }
    },
    async setLocale(currentLanguage: string = "ru") {
      const { data: languages } = await useFetch<any>(
        `${this.http}/pll/v1/languages`
      );
      this.locale.languages = languages.value;
      this.locale.currentLanguage = currentLanguage;
    },
    setContentWidth(wContent: any) {
      this.contentWidht = wContent;
    },
    setPosted(data: boolean) {
      this.isPosted = data;
      setTimeout(() => {
        this.isPosted = !data;
      }, 3000);
    },
    async setMap() {
      const { data: maps_data, pending: pending } = await useFetch<any>(
        `${this.http}/wp/v2/outdoor_adv?lang=${this.locale.currentLanguage}`
      );
      this.map.data = maps_data.value;
      this.map.pending = pending.value as any;
    },
    async setAllData() {
      this.setLocale();
      this.setCardInfos();
      this.setBilboards();
      this.setClients();
      this.setReviews();
      this.setFooterInfo();
      this.setMap();
    },
  },
});
