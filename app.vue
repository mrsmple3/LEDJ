<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const websiteStore = useWebsiteStore();
const { data: card_infos, pending: pendingCard } = await useFetch(
  `https://ledjmedia.icorp.uz/wp-json/wp/v2/services`
);
const { data: bilboards, pending: pendingBilboards } = await useFetch(
  `https://ledjmedia.icorp.uz/wp-json/wp/v2/slides`
);
const { data: clinets, pending: pendingClients } = await useFetch(
  `https://ledjmedia.icorp.uz/wp-json/wp/v2/clients`
);
const { data: comments, pending: pendingReviews } = await useFetch(
  `https://ledjmedia.icorp.uz/wp-json/wp/v2/custom-comments`
);
// Сохраняем данные в хранилище

websiteStore.setCardInfos(card_infos.value, pendingCard.value);
websiteStore.setBilboards(bilboards.value, pendingBilboards.value);
websiteStore.setClients(clinets.value, pendingClients.value);
websiteStore.setReviews(comments.value, pendingReviews.value);

useSeoMeta({
  title: "Ledj Media",
  ogTitle: "Ledj Media",
  description: "This is my amazing site, let me tell you all about it.",
  ogDescription: "This is my amazing site, let me tell you all about it.",
  ogImage: "https://example.com/image.png",
});
</script>

<style lang="scss">
@import "./assets/basic.scss";
</style>
