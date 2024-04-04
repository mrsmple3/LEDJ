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
          <NuxtLink v-if="card_info" to="/service_item" class="route_label">{{
            card_info.title.rendered
          }}</NuxtLink>
        </div>
        <div class="flex items-end justify-between">
          <h3 v-if="card_info" class="service_title">
            {{ card_info.title.rendered }}
          </h3>
        </div>
        <ClientsComponent />
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const card_name = route.params.id + "/";
let card_info = [];
const { data: card_data } = await useFetch(
  `http://ledjmedia.icorp.uz/wp-json/wp/v2/services/`
);
const trimLink = (link) => {
  const baseUrl = "https://ledjmedia.icorp.uz/services/";
  if (link.startsWith(baseUrl)) {
    return link.substring(baseUrl.length);
  } else {
    return link;
  }
};

card_data.value.forEach((item) => {
  if (trimLink(item.link) === card_name) {
    card_info = item;
  }
});
</script>

<style lang="scss">
@import "~/assets/service_item.scss";
</style>
