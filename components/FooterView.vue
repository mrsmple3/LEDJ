<template>
  <footer class="relative">
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
            <span>{{ info.phone1 }}</span>
            <span>{{ info.phone2 }}</span>
          </div>
          <br />
          <div class="emal_adress flex flex-col items-start">
            <span><strong>E-mail: </strong>{{ info.email }}</span>
            <span><strong>Адрес: </strong>{{ info.address }}</span>
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
              />
              <span
                v-if="v$.formName.$error || v$.formName.$dirty"
                class="text-red-600 error_span"
                >Введите Имя</span
              >
            </div>
            <div class="w-full flex flex-col gap-1">
              <input
                type="text"
                class="phone_input"
                v-model="state.formPhone"
                placeholder="Номер телефона"
              />
              <span
                v-if="v$.formPhone.$error || v$.formPhone.$dirty"
                class="text-red-600 error_span"
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
              <!-- <span v-if="v$.formCompany.$error" class="text-red-600 error_span"
                >Введите название компании</span
              > -->
            </div>
            <div class="w-full flex flex-col gap-1 mb-[14px]">
              <textarea
                type="text"
                class="comment_input"
                v-model="state.formComment"
                placeholder="Комментарий"
              ></textarea>
              <!-- <span v-if="v$.formComment.$error" class="text-red-600 error_span"
                >Введите комментарий</span
              > -->
            </div>
            <div class="flex items-center justify-between flex-wrap gap-[22px]">
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
      <div
        class="w-full flex items-center justify-between max-md:flex-col max-md:item-center max-md:justify-start"
      >
        <span class="copy_right max-md:mb-[37px]"
          >© LEDJ MEIDA 2024. Все права защищены.</span
        >
        <div class="flex items-center gap-[14px] max-md:mb-[65px]">
          <a :href="info.telegram"
            ><img src="/img/icons/footer_media/1.svg" alt="telegram"
          /></a>
          <a :href="info.instagram">
            <img src="/img/icons/footer_media/2.svg" alt="instagram" />
          </a>
          <a :href="info.facebook">
            <img src="/img/icons/footer_media/3.svg" alt="facebook" />
          </a>
        </div>
        <div class="flex items-center gap-[5px]">
          <img src="/img/icons/light.svg" alt="light" />
          <a href="https://icorp.uz/">Разработано iCORP</a>
        </div>
      </div>
    </div>
    <img src="/img/Main_page/footer_bg.png" alt="bg" class="footer_bg_big" />
    <img src="/img/Main_page/footer_right_bg.png" alt="bg" class="footer_bg" />
  </footer>
</template>

<script>
import { reactive, ref } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { minLength, required } from "@vuelidate/validators";
export default {
  name: "footer",
  setup() {
    const state = reactive({
      formName: ref(""),
      formPhone: ref("+998"),
      formCompany: ref(""),
      formComment: ref(""),
    });
    const rules = {
      formName: { required },
      formPhone: { required, minLength: minLength(11) },
      formCompany: { required },
      formComment: { required },
    };

    const v$ = useVuelidate(rules, state);

    return { state, v$ };
  },
  data() {
    return {
      info: {},
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
  mounted() {
    // info
    fetch("http://ledjmedia.icorp.uz/wp-json/options/all")
      .then((response) => response.json())
      .then((data) => {
        this.info = data;
      })
      .catch((error) => {
        console.error("Ошибка при получении данных:", error);
      });
  },
};
</script>

<style lang="scss" scoped></style>
