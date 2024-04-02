<template>
  <header class="z-10">
    <div class="header max-md:py-[18px]">
      <NuxtLink to="/" class="logo flex items-center gap-[6.77px] w-max pl-6">
        <img src="/img/Header_LOGO.svg" alt="logo" class="logo_img" />
      </NuxtLink>
      <nav>
        <ul class="navbar" ref="menu_w_sub">
          <NuxtLink
            v-for="path in paths"
            :to="path.url"
            class="navbar_item"
            :class="{ menu_with_sub: isService(path.title) }"
            @mouseenter="toggleSubMenuActive(path.title, true, $event)"
            @mouseleave="toggleSubMenuActive(path.title, false, $event)"
          >
            {{ path.title }}
          </NuxtLink>
        </ul>
      </nav>
      <button class="submit_btn mr-2.5 max-md:!hidden">Оставить заявку</button>
      <button
        @click="menuHandler"
        class="w-[27px] h-[27px] relative mr-[19px] md:hidden"
      >
        <img
          src="/img/icons/burger_menu.svg"
          alt=""
          class="icon_open"
          :class="{ active: !isMenuActive, noactive: isMenuActive }"
        />
        <img
          src="/img/icons/Close_x.svg"
          alt=""
          class="icon_close"
          :class="{ active: isMenuActive, noactive: !isMenuActive }"
        />
      </button>
    </div>
    <div
      class="submenu_content max-md:hidden"
      :class="{ active: isSubMenuActive }"
      ref="submenu"
      @mouseenter="toggleSubMenuActive('Услуги', true, $event)"
      @mouseleave="toggleSubMenuActive('Услуги', false, $event)"
    >
      <div class="submenu_wrapper">
        <div class="flex flex-col items-start">
          <h3 class="title">
            Выберите услугу <span class="text-red-600 text-[40px]">•</span>
          </h3>
          <ul class="list">
            <li>Реклама на ТВ</li>
            <li>Реклама в метро</li>
            <li>Наружная реклама</li>
            <li>Indoor реклама</li>
            <li>SMM-продвижение</li>
            <li>SEO-продвижение</li>
            <li>Радио реклама</li>
            <li>Создание сайтов</li>
            <li>Рекламные видео-ролики</li>
            <li>Реклама ЖД</li>
            <li>Логотип + Брендбук</li>
            <li>Контекстная реклама</li>
            <li>Реклама в аэропорту Ташкента</li>
            <li>Реклама на транспорте</li>
          </ul>
        </div>
        <img src="/img/Main_page/submenu_img.png" alt="" class="-z-[1]" />
      </div>
    </div>
    <div class="burger_menu_container" :class="{ active: isMenuActive }">
      <div class="burger_menu_wrapper">
        <span class="menu_title">Меню</span>
        <ul class="navbar">
          <NuxtLink v-for="path in paths" :to="path.url" class="navbar_item">
            {{ path.title }}
          </NuxtLink>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
const { data: paths } = await useFetch(
  "http://ledjmedia.icorp.uz/wp-json/custom/menu/2"
);
let isMenuActive = ref(false);
let isSubMenuActive = ref(false);
let isLeaveSubmenu = ref(false);
let timer = ref(null);
const menu_w_sub = ref(null);
const submenu = ref(null);

onMounted(() => {
  menuHandler = () => {
    isMenuActive.value = !isMenuActive.value;
    if (isMenuActive.value) {
      document.body.style.overflow = "hidden"; // Устанавливаем overflow: hidden для body при активном меню
    } else {
      document.body.style.overflow = ""; // Удаляем стили overflow у body при неактивном меню
    }
  };
  toggleSubMenuActive = (title = "Услуги", isActive, event) => {
    if (title === "Услуги") {
      if (isActive) {
        isSubMenuActive.value = true;
        if (timer) clearTimeout(timer);
      } else {
        // Проверяем, если курсор находится на подменю или на кнопке меню
        if (
          !menu_w_sub.value.contains(event.relatedTarget) &&
          !submenu.value.contains(event.relatedTarget)
        ) {
          timer = setTimeout(() => {
            isSubMenuActive.value = false;
          }, 500);
        }
      }
    }
  };
});
const isService = (title) => {
  // Проверяет, является ли название "Услуги"
  return title === "Услуги";
};
let menuHandler = () => {
  // isMenuActive = !isMenuActive;
  // if (isMenuActive) {
  //   document.body.style.overflow = "hidden"; // Устанавливаем overflow: hidden для body при активном меню
  // } else {
  //   document.body.style.overflow = ""; // Удаляем стили overflow у body при неактивном меню
  // }
};
let toggleSubMenuActive = () => {
  // if (title === "Услуги") {
  //   console.log(!submenu.value.contains(event.relatedTarget));
  //   if (isActive) {
  //     isSubMenuActive = true;
  //     if (timer) clearTimeout(timer);
  //   } else {
  //     // Проверяем, если курсор находится на подменю или на кнопке меню
  //     if (
  //       !menu_w_sub.value.contains(event.relatedTarget) &&
  //       !submenu.value.contains(event.relatedTarget)
  //     ) {
  //       timer = setTimeout(() => {
  //         isSubMenuActive = false;
  //       }, 500);
  //     }
  //   }
  // }
};
</script>

<style lang="scss"></style>
