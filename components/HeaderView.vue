<template>
  <header v-if="!websiteStore.preLoader" class="z-10" ref="header">
    <div class="header">
      <NuxtLink to="/" class="logo flex items-center gap-[6.77px] w-max pl-6">
        <img src="/img/Header_LOGO.svg" alt="logo" class="logo_img" />
      </NuxtLink>
      <nav>
        <ul class="navbar" ref="menu_w_sub">
          <NuxtLink
            :to="{ path: '/', hash: '#main' }"
            @click="isSubMenuActive = false"
            class="navbar_item"
          >
            Главная
          </NuxtLink>
          <NuxtLink
            to="/services"
            class="navbar_item menu_with_sub"
            @mouseenter="toggleSubMenuActive(true, $event)"
            @mouseleave="toggleSubMenuActive(false, $event)"
            @click="services"
          >
            <div class="flex items-end gap-[3px]">
              <span>Услуги</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                class="rotate-90 transition-all duration-300"
                :class="{ '!-rotate-90': isSubMenuActive }"
              >
                <path fill="currentColor" d="M10 17V7l5 5z" />
              </svg>
            </div>
          </NuxtLink>
          <NuxtLink
            :to="{ path: '/', hash: '#about' }"
            class="navbar_item"
            @click="isSubMenuActive = false"
          >
            Об агентсве
          </NuxtLink>
          <NuxtLink
            :to="{ path: '/', hash: '#benefits' }"
            class="navbar_item"
            @click="isSubMenuActive = false"
          >
            Преимущества
          </NuxtLink>
          <NuxtLink
            :to="{ path: '/', hash: '#partners' }"
            class="navbar_item"
            @click="isSubMenuActive = false"
          >
            Партнеры
          </NuxtLink>
          <NuxtLink
            :to="{ path: '/', hash: '#reviews' }"
            class="navbar_item"
            @click="isSubMenuActive = false"
          >
            Отзывы
          </NuxtLink>
          <NuxtLink
            :to="{ path: '/', hash: '#contacts' }"
            class="navbar_item"
            @click="isSubMenuActive = false"
          >
            Контакты
          </NuxtLink>
        </ul>
      </nav>
      <UDropdown
        :items="items"
        mode="hover"
        class="dropdown max-md:hidden"
        labelClass="dropdown"
        :popper="{ placement: 'bottom-start' }"
      >
        <UButton
          color="white"
          :label="langLabel"
          class="dropdown_btn"
          trailing-icon="i-heroicons-chevron-down-20-solid"
        />
      </UDropdown>
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
              v-for="sub in websiteStore.cardInfos.data"
              :to="{
                path: `/services/${trimLink(sub.link)}`,
                query: { ide: sub.id },
              }"
              class="sub_item"
              @click="isSubMenuActive = false"
            >
              {{ sub.title.rendered }}
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
          <NuxtLink
            :to="{ path: '/', hash: '#main' }"
            class="burger_sub_item"
            @click="hideBurgerMenu"
          >
            Главная
          </NuxtLink>
          <li
            class="burger_sub_item burgermenu_with_sub relative"
            @click="burgerSubmenuHandle($event)"
          >
            <span>Услуги</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              class="rotate-90 absolute left-[80px] top-[8px] transition-all duration-300"
              :class="{ '!-rotate-90': isBSub }"
            >
              <path fill="currentColor" d="M10 17V7l5 5z" />
            </svg>
            <div
              class="burger_submenu"
              ref="burger_submenu"
              :class="{ active: isBSub }"
            >
              <NuxtLink
                v-for="sub in websiteStore.cardInfos.data"
                :to="{
                  path: `/services/${trimLink(sub.link)}`,
                  query: { sub: sub.id },
                }"
                @click="hideBurgerMenu"
                class="burger_sub_item"
                >{{ sub.title.rendered }}</NuxtLink
              >
            </div>
          </li>
          <NuxtLink
            :to="{ path: '/', hash: '#about' }"
            class="burger_sub_item"
            @click="hideBurgerMenu"
          >
            Об агентсве
          </NuxtLink>
          <NuxtLink
            :to="{ path: '/', hash: '#benefits' }"
            class="burger_sub_item"
            @click="hideBurgerMenu"
          >
            Преимущества
          </NuxtLink>
          <NuxtLink
            :to="{ path: '/', hash: '#partners' }"
            class="burger_sub_item"
            @click="hideBurgerMenu"
          >
            Партнеры
          </NuxtLink>
          <NuxtLink
            :to="{ path: '/', hash: '#reviews' }"
            class="burger_sub_item"
            @click="hideBurgerMenu"
          >
            Отзывы
          </NuxtLink>
          <NuxtLink
            :to="{ path: '/', hash: '#contacts' }"
            class="burger_sub_item"
            @click="hideBurgerMenu"
          >
            Контакты
          </NuxtLink>
          <button @click="popup" class="navbar_item">Оставить заявку</button>
          <UDropdown
            :items="items"
            mode="click"
            class="dropdown"
            :popper="{ placement: 'right-start' }"
          >
            <UButton
              color="white"
              :label="langLabel"
              class="dropdown_btn"
              trailing-icon="i-heroicons-chevron-down-20-solid"
            />
          </UDropdown>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
const websiteStore = useWebsiteStore();

let isMenuActive = ref(false);
let isSubMenuActive = ref(false);
let timer = ref(null);
const menu_w_sub = ref(null);
const submenu = ref(null);
const burger_submenu = ref(null);
let isBSub = ref(false);
const header = ref(null);

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
    if (isActive && isPushServices) {
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
        }, 150);
      }
    }
  };
});
function trimLink(link) {
  const baseUrl = "https://ledjmedia.uz/services/";
  if (link.startsWith(baseUrl)) {
    return link.substring(baseUrl.length);
  } else {
    // Если ссылка не начинается с базового URL, возвращаем исходную ссылку
    return link;
  }
}
let menuHandler = () => {};
let toggleSubMenuActive = () => {};
const hideBurgerMenu = () => {
  isMenuActive.value = false;
  document.body.style.overflow = "";
};
const popup = () => {
  websiteStore.popup.active = true;
  hideBurgerMenu();
};
const burgerSubmenuHandle = (event) => {
  event.preventDefault();
  isBSub.value = !isBSub.value;
};
let isPushServices = ref(false);
const services = () => {
  isPushServices.value = true;
  isSubMenuActive.value = false;
  setTimeout(() => {
    isPushServices.value = false;
  }, 500);
};
let langLabel = ref("RU");
const items = [
  [
    {
      label: websiteStore.locale.languages[0].slug,
      click: async () => {
        hideBurgerMenu();
        websiteStore.locale.currentLanguage =
          websiteStore.locale.languages[0].slug;
        langLabel.value = websiteStore.locale.languages[0].slug;
        try {
          websiteStore.setAllData();
          await refreshNuxtData();
        } catch (error) {
          console.log("Ошибка при смене языка:", error);
        }
      },
    },
    {
      label: websiteStore.locale.languages[1].slug,
      click: async () => {
        hideBurgerMenu();
        websiteStore.locale.currentLanguage =
          websiteStore.locale.languages[1].slug;
        langLabel.value = websiteStore.locale.languages[1].slug;

        try {
          websiteStore.setAllData();
          await refreshNuxtData();
        } catch (error) {
          console.log("Ошибка при смене языка:", error);
        }
      },
    },
  ],
];
</script>

<style lang="scss"></style>
