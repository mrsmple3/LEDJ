// Импортируем необходимые функции из Pinia
import { defineStore } from "pinia";

// Определяем хранилище
export const useWebsiteStore = defineStore("websiteStore", {
  // Описываем состояние хранилища
  state: () => ({
    http: "https://ledjmedia.icorp.uz/wp-json/wp/v2/",
    cardInfos: {
      data: null,
      pending: true,
    },

    cardItem: {
      data: null,
    },
    menu: {
      menu: null,
      sub: null,
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
    popup: {
      active: false,
      title: "",
    },
  }),
  // Описываем действия (actions), которые могут изменять состояние
  actions: {
    // Действие для установки cardInfos
    setCardInfos(cardInfos: any, pending: boolean) {
      this.cardInfos.data = cardInfos;
      this.cardInfos.pending = pending;
    },
    setCardItem(data: any, id: string) {
      this.cardItem.data = data.filter((item: any) => item.id === id);
    },
    setMenu(menu: any) {
      this.menu.menu = menu.filter(
        (item: any) => item.type_label === "Страница"
      );
      this.menu.sub = menu.filter(
        (item: any) => item.menu_item_parent === "11"
      );
    },
    setBilboards(data: any, pending: boolean) {
      this.bilboards.data = data;
      this.bilboards.pending = pending;
    },
    setClients(data: any, pending: boolean) {
      this.clients.data = data;
      this.clients.pending = pending;
    },
    setReviews(data: any, pending: boolean) {
      this.reviews.data = data;
      this.reviews.pending = pending;
    },
    setPopup(active: boolean, title: string = "") {
      this.popup.active = active;
      this.popup.title = title;
    },
  },
});
