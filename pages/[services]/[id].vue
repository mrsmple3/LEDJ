<template>
  <div class="service_item">
    <img
      src="/img/service/top_bg_img.png"
      alt=""
      class="relative w-full -z-[1]"
    />
    <div class="sevice_wrapper">
      <div class="service_content">
        <div class="labels flex items-center gap-[10px]">
          <NuxtLink to="/" class="route_label">Главная</NuxtLink>
          <NuxtLink to="/services" class="route_label">Услуги</NuxtLink>
          <NuxtLink
            v-if="!pending && card_info"
            :to="$route.params.id"
            class="route_label"
            >{{ card_info.title.rendered }}</NuxtLink
          >
        </div>
        <p v-if="pending">Loading ...</p>
        <div
          v-else
          class="flex items-start justify-between gap-[30px] mb-[40px]"
        >
          <h3 v-if="card_info" class="service_title">
            {{ card_info.title.rendered }}
          </h3>
          <img
            v-if="card_info"
            :src="card_info.preview"
            :alt="card_info.title.title"
            class="max-md:hidden"
          />
        </div>
        <p v-if="pending">Loading ...</p>
        <div
          v-else
          class="second flex items-end justify-between gap-[20px] mb-[68px] max-md:flex-col"
        >
          <p
            v-if="card_info.content.rendered"
            v-thtml="card_info.content.rendered"
            class="description"
          ></p>
          <div class="popup">
            <div class="popup_block">
              <h5 class="title">Связаться с нами</h5>
              <p class="sub">
                Оставьте заявку, зполнив форму, и мы свяжемся с вами в самое
                ближайшее время
              </p>
              <button class="btn" @click="popup">
                <div class="btn_content">
                  <span>Заказать услугу</span>
                  <img src="/img/icons/btn_arrow_right_white.svg" alt=">" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="third">
        <div class="content">
          <div class="flex items-streach gap-6 py-[42px]">
            <div class="h-[54px] w-[1px] bg-[#FF2F22] rounded-[2px]"></div>
            <div class="flex flex-col gap-[5px] items-start">
              <span class="span">Ориентируемся на результат</span>
              <p class="title">Выведем ваш бренд на новый уровень</p>
            </div>
          </div>
          <img src="/img/service/bg_flower.svg" alt="" class="img" />
        </div>
      </div>
      <p v-if="pending">Loading ...</p>
      <div v-else v-if="card_info.acf.cards_group.cards" class="service_cards">
        <div
          v-for="card in card_info.acf.cards_group.cards"
          class="service_card"
        >
          <div class="card_content">
            <h6 class="title">{{ card.title }}</h6>
            <p class="sub">
              {{ card.text }}
            </p>
          </div>
        </div>
      </div>
      <div class="consalting">
        <div class="consalting_content">
          <button class="white_span">
            <div class="flex flex-col items-start gap-5">
              <h6 class="title">Бесплатная консультация</h6>
              <span class="span">LEDJ MEDIA</span>
            </div>
            <img src="/img/service/arrow_right.svg" alt="arrow_right" />
          </button>
          <div class="right_side flex flex-col items-end gap-[30px]">
            <img src="/img/service/logo.png" alt="logo" class="max-md:hidden" />
            <div class="flex items-center gap-[7.5px] flex-wrap">
              <NuxtLink to="/services" class="link_item">Все услуги</NuxtLink>
              <NuxtLink :to="{ path: '/', hash: '#reviews' }" class="link_item"
                >Отзывы</NuxtLink
              >
              <NuxtLink :to="{ path: '/', hash: '#contacts' }" class="link_item"
                >Контакты</NuxtLink
              >
              <img
                src="/img/service/logo.png"
                alt="logo"
                class="max-md:max-w-[113px] md:hidden"
              />
            </div>
          </div>
        </div>
      </div>
      <ClientsComponent class="mb-[88px]" />
      <div
        class="bilboards flex items-streach justify-between flex-wrap gap-[27px]"
      >
        <BilboardsComponent />
        <div class="advertisement">
          <div class="content flex flex-col items-start gap-[10px]">
            <span class="title">Рекламное продвижение</span>
            <p class="sub">
              Хорошая реклама формирует культуру общества, воспитывает хороший
              вкус и вдохновляет людей
            </p>
          </div>
          <img src="/img/service/card_bg.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const card_name = route.params.id;
// let card_info = null;
const { data: card_info, pending } = await useLazyFetch(
  () => `http://ledjmedia.icorp.uz/wp-json/wp/v2/services/${card_name}`
);

const websiteStore = useWebsiteStore();

const popup = () => {
  websiteStore.popup.active = true;
  websiteStore.popup.title = card_info.value.title.rendered;
};
</script>

<style lang="scss">
@import "~/assets/service_item.scss";
</style>
