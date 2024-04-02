<template>
  <header class="z-10">
    <div class="header max-md:py-[18px]">
      <NuxtLink to="/" class="logo flex items-center gap-[6.77px] w-max pl-6">
        <img src="/img/Header_LOGO.svg" alt="logo" class="logo_img" />
        <img src="/img/Header_LOGO_Title.svg" alt="LEDJ" class="logo_title" />
      </NuxtLink>
      <nav>
        <ul class="navbar" ref="menu_w_sub">
          <NuxtLink
            v-for="paht in pahts"
            :to="paht.url"
            class="navbar_item"
            :class="{ menu_with_sub: isService(paht.title) }"
            @mouseenter="toggleSubMenuActive(paht.title, true)"
            @mouseleave="toggleSubMenuActive(paht.title, false)"
          >
            {{ paht.title }}
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
      @mouseenter="toggleSubMenuActive('Услуги', true)"
      @mouseleave="toggleSubMenuActive('Услуги', false)"
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
          <NuxtLink v-for="paht in pahts" :to="paht.url" class="navbar_item">
            {{ paht.title }}
          </NuxtLink>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "header",
  data() {
    return {
      pahts: [],
      isMenuActive: false,
      isSubMenuActive: false,
      isLeaveSubmenu: false,
      timer: null,
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
  methods: {
    menuHandler() {
      this.isMenuActive = !this.isMenuActive;
      if (this.isMenuActive) {
        document.body.style.overflow = "hidden"; // Устанавливаем overflow: hidden для body при активном меню
      } else {
        document.body.style.overflow = ""; // Удаляем стили overflow у body при неактивном меню
      }
    },
    isService(title) {
      // Проверяет, является ли название "Услуги"
      return title === "Услуги";
    },
    toggleSubMenuActive(title = "Услуги", isActive) {
      if (title === "Услуги") {
        if (isActive) {
          this.isSubMenuActive = true;
          if (this.timer) clearTimeout(this.timer);
        } else {
          // Проверяем, если курсор находится на подменю или на кнопке меню
          if (
            !this.$refs.menu_w_sub.children[1].contains(event.relatedTarget) &&
            !this.$refs.submenu.contains(event.relatedTarget)
          ) {
            this.timer = setTimeout(() => {
              this.isSubMenuActive = false;
            }, 500);
          }
        }
      }
    },
  },
};
</script>

<style lang="scss"></style>
