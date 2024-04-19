<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const websiteStore = useWebsiteStore();

websiteStore.setAllData();

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
