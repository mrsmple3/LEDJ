<template>
  <div class="services_wrapper">
    <div class="servicec_content">
      <div class="labels flex items-center gap-[10px]">
        <NuxtLink to="/" class="route_label">Главная</NuxtLink>
        <NuxtLink to="/services" class="route_label">Услуги</NuxtLink>
      </div>
      <h2 class="services_wrapper_title">Предоставляемые услуги</h2>
      <div class="services_cards">
        <ServiceCards />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
@import "../assets/services.scss";
</style>
