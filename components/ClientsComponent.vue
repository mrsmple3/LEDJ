<template>
  <div class="trust">
    <div class="flex justify-between items-center mb-[53px] max-md:mb-[44px]">
      <h3 class="trust_title">Нам доверяют</h3>
      <h2 class="title gap-[9px]"><span>04</span> Наши клиенты</h2>
    </div>
    <div
      class="flex items-center justify-between gap-[80px] mb-[71px] max-md:mb-[30px]"
    >
      <p class="trust_sub">
        <span class="font-semibold text-[#FF2F22]"
          >Обеспечиваем высочайший уровень</span
        >
        обслуживания и достижение оптимальных результатов для каждого нашего
        клиента.
      </p>
      <div class="trust_bg_block">
        <img src="/img/Main_page/trust_bg.png" alt="" class="img" />
      </div>
    </div>
    <div v-if="isMounted" class="client_slider_container relative">
      <button class="client_btn-prev">
        <img src="/img/icons/arrow_left_nobg.svg" alt="" />
      </button>
      <button class="client_btn-next">
        <img src="/img/icons/arrow_right_nobg.svg" alt="" />
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
          disableOnInteraction: false,
        }"
        class="trust_slider"
      >
        <swiper-slide v-for="c in clinets" :key="c.id" class="slider">
          <img :src="c.preview" alt="" class="objective-contain" />
        </swiper-slide>
        <swiper-slide v-for="c in clinets" :key="c.id" class="slider">
          <img :src="c.preview" alt="" class="objective-contain" />
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

const client_navigation = {
  nextEl: ".client_btn-next",
  prevEl: ".client_btn-prev",
};
const websiteStore = useWebsiteStore();
const clinets = websiteStore.clients.data;
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
