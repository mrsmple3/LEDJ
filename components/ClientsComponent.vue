<template>
  <div v-if="isMounted && !websiteStore.clients.pending" class="trust">
    <div class="flex justify-between items-center mb-[53px] max-md:mb-[44px]">
      <h3 class="trust_title">
        {{ locolizeStore.currentMainPage.reviews.client.title }}
      </h3>
      <h2 class="title gap-[9px]">
        <span>04</span> {{ locolizeStore.currentMainPage.reviews.client.span }}
      </h2>
    </div>
    <div
      class="flex items-center justify-between gap-[80px] mb-[71px] max-md:mb-[30px]"
    >
      <p class="trust_sub">
        <span class="font-semibold text-[#FF2F22]">{{
          locolizeStore.currentMainPage.reviews.client.sub[0]
        }}</span>
        {{ locolizeStore.currentMainPage.reviews.client.sub[1] }}
      </p>
      <div class="trust_bg_block">
        <img src="~/public/img/Main_page/trust_bg.png" alt="" class="img" />
      </div>
    </div>
    <div class="client_slider_container relative">
      <button class="client_btn-prev">
        <img src="~/public/img/icons/arrow_left_nobg.svg" alt="" />
      </button>
      <button class="client_btn-next">
        <img src="~/public/img/icons/arrow_right_nobg.svg" alt="" />
      </button>
      <swiper
        :slidesPerView="mobileSize ? 'auto' : 6"
        :spaceBetween="36"
        :loop="true"
        :reverseDirection="true"
        :navigation="client_navigation"
        :modules="modules"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: true,
        }"
        class="trust_slider"
      >
        <swiper-slide
          v-for="c in websiteStore.clients.data"
          :key="c.id"
          class="slider"
        >
          <img :src="c.preview" alt="" class="objective-contain c_slider_img" />
        </swiper-slide>
        <swiper-slide
          v-for="c in websiteStore.clients.data"
          :key="c.id"
          class="slider"
        >
          <img :src="c.preview" alt="" class="objective-contain c_slider_img" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import { EffectFade, Navigation, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

let isMounted = ref(false);
const locolizeStore = useLocolizeStore();
const client_navigation = {
  nextEl: ".client_btn-next",
  prevEl: ".client_btn-prev",
};
const websiteStore = useWebsiteStore();
const modules = [Navigation, Autoplay, EffectFade];
let mobileSize = ref(false);
let allowTouchMove = ref(false);

const handleResize = () => {
  allowTouchMove.value = window.innerWidth < 768;
  mobileSize.value = window.innerWidth < 768;
};

onMounted(() => {
  if (process.client) {
    // Проверяем, что код выполняется на клиенте
    mobileSize.value = window.innerWidth < 768;
    allowTouchMove.value = window.innerWidth < 768;
    window.addEventListener("resize", handleResize);
  }
  isMounted.value = true;
});
</script>

<style lang="scss">
@import "/assets/clients.scss";
</style>
