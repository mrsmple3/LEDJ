<template>
  <div
    class="popup"
    :class="{ active: websiteStore.popup.active }"
    @click="closeOnOutsideClick"
  >
    <div class="popup_content">
      <img
        id="close_popup"
        src="/img/icons/x.svg"
        alt="x"
        @click="closePopup"
        class="absolute w-7 h-7 top-5 right-[22px] z-[2] cursor-pointer"
      />
      <form class="px-[45px] mb-[26px]">
        <h3>Оставить заявку</h3>
        <span v-if="websiteStore.popup.title" class="form_sub"
          >Услуга: <strong>{{ websiteStore.popup.title }}</strong></span
        >
        <input
          type="text"
          name="name"
          placeholder="Ваше имя"
          class="name_input mb-[18px] outline-none"
        />
        <input
          type="text"
          name="phone"
          placeholder="Номер телефоона"
          class="phone_input mb-[18px] outline-none"
        />
        <button type="submit" class="submit_btn w-full py-[13px]">
          Отправить
        </button>
      </form>
      <div class="flex flex-col items-center gap-[25px] px-[45px]">
        <p class="popup_sub">
          Отправляя данную форму, вы соглашаетесь на обработку персональных
          данных.
        </p>
        <div class="phone flex items-center gap-1 max-md:flex-wrap">
          <a href="tel: +998 (55) 506 54 44">+998 (97) 249-80-87 </a> |
          <a href="tel: +998 (71) 257 60 00">+998 (97) 784-81-22</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const websiteStore = useWebsiteStore();
const closePopup = () => {
  websiteStore.popup.active = false;
  setTimeout(() => {
    websiteStore.popup.title = "";
  }, 300);
};
const closeOnOutsideClick = () => {};
</script>

<style scoped>
@import "~/assets/popup.scss";
</style>
