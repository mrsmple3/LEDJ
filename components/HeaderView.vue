<template>
  <header class="z-10">
    <div class="header">
      <NuxtLink to="/" class="logo flex items-center gap-[6.77px] w-max pl-6">
        <img src="/img/Header_LOGO.png" alt="logo" class="logo_img" />
        <img src="/img/Header_LOGO_Title.png" alt="LEDJ" class="logo_title" />
      </NuxtLink>
      <nav>
        <ul class="navbar">
          <NuxtLink v-for="paht in pahts" :to="paht.url" class="navbar_item">
            {{ paht.title }}
          </NuxtLink>
        </ul>
      </nav>
      <button class="submit_btn mr-2.5">Оставить заявку</button>
    </div>
  </header>
</template>

<script>
export default {
  name: "header",
  data() {
    return {
      pahts: [],
    };
  },
  mounted() {
    fetch("http://ledjmedia.icorp.uz/wp-json/custom/menu/2")
      .then((response) => response.json())
      .then((data) => {
        this.pahts = data; 
        // Дальнейшая обработка данных
      })
      .catch((error) => {
        console.error("Ошибка при получении данных:", error);
      });
  },
};
</script>

<style lang="scss"></style>
