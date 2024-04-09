<template>
  <div class="wrapper">
    <main id="main" class="main">
      <img src="/img/Main_page/Main_page_bg.png" alt="" class="main_page_bg" />
      <img
        src="/img/Main_page/Main_page_bg_ellips.svg"
        alt=""
        class="absolute top-0 left-0 -z-[1]"
      />
      <img
        src="/img/Main_page/Main_page_bg_ellips_blue.svg"
        alt=""
        class="w-[587px] h-[587px] absolute -bottom-[30%] right-0 -z-[1] max-md:bottom-0"
      />
      <div class="offer_block">
        <div class="content flex flex-col items-start">
          <span class="span_name">LEDJ MEDIA •</span>
          <h1 class="offer_title">
            Рекламное агентство <br />
            <span>полного цикла</span>
          </h1>
          <p class="sub">
            Предлагаем комплексные решения для реализации ваших маркетинговых и
            бизнес-задач
          </p>
          <div class="flex items-center flex-wrap gap-[34px]">
            <button @click="popup" class="popup_link">
              <span> Оставить заявку </span>
              <img src="/img/icons/btn_arrow_right.svg" alt=">" />
            </button>
            <div class="flex items-center gap-[34px]">
              <div class="h-[47px] w-[1px] bg-white opacity-[50%]"></div>
              <p class="btn_sub">
                Ны рынке Узбекистана <strong>с 2020 года</strong>
              </p>
            </div>
          </div>
        </div>
        <swiper
          :pagination="pagination"
          :loop="true"
          :autoplay="{
            delay: 4000,
            disableOnInteraction: false,
          }"
          :modules="modules"
          class="slider"
        >
          <swiper-slide class="slider_slide">
            <h6 class="title">Индивидуальный подход</h6>
            <img
              src="/img/Main_page/slider/icon_1.svg"
              alt=""
              class="mb-[27px]"
            />
            <p class="sub">
              Разрабатываем уникальные стратегии для каждого проекта, чтобы
              обеспечить максимальную эффективность вашего присутствия в
              медиа-пространстве.
            </p>
            <span class="number">1</span>
          </swiper-slide>
          <swiper-slide class="slider_slide">
            <h6 class="title">Экономия времени и ресурсов</h6>
            <img
              src="/img/Main_page/slider/icon_2.svg"
              alt=""
              class="mb-[27px]"
            />
            <p class="sub">
              Работая с рекламным агентством полного цикла, вы избегаете
              необходимости взаимодействия с несколькими поставщиками услуг. Вы
              получите все необходимые услуги «‎под одной крышей».
            </p>
            <span class="number">2</span>
          </swiper-slide>
          <swiper-slide class="slider_slide">
            <h6 class="title">Комплексный анализ и оптимизация</h6>
            <img
              src="/img/Main_page/slider/icon_3.svg"
              alt=""
              class="mb-[27px]"
            />
            <p class="sub">
              Агентство, обладая широким спектром услуг, имеет возможность
              проводить комплексный анализ рекламных кампаний и их
              эффективности, что позволяет выявлять все сильные и слабые
              стороны.
            </p>
            <span class="number">3</span>
          </swiper-slide>
        </swiper>
      </div>
    </main>
    <div id="about" class="white_block">
      <div class="about">
        <div
          class="flex items-start justify-between mb-[82px] max-md:mb-[50px]"
        >
          <h2 class="title gap-[9px]"><span>01</span> Об агентстве</h2>
          <div class="content flex flex-col items-start">
            <div
              class="w-full flex items-center justify-between mb-[62px] max-md:mb-[44px]"
            >
              <h3 class="content_title">Ориентируемся на результат</h3>
              <div
                style="
                  width: 18px;
                  height: 18px;
                  background: #ff2f22;
                  border-radius: 9999px;
                "
                class="max-md:hidden"
              ></div>
            </div>
            <p class="content_sub">
              <span class="uppercase text-[#FF2F22] font-semibold"
                >LEDJ MEDIA</span
              >
              — это рекламное агентство полного цикла, которое нацелено на
              достижение результатов. Мы стремимся к тому, чтобы ваша инвестиция
              в рекламную кампанию начала приносить прибыль с самого начала
              нашего сотрудничества и на всех последующих этапах. <br /><br />
              Создание оригинальных идей для рекламы, разработка эффективных
              стратегий и их реализация для успешного продвижения вашего бизнеса
              — наша ключевая задача. <br /><br />
              Мы видим нашу миссию в том, чтобы помогать вам выделиться на
              рынке, привлечь целевую аудиторию и достичь желаемых результатов в
              вашем бизнесе.
            </p>
          </div>
        </div>
        <div
          class="card-slider flex items-streach justify-between flex-wrap gap-[27px]"
        >
          <div class="effective_card">
            <div class="card_content">
              <h5 class="card_title">
                Эффективные стратегии <span>продвижения</span>
              </h5>
              <p class="card_sub">
                Профессиональные решения для успешного продвижения вашего
                бизнеса.
              </p>
            </div>
            <img src="/img/Main_page/about_card_bg_bottom.png" alt="" />
          </div>
          <p v-if="websiteStore.bilboards.pending">Loading ...</p>
          <BilboardsComponent v-else />
        </div>
      </div>
      <div class="services">
        <div
          class="flex items-center justify-between mb-[50px] max-md:mb-[30px]"
        >
          <h3 class="content_title">Предоставляемые услуги</h3>
          <h2 class="title gap-[9px]"><span>02</span> Наши услуги</h2>
        </div>
        <p v-if="websiteStore.cardInfos.pending">Loading ...</p>
        <div v-else class="services_cards mb-[39px]">
          <ServiceCards v-if="isMounted" :is-main-page="true" />
        </div>
        <div class="flex items-center justify-between">
          <span
            class="mr-[30px] text-zinc-300 text-lg font-semibold uppercase leading-normal text-nowrap"
            >LEDJ MEDIA</span
          >
          <div class="line"></div>
          <a href="" class="all_services_link text-nowrap">Все услуги →</a>
        </div>
      </div>
    </div>
    <div id="benefits" class="benefits">
      <img
        src="/img/Main_page/benefit_top_left_bg.svg"
        alt=""
        class="absolute -top-[80%] left-0 -z-[1] max-md:-top-[55%]"
      />
      <img
        src="/img/Main_page/benefit_top_rigth_bg.svg"
        alt=""
        class="absolute -top-[75%] right-0 -z-[1] max-md:top-0"
      />
      <img
        src="/img/Main_page/benefits_bg.png"
        alt=""
        class="bg_animation absolute -bottom-[20%] left-0 -z-[1] max-md:opacity-10 max-md:top-[30%]"
      />
      <img
        src="/img/Main_page/benefit_bottom_bg.png"
        alt=""
        class="absolute -bottom-[130%] right-[0] -z-[1] max-md:hidden"
      />
      <div class="benefits_content">
        <div
          class="flex items-start justify-between mb-[96px] max-md:px-5 max-md:mb-[60px]"
        >
          <div class="flex flex-col items-start gap-[17px]">
            <h2 class="title gap-[9px]"><span>03</span> Преимущества</h2>
            <span class="everything_btn">Everything you need</span>
          </div>
          <div class="max-w-[689px] flex flex-col items-start">
            <h3 class="benefit_title mb-[62px]">
              Надежный партнер в сфере рекламы и маркетинга
            </h3>
            <p class="benefit_sub mb-[60px]">
              Работая с нами, вы получите единого подрядчика, который отвечает
              за все процессы, а не целую вереницу узкопрофильных агентств.
            </p>
            <div class="benefits_list">
              <div
                class="benefits_list_item w-[45%] flex items-center gap-[19px]"
              >
                <div class="h-[38px] w-1 bg-red-600"></div>
                <p class="list_sub">
                  Мы отвечаем всем международным требованиям и стандартам
                  качества
                </p>
              </div>
              <div
                class="benefits_list_item w-[45%] flex items-center gap-[19px]"
              >
                <div class="h-[38px] w-1 bg-red-600"></div>
                <p class="list_sub">
                  Мы отвечаем всем международным требованиям и стандартам
                  качества
                </p>
              </div>
              <div
                class="benefits_list_item w-[45%] flex items-center gap-[19px]"
              >
                <div class="h-[38px] w-1 bg-red-600"></div>
                <p class="list_sub">
                  Мы отвечаем всем международным требованиям и стандартам
                  качества
                </p>
              </div>
              <div
                class="benefits_list_item w-[45%] flex items-center gap-[19px]"
              >
                <div class="h-[38px] w-1 bg-red-600"></div>
                <p class="list_sub">
                  Мы отвечаем всем международным требованиям и стандартам
                  качества
                </p>
              </div>
            </div>
          </div>
          <div
            class="w-[18px] h-[18px] bg-red-600 rounded-full max-md:hidden"
          ></div>
        </div>
        <div class="benefits-slider">
          <swiper
            :slidesPerView="'auto'"
            :spaceBetween="20"
            :loop="true"
            class="flex items-stretch justify-between gap-[20px]"
          >
            <swiper-slide
              class="benefit_card w-full wow fadeInRight"
              data-wow-delay="0.2s"
            >
              <img src="/img/icons/benfits/1.svg" alt="" class="mb-[44px]" />
              <div class="flex flex-col items-start gap-[12px]">
                <h4 class="benefit_title">Комплексный подход</h4>
                <p class="benfit_sub">
                  Полностью погружаемся в ваш бизнес, изучаем его, проводим
                  полный анализ и подбираем оптимальную стратегию продвижения.
                </p>
              </div>
            </swiper-slide>
            <swiper-slide
              class="benefit_card wow fadeInRight"
              data-wow-delay="0.2s"
            >
              <img src="/img/icons/benfits/2.svg" alt="" class="mb-[44px]" />
              <div class="flex flex-col items-start gap-[12px]">
                <h4 class="benefit_title">Команда профессионалов</h4>
                <p class="benfit_sub">
                  Мы — команда опытных специалистов со стажем, безупречно
                  справляющихся со всеми задачами, возложенными на нас в
                  процессе работы.
                </p>
              </div>
            </swiper-slide>
            <swiper-slide
              class="benefit_card wow fadeInRight"
              data-wow-delay="0.2s"
            >
              <img src="/img/icons/benfits/3.svg" alt="" class="mb-[44px]" />
              <div class="flex flex-col items-start gap-[12px]">
                <h4 class="benefit_title">Лояльные цены</h4>
                <p class="benfit_sub">
                  Мы стремимся предложить вам конкурентоспособные тарифы,
                  которые соответствуют всем вашим ожиданиям и выделенному
                  бюджету.
                </p>
              </div>
            </swiper-slide>
            <swiper-slide
              class="benefit_card wow fadeInRight"
              data-wow-delay="0.2s"
            >
              <img src="/img/icons/benfits/1.svg" alt="" class="mb-[44px]" />
              <div class="flex flex-col items-start gap-[12px]">
                <h4 class="benefit_title">Долгосрочное сотрудничество</h4>
                <p class="benfit_sub">
                  Не стремимся к краткосрочной прибыли, наша цель — это
                  долгосрочное партнерство и совместное развитие.
                </p>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <div class="white_block_2">
      <p v-if="websiteStore.clients.pending">Loading ...</p>
      <ClientsComponent v-else id="partners" />
      <div id="reviews" class="reviews">
        <div
          class="flex justify-between items-center mb-[56px] max-md:mb-[41px]"
        >
          <h3 class="reviews_title">Отзывы наших клиентов</h3>
          <h2 class="title gap-[9px]"><span>05</span> Наши клиенты</h2>
        </div>
        <div
          class="flex items-center justify-between gap-[80px] mb-[82px] max-md:hidden"
        >
          <p class="reviews_sub">
            <span class="font-semibold text-[#FF2F22]"
              >Мы строим долгосрочные отношения</span
            >
            с нашими клиентами, благодаря нашей прозрачной коммуникации и
            индивидуальному подходу.
          </p>
          <div class="trust_bg_block">
            <img src="/img/Main_page/reviews_bg.png" alt="" class="img" />
          </div>
        </div>
        <p v-if="websiteStore.reviews.pending">Loading...</p>
        <div v-else v-if="isMounted" class="reviews_slider_container relative">
          <button class="reviews_btn-prev">
            <img src="/img/icons/arrow_left_nobg.svg" alt="" />
          </button>
          <button class="reviews_btn-next">
            <img src="/img/icons/arrow_right_nobg.svg" alt="" />
          </button>
          <swiper
            :slidesPerView="'auto'"
            :space-between="21"
            :navigation="reviews_navigation"
            :loop="true"
            :modules="modules"
            :pagination="pagination_comment"
            :autoplay="{
              delay: 2500,
              disableOnInteraction: false,
            }"
            class="reviews_slider"
          >
            <swiper-slide v-for="c in comments" :key="c.id" class="slide">
              <div class="slide_content flex flex-col items-start">
                <div
                  class="flex items-center justify-between gap-[26px] mb-[21px]"
                >
                  <img
                    :src="c.preview"
                    :alt="c.title.rendered"
                    class="name_img"
                  />
                  <div class="flex flex-col items-start gap-[5px]">
                    <h6 class="name">
                      {{ c.title.rendered }}
                    </h6>
                    <p
                      v-thtml="c.excerpt.rendered"
                      class="name_description"
                    ></p>
                  </div>
                </div>
                <p v-thtml="c.content.rendered" class="description"></p>
              </div>
            </swiper-slide>
            <swiper-slide v-for="c in comments" :key="c.id" class="slide">
              <div class="slide_content flex flex-col items-start">
                <div
                  class="flex items-center justify-between gap-[26px] mb-[21px]"
                >
                  <img
                    :src="c.preview"
                    :alt="c.title.rendered"
                    class="name_img"
                  />
                  <div class="flex flex-col items-start gap-[5px]">
                    <h6 class="name">
                      {{ c.title.rendered }}
                    </h6>
                    <p
                      v-thtml="c.excerpt.rendered"
                      class="name_description"
                    ></p>
                  </div>
                </div>
                <p v-thtml="c.content.rendered" class="description"></p>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { EffectFade, Navigation, Autoplay, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
definePageMeta({
  layout: "default",
});
let isMounted = ref(false);
const websiteStore = useWebsiteStore();

const comments = websiteStore.reviews.data;
const pagination = {
  clickable: true,
  renderBullet: function (index, className) {
    return '<span class="' + className + " slider_span " + '">' + "</span>";
  },
};
const pagination_comment = {
  clickable: true,
  renderBullet: function (index, className) {
    return '<span class="' + className + " bg-red-600 " + '">' + "</span>";
  },
};

const reviews_navigation = {
  nextEl: ".reviews_btn-next",
  prevEl: ".reviews_btn-prev",
};
const modules = [Navigation, Autoplay, Pagination, EffectFade];
let mobileSize = ref(false);
let allowTouchMove = ref(false);

const handleResize = () => {
  mobileSize.value = window.innerWidth < 768;
  allowTouchMove.value = window.innerWidth < 768;
};

const popup = () => {
  websiteStore.popup.active = true;
  websiteStore.popup.title = "";
};

onMounted(() => {
  if (process.client) {
    // Проверяем, что код выполняется на клиенте
    allowTouchMove.value = window.innerWidth < 768;
    mobileSize.value = window.innerWidth < 768;
    window.addEventListener("resize", handleResize);
  }
  isMounted.value = true;
});
</script>
<style lang="scss">
@import "../assets/main.scss";
</style>
