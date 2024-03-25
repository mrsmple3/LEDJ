<template>
  <footer class="relative">
    <img src="/img/Main_page/footer_bg.png" alt="bg" class="footer_bg_big" />
    <img src="/img/Main_page/footer_right_bg.png" alt="bg" class="footer_bg" />
    <div class="footer">
      <div class="flex items-start justify-between gap-10 mb-[62px]">
        <div class="footer_contact flex flex-col items-start">
          <h2>Контакты</h2>
          <p class="sub">
            <span>Возникли вопросы?</span> <br /><br />Оставьте заявку, заполнив
            форму, либо позвоните по указанным контактам и мы проконсультируем
            вас по интересующим вопросам, предоставим полную информацию о наших
            услугах и ценах.
          </p>
          <div class="phones flex flex-col items-start">
            <span>+998 (97) 249-80-87</span>
            <span>+998 (97) 784-81-22</span>
          </div>
          <br />
          <div class="emal_adress flex flex-col items-start">
            <span><strong>E-mail: </strong>ledjmedia@mail.ru</span>
            <span
              ><strong>Адрес: </strong>Ташкент, Яшнабадский район, улица Боткина
              3</span
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
                v-model="formName"
                placeholder="Ваше имя"
              />
              <span class="text-red-600 error_span">Введите Имя</span>
            </div>
            <div class="w-full flex flex-col gap-1">
              <input
                type="text"
                class="phone_input"
                v-model="formPhone"
                placeholder="Номер телефона"
              />
              <span class="text-red-600 error_span"
                >Введите Номер телефона</span
              >
            </div>
            <div class="w-full flex flex-col gap-1">
              <input
                type="text"
                class="company_input"
                v-model="formCompany"
                placeholder="Компания"
              />
              <span class="text-red-600 error_span"
                >Введите название компании</span
              >
            </div>
            <div class="w-full flex flex-col gap-1 mb-[14px]">
              <textarea
                type="text"
                class="comment_input"
                v-model="formComment"
                placeholder="Комментарий"
              ></textarea>
              <span class="text-red-600 error_span">Введите комментарий</span>
            </div>
            <div class="flex items-center justify-between gap-[22px]">
              <button
                @click.prevent="submitHandler"
                type="submit"
                class="form_btn"
              >
                Отправить
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
      <div class="w-full flex items-center justify-between">
        <span class="copy_right">© LEDJ MEIDA 2024. Все права защищены.</span>
        <div class="flex items-center gap-[14px]">
          <NuxtLink to="t.me"
            ><img src="/img/icons/footer_media/1.svg" alt="telegram"
          /></NuxtLink>
          <NuxtLink to="instagram.com">
            <img src="/img/icons/footer_media/2.svg" alt="instagram" />
          </NuxtLink>
          <NuxtLink to="facebook.com">
            <img src="/img/icons/footer_media/3.svg" alt="facebook" />
          </NuxtLink>
        </div>
        <div class="flex items-center gap-[5px]">
          <img src="/img/icons/light.svg" alt="light" />
          <NuxtLink to="icorp.com">Разработано iCORP</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
export default {
  name: "footer",
  setup() {
    const v$ = useVuelidate();
    return { v$ };
  },
  data() {
    return {
      formName: "",
      formPhone: "+998",
      formCompany: "",
      formComment: "",
    };
  },
  validations() {
    return {
      formName: { required },
      formPhone: { required },
      formCompany: { required },
      formComment: { required },
    };
  },
  methods: {
    async submitHandler() {
      if (this.v$.$invalid) {
        this.v$.$touch();
        return;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
