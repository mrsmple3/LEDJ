<template>
  <footer id="contacts" class="relative" ref="footer">
    <div class="footer">
      <div
        class="flex items-start justify-between flex-wrap gap-[74px] mb-[62px]"
      >
        <div class="footer_contact flex flex-col items-start">
          <h2>Контакты</h2>
          <p class="sub">
            <span>Возникли вопросы?</span> <br /><br />Оставьте заявку, заполнив
            форму, либо позвоните по указанным контактам и мы проконсультируем
            вас по интересующим вопросам, предоставим полную информацию о наших
            услугах и ценах.
          </p>
          <div class="phones flex flex-col items-start">
            <a :href="'tel:' + websiteStore.footer.data.phone1">{{
              websiteStore.footer.data.phone1
            }}</a>
            <a :href="'te:' + websiteStore.footer.data.phone2">{{
              websiteStore.footer.data.phone2
            }}</a>
          </div>
          <br />
          <div class="emal_adress flex flex-col items-start">
            <a :href="'mailto:' + websiteStore.footer.data.email"
              ><strong>E-mail: </strong>{{ websiteStore.footer.data.email }}</a
            >
            <span
              ><strong>Адрес: </strong
              >{{ websiteStore.footer.data.address }}</span
            >
          </div>
        </div>
        <div class="footer_form flex flex-col items-start mt-[9px]">
          <h5>Форма обратной связи</h5>
          <form class="w-full flex flex-col items-start gap-[29px] mb-[43px]">
            <div class="w-full flex flex-col gap-1">
              <input
                type="text"
                class="name_input"
                v-model="state.formName"
                placeholder="Ваше имя"
                @change="v$.formName.$touch"
              />
              <span v-if="v$.formName.$error" class="text-red-600 error_span"
                >Введите Имя</span
              >
            </div>
            <div class="w-full flex flex-col gap-1">
              <input
                type="text"
                class="phone_input"
                v-model="state.formPhone"
                v-maska
                data-maska="+998 (##) ### ## ##"
                placeholder="Номер телефона"
                @change="v$.formPhone.$touch"
              />
              <span v-if="v$.formPhone.$error" class="text-red-600 error_span"
                >Введите Номер телефона</span
              >
            </div>
            <div class="w-full flex flex-col gap-1">
              <input
                type="text"
                class="company_input"
                v-model="state.formCompany"
                placeholder="Компания"
              />
            </div>
            <div class="w-full flex flex-col gap-1 mb-[14px]">
              <textarea
                type="text"
                class="comment_input"
                v-model="state.formComment"
                placeholder="Комментарий"
              ></textarea>
            </div>
            <div class="flex items-center justify-between flex-wrap gap-[22px]">
              <button
                @click.prevent="submitHandler"
                type="submit"
                class="form_btn"
                :class="{ 'bg-green': isPosted }"
              >
                <span>Отправить</span>
                <img
                  v-if="isPosted"
                  src="~/public/img/galochka.gif"
                  alt="Galochka"
                  class="max-h-[20px] max-w-[20px]"
                />
              </button>
              <p class="form_title">
                Отправляя данную форму, вы соглашаетесь на обработку
                персональных данных.
              </p>
            </div>
          </form>
        </div>
      </div>
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A11580bfd087f4e3c06f72378f7b12382d3d9439fa97aef5ca479d104b9c6c1fb&amp;source=constructor"
        width="100%"
        height="275"
        frameborder="0"
        class="rounded-[30px] mb-[44px]"
      ></iframe>
      <div
        class="w-full flex items-center justify-between max-md:flex-col max-md:item-center max-md:justify-start"
      >
        <span class="copy_right max-md:mb-[37px]"
          >© LEDJ MEIDA 2024. Все права защищены.</span
        >
        <div
          v-if="
            websiteStore.footer.data.telegram ||
            websiteStore.footer.data.instagram ||
            websiteStore.footer.data.facebook
          "
          class="social_media flex items-center gap-[14px] max-md:mb-[65px]"
        >
          <a
            v-if="websiteStore.footer.data.telegram"
            :href="websiteStore.footer.data.telegram"
            ><img src="~/public/img/icons/footer_media/1.svg" alt="telegram"
          /></a>
          <a
            v-if="websiteStore.footer.data.instagram"
            :href="websiteStore.footer.data.instagram"
          >
            <img src="~/public/img/icons/footer_media/2.svg" alt="instagram" />
          </a>
          <a
            v-if="websiteStore.footer.data.facebook"
            :href="websiteStore.footer.data.facebook"
          >
            <img src="~/public/img/icons/footer_media/3.svg" alt="facebook" />
          </a>
        </div>
        <div class="flex items-center gap-[5px]">
          <img src="~/public/img/icons/light.svg" alt="light" />
          <a href="https://icorp.uz/">Разработано iCORP</a>
        </div>
      </div>
    </div>
    <img
      src="~/public/img/Main_page/footer_bg.png"
      alt="bg"
      class="footer_bg_big"
    />
    <img
      src="~/public/img/Main_page/footer_right_bg.svg"
      alt="bg"
      class="footer_bg"
    />
  </footer>
</template>

<script setup>
import { required, minLength } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

const websiteStore = useWebsiteStore();
const route = useRoute();
const state = reactive({
  formName: "",
  formPhone: "",
  formCompany: "",
  formComment: "",
});
let isPosted = ref(false);
const sendData = async () => {
  const formData = new FormData();
  formData.append("name", state.formName);
  formData.append("phone", state.formPhone);
  formData.append("company", state.formCompany);
  formData.append("comment", state.formComment);

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
    // Очистка значений полей после успешной отправки

    isPosted.value = true;
    setTimeout(() => {
      state.formName = "";
      state.formPhone = "";
      state.formCompany = "";
      state.formComment = "";
      isPosted.value = false;
    }, 3000);
  } catch (error) {
    console.error("HTTP-Error: " + error);
  }
};

const rules = computed(() => {
  return {
    formName: { required },
    formPhone: { required, minLength: minLength(11) },
  };
});
const v$ = useVuelidate(rules, state);

const submitHandler = () => {
  v$.value.$validate();
  if (!v$.value.$error) {
    const sended = sendData();
    websiteStore.setPosted(true);
  }
};

const footer = ref(null);

onMounted(() => {
  websiteStore.setContentWidth(window.innerWidth - footer.value.offsetWidth);
  document.documentElement.style.setProperty(
    "--scrollbar-width",
    `${window.innerWidth - footer.value.offsetWidth}px`
  );
});
</script>

<style lang="scss" scoped></style>
