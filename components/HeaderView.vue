<template>
  <header v-if="!websiteStore.preLoader" class="z-10" ref="header">
    <div class="header">
      <NuxtLink to="/" class="logo flex items-center gap-[6.77px] w-max pl-6">
        <img src="~/public/img/Header_LOGO.svg" alt="logo" class="logo_img" />
      </NuxtLink>
      <nav>
        <ul class="navbar" ref="menu_w_sub">
          <NuxtLink
            :to="{ path: '/', hash: '#main' }"
            @click="isSubMenuActive = false"
            class="navbar_item"
          >
            {{ locolizeStore.currentHeader.menu.main }}
          </NuxtLink>
          <NuxtLink
            to="/services"
            class="navbar_item menu_with_sub"
            @mouseenter="toggleSubMenuActive(true, $event)"
            @mouseleave="toggleSubMenuActive(false, $event)"
            @click="services"
          >
            <div class="flex items-end gap-[3px]">
              <span>{{ locolizeStore.currentHeader.menu.services }}</span>
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
            {{ locolizeStore.currentHeader.menu.about }}
          </NuxtLink>
          <NuxtLink
            :to="{ path: '/', hash: '#benefits' }"
            class="navbar_item"
            @click="isSubMenuActive = false"
          >
            {{ locolizeStore.currentHeader.menu.benefits }}
          </NuxtLink>
          <NuxtLink
            :to="{ path: '/', hash: '#partners' }"
            class="navbar_item"
            @click="isSubMenuActive = false"
          >
            {{ locolizeStore.currentHeader.menu.partners }}
          </NuxtLink>
          <NuxtLink
            :to="{ path: '/', hash: '#reviews' }"
            class="navbar_item"
            @click="isSubMenuActive = false"
          >
            {{ locolizeStore.currentHeader.menu.reviews }}
          </NuxtLink>
          <NuxtLink
            :to="{ path: '/', hash: '#contacts' }"
            class="navbar_item"
            @click="isSubMenuActive = false"
          >
            {{ locolizeStore.currentHeader.menu.contacts }}
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
      <button @click="popup" class="submit_btn mr-2.5">
        {{ locolizeStore.currentHeader.menu.btn }}
      </button>
      <button
        @click="menuHandler"
        class="menu_btn w-[27px] h-[27px] relative mr-[19px]"
      >
        <img
          src="~/public/img/icons/burger_menu.svg"
          alt=""
          class="icon_open"
          :class="{ active: !isMenuActive, noactive: isMenuActive }"
        />
        <img
          src="~/public/img/icons/Close_x.svg"
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
            {{ locolizeStore.currentHeader.choose }}
            <span class="text-red-600 text-[40px]">•</span>
          </h3>
          <ul class="list">
            <NuxtLink
              v-for="sub in websiteStore.cardInfos.data"
              :to="{
                path: `/${trimLink(sub.link)}`,
                query: { ide: sub.id },
              }"
              class="sub_item"
              active-class="active"
              @click="isSubMenuActive = false"
            >
              {{ sub.title.rendered }}
            </NuxtLink>
          </ul>
        </div>
        <img
          src="~/public/img/Main_page/submenu_img.png"
          alt=""
          class="-z-[1]"
        />
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
            {{ locolizeStore.currentHeader.menu.main }}
          </NuxtLink>
          <li
            class="burger_sub_item burgermenu_with_sub relative"
            @click="burgerSubmenuHandle($event)"
          >
            <span>{{ locolizeStore.currentHeader.menu.services }}</span>
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
                  path: `/${trimLink(sub.link)}`,
                  query: { ide: sub.id },
                }"
                @click="hideBurgerMenu"
                class="burger_sub_item"
                active-class="active"
                >{{ sub.title.rendered }}</NuxtLink
              >
            </div>
          </li>
          <NuxtLink
            :to="{ path: '/', hash: '#about' }"
            class="burger_sub_item"
            @click="hideBurgerMenu"
          >
            {{ locolizeStore.currentHeader.menu.about }}
          </NuxtLink>
          <NuxtLink
            :to="{ path: '/', hash: '#benefits' }"
            class="burger_sub_item"
            @click="hideBurgerMenu"
          >
            {{ locolizeStore.currentHeader.menu.benefits }}
          </NuxtLink>
          <NuxtLink
            :to="{ path: '/', hash: '#partners' }"
            class="burger_sub_item"
            @click="hideBurgerMenu"
          >
            {{ locolizeStore.currentHeader.menu.partners }}
          </NuxtLink>
          <NuxtLink
            :to="{ path: '/', hash: '#reviews' }"
            class="burger_sub_item"
            @click="hideBurgerMenu"
          >
            {{ locolizeStore.currentHeader.menu.reviews }}
          </NuxtLink>
          <NuxtLink
            :to="{ path: '/', hash: '#contacts' }"
            class="burger_sub_item"
            @click="hideBurgerMenu"
          >
            {{ locolizeStore.currentHeader.menu.contacts }}
          </NuxtLink>
          <button @click="popup" class="navbar_item">
            {{ locolizeStore.currentHeader.menu.btn }}
          </button>
          <UDropdown
            :items="items"
            mode="click"
            class="dropdown"
            :popper="{ placement: 'right-start' }"
            disabled
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
const locolizeStore = useLocolizeStore();
const router = useRouter();
const route = useRoute();

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
  const baseUrl =
    websiteStore.locale.currentLanguage === "ru"
      ? "https://ledjmedia.uz/"
      : `https://ledjmedia.uz/${websiteStore.locale.currentLanguage}/`;
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
          if (route.query.ide) {
            const index = websiteStore.cardInfos.data.findIndex(
              (item) => item.id === parseInt(route.query.ide)
            );
            router.push(
              {
                path: route.path,
                force: true,
                query: {
                  ide: websiteStore.cardInfos.data[index].translations.ru,
                },
              },
              async () => {
                await refreshNuxtData();
              }
            );
          }
          preloaderFunc();
          websiteStore.setAllData();
          locolizeStore.setLocolize(websiteStore.locale.currentLanguage);
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
          if (route.query.ide) {
            const index = websiteStore.cardInfos.data.findIndex(
              (item) => item.id === parseInt(route.query.ide)
            );
            router.push(
              {
                path: route.path,
                force: true,
                query: {
                  ide: websiteStore.cardInfos.data[index].translations.uz,
                },
              },
              async () => {
                await refreshNuxtData();
              }
            );
          }
          preloaderFunc();
          websiteStore.setAllData();
          locolizeStore.setLocolize(websiteStore.locale.currentLanguage);
        } catch (error) {
          console.log("Ошибка при смене языка:", error);
        }
      },
    },
    {
      label: websiteStore.locale.languages[2].slug,
      click: async () => {
        hideBurgerMenu();
        websiteStore.locale.currentLanguage =
          websiteStore.locale.languages[2].slug;
        langLabel.value = websiteStore.locale.languages[2].slug;
        try {
          if (route.query.ide) {
            const index = websiteStore.cardInfos.data.findIndex(
              (item) => item.id === parseInt(route.query.ide)
            );
            router.push(
              {
                path: route.path,
                force: true,
                query: {
                  ide: websiteStore.cardInfos.data[index].translations.en,
                },
              },
              async () => {
                await refreshNuxtData();
              }
            );
          }
          preloaderFunc();
          websiteStore.setAllData();
          locolizeStore.setLocolize(websiteStore.locale.currentLanguage);
        } catch (error) {
          console.log("Ошибка при смене языка:", error);
        }
      },
    },
  ],
];
</script>

<style lang="scss"></style>
