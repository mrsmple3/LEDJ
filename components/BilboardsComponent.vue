<template>
  <div v-if="isMounted && !websiteStore.bilboards.pending" class="about_slider">
    <img src="/img/Main_page/LEDJ_logo_lider.svg" alt="" class="slider_logo" />
    <div class="slider_btns">
      <button class="prev_btn">
        <img src="/img/icons/arrow_left.svg" alt="" />
      </button>
      <button class="next_btn">
        <img src="/img/icons/arrow_right.svg" alt="" />
      </button>
    </div>
    <swiper
      :spaceBetween="30"
      :effect="'fade'"
      :loop="true"
      :navigation="navigation"
      :autoplay="{
        delay: 2000,
        disableOnInteraction: false,
      }"
      :modules="modules"
    >
      <swiper-slide
        v-for="slide in websiteStore.bilboards.data"
        :key="slide.id"
        class="images_slide"
      >
        <img :src="slide.preview" :alt="slide.slides" class="objective-cover" />
        <span
          v-if="slide.content.rendered"
          class="slider_title absolute bottom-[22px] right-[35px]"
          ><span>•</span>
          <span v-thtml="slide.content.rendered"></span>
        </span>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { EffectFade, Navigation, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const websiteStore = useWebsiteStore();
const navigation = {
  nextEl: ".next_btn",
  prevEl: ".prev_btn",
};
const modules = [Navigation, Autoplay, EffectFade];
let isMounted = ref(false);

onMounted(() => {
  isMounted.value = true;
});
</script>

<style lang="scss">
@import "~/assets/bilboards.scss";
</style>
