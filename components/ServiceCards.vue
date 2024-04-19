<template>
  <NuxtLink
    v-for="(card, index) in websiteStore.cardInfos.data"
    :key="card.id"
    :to="{ path: `/services/${trimLink(card.link)}`, query: { ide: card.id } }"
    class="card"
    :class="{ '!hidden': isMainPage && index > 8 }"
    @click.prevent="pushPage(card.id)"
  >
    <div class="w-full flex items-center justify-between gap-[10px] mb-[36px]">
      <div class="flex flex-col items-start gap-[3px]">
        <span class="card_span">Услуга</span>
        <h4 class="card_title">{{ card.title.rendered }}</h4>
      </div>
      <img :src="card.preview" :alt="index" class="card_img" />
    </div>
    <div class="w-full flex items-center justify-between gap-[5px]">
      <p v-thtml="card.excerpt.rendered" class="card_sub"></p>
      <a href="" class="card_btn">
        <svg
          width="24"
          height="12"
          viewBox="0 0 24 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class=""
        >
          <path
            d="M23.542 4.892L18.825 0.175003L18.118 0.882003L22.736 5.5H0V6.5H22.734L18.117 11.117L18.824 11.824L23.542 7.106C24.152 6.496 24.152 5.502 23.542 4.892Z"
            fill="red"
          />
        </svg>
      </a>
    </div>
  </NuxtLink>
</template>

<script setup>
const router = useRouter();
const props = defineProps({
  isMainPage: {
    type: Boolean,
    required: true,
    default: true,
  },
});
const websiteStore = useWebsiteStore();
function trimLink(link) {
  const baseUrl = "https://ledjmedia.uz/services/";
  if (link.startsWith(baseUrl)) {
    return link.substring(baseUrl.length);
  } else {
    // Если ссылка не начинается с базового URL, возвращаем исходную ссылку
    return link;
  }
}
</script>

<style lang="scss">
@import "../assets/service_cards.scss";
</style>
