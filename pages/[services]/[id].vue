<template>
  <div>
    <PreloaderComponent
      v-if="websiteStore.preLoader || pending || !isMounted"
    />
    <div v-else>
      <div class="service_item">
        <img
          :src="card_info.featured_image_url"
          alt=""
          class="relative w-full -z-[1] max-h-[264px] min-h-[264px] object-cover"
        />
        <div class="sevice_wrapper">
          <div class="service_content">
            <div class="labels flex items-center gap-[10px] flex-wrap">
              <NuxtLink to="/" class="route_label">Главная</NuxtLink>
              <NuxtLink to="/services" class="route_label">Услуги</NuxtLink>
              <NuxtLink :to="$route.params.id" class="route_label">{{
                card_info.title.rendered
              }}</NuxtLink>
            </div>

            <div class="flex items-start justify-between gap-[30px]">
              <h3 class="service_title">
                {{ card_info.title.rendered }}
              </h3>
              <img
                :src="card_info.preview"
                :alt="card_info.title.title"
                class="max-md:hidden"
              />
            </div>
            <div
              class="second flex items-start justify-between gap-[20px] md:mb-[68px] max-md:flex-col max-md:gap-[45px]"
            >
              <p v-thtml="card_info.content.rendered" class="description"></p>
              <div class="popup">
                <div class="popup_block">
                  <h5 class="title">Связаться с нами</h5>
                  <p class="sub">
                    Оставьте заявку, зполнив форму, и мы свяжемся с вами в самое
                    ближайшее время
                  </p>
                  <button class="btn" @click="popup">
                    <div class="btn_content">
                      <span class="text-nowrap">Заказать услугу</span>
                      <img
                        src="/img/icons/btn_arrow_right_white.svg"
                        alt=">"
                        class="mr-[10px]"
                      />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="third">
            <div class="content">
              <div class="flex items-streach gap-6 py-[42px] max-md:pt-[22px]">
                <div class="h-[54px] w-[1px] bg-[#FF2F22] rounded-[2px]"></div>
                <div class="flex flex-col gap-[5px] items-start">
                  <span class="span">Ориентируемся на результат</span>
                  <p class="title">Выведем ваш бренд на новый уровень</p>
                </div>
              </div>
              <img src="/img/service/bg_flower.svg" alt="" class="img" />
            </div>
          </div>

          <div class="service_cards">
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
          <div class="maps w-full !mb-[46px] rounded-[30px] overflow-hidden">
            <ClientOnly fallback-tag="div">
              <YandexMap
                :coordinates="[41.31643, 69.248393]"
                :controls="controls"
                zoom="13"
                map-type="map"
              >
                <YandexCollection
                  :options="{ preset: 'islands#redCircleIcon' }"
                >
                  <YandexMarker
                    v-for="marker in websiteStore.map.data"
                    :key="marker.id"
                    :coordinates="[marker.acf.longitude, marker.acf.latitude]"
                    :marker-id="marker.id"
                    :properties="{ preset: markerColor }"
                    @click="togglePopup(marker)"
                  >
                  </YandexMarker>
                </YandexCollection>
              </YandexMap>
            </ClientOnly>
            <div v-if="isPopup" class="custom-popup">
              <div class="flex flex-col items-start">
                <div class="w-full flex items-center justify-between mb-[14px]">
                  <h6>{{ mapsData.title }}</h6>
                  <img src="/img/icons/big_note.svg" alt="marker" />
                </div>
                <ul class="flex flex-col gap-[16px]">
                  <li><strong>Адрес:</strong> {{ mapsData.adress }}</li>
                  <li><strong>Размер:</strong> {{ mapsData.size }}</li>
                  <li><strong>Стоимость:</strong> {{ mapsData.price }}</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="consalting">
            <div class="consalting_content">
              <button class="white_span" @click="popup">
                <div class="flex flex-col items-start gap-5">
                  <h6 class="title">Бесплатная консультация</h6>
                  <span class="span">LEDJ MEDIA</span>
                </div>
                <img src="/img/service/arrow_right.svg" alt="arrow_right" />
              </button>
              <div class="right_side flex flex-col items-end gap-[30px]">
                <img
                  src="/img/service/logo.png"
                  alt="logo"
                  class="max-md:hidden"
                />
                <div class="flex items-center gap-[7.5px] flex-wrap">
                  <NuxtLink to="/services" class="link_item"
                    >Все услуги</NuxtLink
                  >
                  <NuxtLink
                    :to="{ path: '/', hash: '#reviews' }"
                    class="link_item"
                    >Отзывы</NuxtLink
                  >
                  <NuxtLink
                    :to="{ path: '/', hash: '#contacts' }"
                    class="link_item"
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
                  Хорошая реклама формирует культуру общества, воспитывает
                  хороший вкус и вдохновляет людей
                </p>
              </div>
              <img src="/img/service/card_bg.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <FooterView />
    </div>
  </div>
</template>

<script setup>
import { YandexMap, YandexMarker, YandexCollection } from "vue-yandex-maps";
import maps from "~/plugins/maps";

definePageMeta({ pageTransition: false });

const websiteStore = useWebsiteStore();
const markerColor = ref("islands#redCircleIcon");
let isPopup = ref(false);
const coordinates = [41.307371, 69.305132];
const controls = ["fullscreenControl"];

const route = useRoute();
const mapsData = reactive({
  title: "",
  adress: "",
  size: "",
  price: "",
});
let isMounted = ref(false);

const card_name = route.query.ide;

const { data: card_info, pending } = await useLazyFetch(
  () =>
    `${websiteStore.http}/wp/v2/services/${card_name}?lang=${websiteStore.locale.currentLanguage}`
);

onMounted(async () => {
  isMounted.value = true;
  websiteStore.setMounted(isMounted.value);
});

const togglePopup = (data) => {
  mapsData.title = data.title.rendered;
  mapsData.adress = data.acf.address;
  mapsData.size = data.acf.size;
  mapsData.price = data.acf.price;
  if (mapsData.title !== "") {
    isPopup.value = !isPopup.value;
  }
  // Меняем цвет маркера при нажатии
  markerColor.value = isPopup.value
    ? "islands#blueCircleIcon"
    : "islands#redCircleIcon";
};
const popup = () => {
  websiteStore.popup.active = true;
  websiteStore.popup.title = card_info.value.title.rendered;
};
</script>

<style lang="scss">
@import "~/assets/service_item.scss";
.yandex-container {
  height: 500px;
  border-radius: 30px;
}
</style>
