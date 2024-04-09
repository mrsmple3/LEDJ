<template>
  <header class="z-10">
    <div class="header">
      <NuxtLink to="/" class="logo flex items-center gap-[6.77px] w-max pl-6">
        <img src="/img/Header_LOGO.svg" alt="logo" class="logo_img" />
      </NuxtLink>
      <nav>
        <ul class="navbar" ref="menu_w_sub">
          <NuxtLink :to="{ path: '/', hash: '#main' }" class="navbar_item">
            Главная
          </NuxtLink>
          <NuxtLink
            to="/services"
            class="navbar_item menu_with_sub"
            @mouseenter="toggleSubMenuActive(true, $event)"
            @mouseleave="toggleSubMenuActive(false, $event)"
          >
            Услуги
          </NuxtLink>
          <NuxtLink :to="{ path: '/', hash: '#about' }" class="navbar_item">
            Об агенстве
          </NuxtLink>
          <NuxtLink :to="{ path: '/', hash: '#benefits' }" class="navbar_item">
            Преимущества
          </NuxtLink>
          <NuxtLink :to="{ path: '/', hash: '#partners' }" class="navbar_item">
            Партнеры
          </NuxtLink>
          <NuxtLink :to="{ path: '/', hash: '#reviews' }" class="navbar_item">
            Отзывы
          </NuxtLink>
          <NuxtLink :to="{ path: '/', hash: '#contacts' }" class="navbar_item">
            Контакты
          </NuxtLink>
        </ul>
      </nav>
      <button @click="popup" class="submit_btn mr-2.5">Оставить заявку</button>
      <button
        @click="menuHandler"
        class="menu_btn w-[27px] h-[27px] relative mr-[19px]"
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
      @mouseenter="toggleSubMenuActive(true, $event)"
      @mouseleave="toggleSubMenuActive(false, $event)"
    >
      <div class="submenu_wrapper">
        <div class="flex flex-col items-start">
          <h3 class="title">
            Выберите услугу <span class="text-red-600 text-[40px]">•</span>
          </h3>
          <ul class="list">
            <NuxtLink
              v-for="sub in websiteStore.menu.sub"
              :to="`/services/${sub.object_id}`"
              class="sub_item"
            >
              {{ sub.title }}
            </NuxtLink>
          </ul>
        </div>
        <img src="/img/Main_page/submenu_img.png" alt="" class="-z-[1]" />
      </div>
    </div>
    <div class="burger_menu_container" :class="{ active: isMenuActive }">
      <div class="burger_menu_wrapper">
        <span class="menu_title">Меню</span>
        <ul class="navbar">
          <NuxtLink :to="{ path: '/', hash: '#main' }" class="burger_sub_item">
            Главная
          </NuxtLink>
          <li
            class="burger_sub_item burgermenu_with_sub"
            @click="burgerSubmenuHandle($event)"
          >
            Услуги
            <div
              class="burger_submenu"
              ref="burger_submenu"
              :class="{ active: isBSub }"
            >
              <NuxtLink
                v-for="sub in websiteStore.menu.sub"
                :to="`/services/${sub.object_id}`"
                class="burger_sub_item"
                >{{ sub.title }}</NuxtLink
              >
            </div>
          </li>
          <NuxtLink :to="{ path: '/', hash: '#about' }" class="burger_sub_item">
            Об агенстве
          </NuxtLink>
          <NuxtLink
            :to="{ path: '/', hash: '#benefits' }"
            class="burger_sub_item"
          >
            Преимущества
          </NuxtLink>
          <NuxtLink
            :to="{ path: '/', hash: '#partners' }"
            class="burger_sub_item"
          >
            Партнеры
          </NuxtLink>
          <NuxtLink
            :to="{ path: '/', hash: '#reviews' }"
            class="burger_sub_item"
          >
            Отзывы
          </NuxtLink>
          <NuxtLink
            :to="{ path: '/', hash: '#contacts' }"
            class="burger_sub_item"
          >
            Контакты
          </NuxtLink>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
const { data: paths } = await useFetch(
  "https://ledjmedia.icorp.uz/wp-json/custom/menu/2"
);
const websiteStore = useWebsiteStore();
websiteStore.setMenu(paths.value);

let isMenuActive = ref(false);
let isSubMenuActive = ref(false);
let timer = ref(null);
const menu_w_sub = ref(null);
const submenu = ref(null);
const burger_submenu = ref(null);
let isBSub = ref(false);

onMounted(() => {
  menuHandler = () => {
    isMenuActive.value = !isMenuActive.value;
    if (isMenuActive.value) {
      document.body.style.overflow = "hidden"; // Устанавливаем overflow: hidden для body при активном меню
    } else {
      document.body.style.overflow = ""; // Удаляем стили overflow у body при неактивном меню
    }
  };
  toggleSubMenuActive = (isActive, event) => {
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
        }, 300);
      }
    }
  };
});

let menuHandler = () => {};
let toggleSubMenuActive = () => {};
const popup = () => {
  websiteStore.popup.active = true;
  websiteStore.popup.title = "";
};
const burgerSubmenuHandle = (event) => {
  event.preventDefault();
  isBSub.value = !isBSub.value;
};
</script>

<style lang="scss"></style>
