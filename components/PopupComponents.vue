<template>
  <div
    class="popup"
    :class="{ active: websiteStore.popup.active }"
    @click="closeOnOutsideClick"
  >
    <div class="popup_content">
      <img
        id="close_popup"
        src="~/public/img/icons/x.svg"
        alt="x"
        @click="closePopup"
        class="absolute w-7 h-7 top-5 right-[22px] z-[2] cursor-pointer"
      />
      <form class="px-[45px] mb-[26px]" @submit.prevent="submitHandler">
        <h3>{{ locolizeStore.currentMainPage.popup.title }}</h3>
        <span v-if="websiteStore.popup.title" class="form_sub"
          >{{ locolizeStore.currentHeader.menu.services }}
          <strong>{{ websiteStore.popup.title }}</strong></span
        >
        <div class="w-full flex flex-col gap-1 mb-[18px]">
          <input
            type="text"
            name="name"
            v-model="state.formName"
            :placeholder="locolizeStore.currentMainPage.popup.inputName.input"
            class="name_input outline-none"
          />
          <span
            v-if="v$.formName.$error"
            class="text-red-600 error_span ml-[10px]"
            >{{ locolizeStore.currentMainPage.popup.inputName.span }}</span
          >
        </div>
        <div class="w-full flex flex-col gap-1 mb-[18px]">
          <input
            type="text"
            name="phone"
            v-model="state.formPhone"
            v-maska
            data-maska="+998 (##) ### ## ##"
            :placeholder="locolizeStore.currentMainPage.popup.inputPhone.input"
            class="phone_input outline-none"
          />
          <span
            v-if="v$.formPhone.$error"
            class="text-red-600 error_span ml-[10px]"
            >{{ locolizeStore.currentMainPage.popup.inputPhone.span }}</span
          >
        </div>

        <button type="submit" class="submit_btn w-full py-[13px]">
          <span>{{ locolizeStore.currentMainPage.popup.btnSend }}</span
          ><img
            v-if="isPosted"
            src="~/public/img/galochka.gif"
            alt="Galochka"
            class="max-h-[20px] max-w-[20px]"
          />
        </button>
      </form>
      <div class="flex flex-col items-center gap-[25px] px-[45px]">
        <p class="popup_sub">
          {{ locolizeStore.currentMainPage.popup.btnSpan }}
        </p>
        <div
          class="phone flex items-center gap-3 max-md:flex-wrap max-md:flex-col"
        >
          <a href="tel: +998 (55) 506 54 44">+998 (97) 249-80-87 </a>
          <span class="hidden">|</span>
          <a href="tel: +998 (71) 257 60 00">+998 (97) 784-81-22</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { required, minLength } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
const websiteStore = useWebsiteStore();
const locolizeStore = useLocolizeStore();
const route = useRoute();
const state = reactive({
  formName: "",
  formPhone: "",
});
const rules = computed(() => {
  return {
    formName: { required },
    formPhone: { required, minLength: minLength(11) },
  };
});
let isPosted = ref(false);
const v$ = useVuelidate(rules, state);

const sendData = async () => {
  const formData = new FormData();
  formData.append("name", state.formName);
  formData.append("phone", state.formPhone);

  // Получение UTM-меток из route
  const utmSource = route.query.utm_source || "";
  const utmMedium = route.query.utm_medium || "";
  const utmCampaign = route.query.utm_campaign || "";
  const utmTerm = route.query.utm_term || "";
  const utmContent = route.query.utm_content || "";
  const utmReferrer = route.query.utm_referrer || "";
  try {
    await useFetch(
      `https://ledjmedia.uz/amo/amo.php?utm_source=${utmSource}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}&utm_term=${utmTerm}&utm_content=${utmContent}&utm_referrer=${utmReferrer}`,
      {
        method: "POST",
        body: formData,
      }
    );
    isPosted.value = true;
    // Очистка значений полей после успешной отправки
    setTimeout(() => {
      state.formName = "";
      state.formPhone = "";
      isPosted.value = false;
    }, 3000);
  } catch (error) {
    console.log("Http error:", error);
  }
};

const submitHandler = () => {
  v$.value.$validate();
  if (!v$.value.$error) {
    sendData();
    state.formName = "";
    state.formPhone = "";
    closePopup();
    websiteStore.setPosted(true);
  }
};
const closePopup = () => {
  websiteStore.popup.active = false;
  websiteStore.setPopup(false, websiteStore.popup.title);
};
const closeOnOutsideClick = (event) => {
  const popupContent = document.querySelector(".popup_content");
  if (!popupContent.contains(event.target)) {
    closePopup();
  }
};
</script>

<style scoped>
@import "~/assets/popup.scss";
</style>
