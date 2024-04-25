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
          class="relative w-full -z-[1] max-h-[264px] min-h-[200px] object-cover"
        />
        <div class="sevice_wrapper">
          <div class="service_content">
            <div class="labels flex items-center gap-[10px] flex-wrap">
              <NuxtLink to="/" class="route_label">{{
                locolizeStore.currentHeader.menu.main
              }}</NuxtLink>
              <NuxtLink to="/services" class="route_label">{{
                locolizeStore.currentHeader.menu.services
              }}</NuxtLink>
              <span class="route_label">{{ card_info.title.rendered }}</span>
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
                  <h5 class="title">
                    {{ locolizeStore.currentService.contactsUs.title }}
                  </h5>
                  <p class="sub">
                    {{ locolizeStore.currentService.contactsUs.sub }}
                  </p>
                  <button class="btn" @click="popup">
                    <div class="btn_content">
                      <span class="text-nowrap">{{
                        locolizeStore.currentService.contactsUs.btn
                      }}</span>
                      <img
                        src="~/public/img/icons/btn_arrow_right_white.svg"
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
                  <span class="span">{{
                    locolizeStore.currentService.add.span
                  }}</span>
                  <p class="title">
                    {{ locolizeStore.currentService.add.title }}
                  </p>
                </div>
              </div>
              <img
                src="~/public/img/service/bg_flower.svg"
                alt=""
                class="img"
              />
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
                  v-for="marker in websiteStore.map.data"
                  :options="{ preset: 'islands#redCircleIcon' }"
                >
                  <YandexMarker
                    :key="marker.id"
                    :coordinates="[marker.acf.latitude, marker.acf.longitude]"
                    :marker-id="marker.id"
                    ref="map_s"
                    @click="togglePopup($event, marker)"
                  >
                  </YandexMarker>
                </YandexCollection>
              </YandexMap>
            </ClientOnly>
            <div v-if="isPopup" class="custom-popup">
              <div class="flex flex-col items-start">
                <div class="w-full flex items-center justify-between mb-[14px]">
                  <h6>{{ mapsData.title }}</h6>
                  <img src="~/public/img/icons/greenMarker.png" alt="marker" />
                </div>
                <ul class="flex flex-col gap-[16px]">
                  <li>
                    <strong>{{
                      locolizeStore.currentService.maps.adress
                    }}</strong>
                    {{ mapsData.adress }}
                  </li>
                  <li>
                    <strong>{{
                      locolizeStore.currentService.maps.size
                    }}</strong>
                    {{ mapsData.size }}
                  </li>
                  <li>
                    <strong>{{
                      locolizeStore.currentService.maps.price
                    }}</strong>
                    {{ mapsData.price }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="consalting">
            <div class="consalting_content">
              <button class="white_span" @click="popup">
                <div class="flex flex-col items-start gap-5">
                  <h6 class="title">
                    {{ locolizeStore.currentService.free.title }}
                  </h6>
                  <span class="span">LEDJ MEDIA</span>
                </div>
                <img
                  src="~/public/img/service/arrow_right.svg"
                  alt="arrow_right"
                />
              </button>
              <div class="right_side flex flex-col items-end gap-[30px]">
                <img
                  src="~/public/img/service/logo.png"
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
                    src="~/public/img/service/logo.png"
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
                <span class="title">{{
                  locolizeStore.currentService.card.span
                }}</span>
                <p class="sub">
                  {{ locolizeStore.currentService.card.description }}
                </p>
              </div>
              <img src="~/public/img/service/card_bg.svg" alt="" />
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

definePageMeta({ pageTransition: false });

const websiteStore = useWebsiteStore();
const locolizeStore = useLocolizeStore();
const map_s = ref(null);
let isPopup = ref(false);
const controls = ["typeSelector"];
const route = useRoute();

const mapsData = reactive({
  id: null,
  title: "",
  adress: "",
  size: "",
  price: "",
});

let isMounted = ref(false);

const { data: card_info, pending } = await useLazyFetch(
  () =>
    `${websiteStore.http}/wp/v2/services/${route.query.ide}?lang=${websiteStore.locale.currentLanguage}`
);

onMounted(async () => {
  isMounted.value = true;
  websiteStore.setMounted(isMounted.value);
});

const togglePopup = (e, data) => {
  map_s.value.forEach((element) => {
    element.options.set("preset", "islands#redCircleIcon");
  });
  if (isPopup.value === false) {
    isPopup.value = true;
    e.get("target").options.set("preset", "islands#greenCircleIcon");
  } else if (mapsData.id !== data.id) {
    isPopup.value = true;
    e.get("target").options.set("preset", "islands#greenCircleIcon");
  } else {
    isPopup.value = false;
    e.get("target").options.set("preset", "islands#redCircleIcon");
  }
  mapsData.id = data.id;
  mapsData.title = data.title.rendered;
  mapsData.adress = data.acf.address;
  mapsData.size = data.acf.size;
  mapsData.price = data.acf.price;
  // Меняем цвет маркера при нажатии
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
.balloon {
  filter: hue-rotate(160deg);
}
</style>
