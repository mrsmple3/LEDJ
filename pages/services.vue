<template>
  <div>
    <PreloaderComponent
      v-if="websiteStore.preLoader || websiteStore.cardInfos.pending"
    />
    <div v-else>
      <div class="services_wrapper">
        <div class="servicec_content">
          <div class="labels flex items-center gap-[10px]">
            <NuxtLink to="/" class="route_label">{{
              locolizeStore.currentHeader.menu.main
            }}</NuxtLink>
            <NuxtLink to="/services" class="route_label">{{
              locolizeStore.currentHeader.menu.services
            }}</NuxtLink>
          </div>
          <h2 class="services_wrapper_title">
            {{ locolizeStore.currentService.suggestions }}
          </h2>
          <div class="services_cards">
            <ServiceCards :is-main-page="false" />
          </div>
        </div>
      </div>
      <FooterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useWebsiteStore } from "#imports";
const websiteStore = useWebsiteStore();
const locolizeStore = useLocolizeStore();
let isMounted = ref(false);
onMounted(() => {
  isMounted.value = true;
  websiteStore.setMounted(isMounted.value);
});
</script>

<style lang="scss">
@import "../assets/services.scss";
</style>
