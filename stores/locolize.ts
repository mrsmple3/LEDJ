// Импортируем необходимые функции из Pinia
import { defineStore } from "pinia";

// Определяем хранилище
export const useLocolizeStore = defineStore("locolizeStore", {
  // Описываем состояние хранилища
  state: () => ({
    mainPage: {
      ru: {
        offer: {
          title: ["Рекламное агентство", "полного цикла"],
          sub: "Предлагаем комплексные решения для реализации ваших маркетинговых и бизнес-задач",
          aplication: "Оставить заявку",
          span: ["На рынке Узбекистана", "с 2020 года"],
          slider: [
            {
              title: "Индивидуальный подход",
              sub: "Разрабатываем уникальные стратегии для каждого проекта, чтобы обеспечить максимальную эффективность вашего присутствия в медиа-пространстве.",
            },
            {
              title: "Экономия времени и ресурсов",
              sub: "Работая с рекламным агентством полного цикла, вы избегаете необходимости взаимодействия с несколькими поставщиками услуг. Вы получите все необходимые услуги «‎под одной крышей».",
            },
            {
              title: "Комплексный анализ и оптимизация",
              sub: "Агентство, обладая широким спектром услуг, имеет возможность проводить комплексный анализ рекламных кампаний и их эффективности, что позволяет выявлять все сильные и слабые стороны.",
            },
          ],
        },
        about: {
          span: "Об агентстве",
          title: "Ориентируемся на результат",
          description: [
            " — это рекламное агентство полного цикла, которое нацелено на достижение результатов. Мы стремимся к тому, чтобы ваша инвестиция в рекламную кампанию начала приносить прибыль с самого начала нашего сотрудничества и на всех последующих этапах.",
            "Создание оригинальных идей для рекламы, разработка эффективных стратегий и их реализация для успешного продвижения вашего бизнеса — наша ключевая задача.",
            "Мы видим нашу миссию в том, чтобы помогать вам выделиться на рынке, привлечь целевую аудиторию и достичь желаемых результатов в вашем бизнесе.",
          ],
          effective: {
            title: ["Эффективные стратегии ", "продвижения"],
            sub: "Профессиональные решения для успешного продвижения вашего бизнеса.",
          },
        },
        services: {
          title: "Предоставляемые услуги",
          span: "Наши услуги",
          allServices: "Все услуги",
        },
        benefits: {
          span: "Преимущества",
          title: "Надежный партнер в сфере рекламы и маркетинга",
          description:
            "Работая с нами, вы получите единого подрядчика, который отвечает за все процессы, а не целую вереницу узкопрофильных агентств.",
          messages: [
            "Мы отвечаем всем международным требованиям и стандартам качества",
            "Мы строго придерживаемся всех договоренностей и дедлайнов",
            "Наши аккаунт-менеджеры всегда на связи с вами",
            "Специальная система скидок для постоянных клиентов",
          ],
          cards: [
            {
              title: "Комплексный подход",
              sub: "Полностью погружаемся в ваш бизнес, изучаем его, проводим полный анализ и подбираем оптимальную стратегию продвижения.",
            },
            {
              title: "Команда профессионалов",
              sub: "Мы — команда опытных специалистов со стажем, безупречно справляющихся со всеми задачами, возложенными на нас в процессе работы.",
            },
            {
              title: "Лояльные цены",
              sub: "Мы стремимся предложить вам конкурентоспособные тарифы, которые соответствуют всем вашим ожиданиям и выделенному бюджету.",
            },
            {
              title: "Долгосрочное сотрудничество",
              sub: "Не стремимся к краткосрочной прибыли, наша цель — это долгосрочное партнерство и совместное развитие.",
            },
          ],
        },
        reviews: {
          client: {
            title: "Нам доверяют",
            sub: [
              "Обеспечиваем высочайший уровень ",
              "обслуживания и достижение оптимальных результатов для каждого нашего клиента.",
            ],
            span: "Наши клиенты",
          },
          reviews: {
            title: "Отзывы наших клиентов",
            sub: [
              "Мы строим долгосрочные отношения",
              "с нашими клиентами, благодаря нашей прозрачной коммуникации и индивидуальному подходу.",
            ],
            span: "Отзывы клиентов",
          },
        },
        footer: {
          title: "Контакты",
          question: "Возникли вопросы?",
          sub: "Оставьте заявку, заполнив форму, либо позвоните по указанным контактам и мы проконсультируем вас по интересующим вопросам, предоставим полную информацию о наших услугах и ценах.",
          adress: "Адрес: ",
          form: {
            title: "Форма обратной связи",
            inputName: { input: "Ваше имя", span: "Введите Имя" },
            inputPhone: {
              input: "Номер телефона",
              span: "Введите Номер телефона",
            },
            inputCompany: "Компания",
            inputComment: "Комментарий",
            btnSend: "Отправить",
            btnSub:
              "Отправляя данную форму, вы соглашаетесь на обработку персональных данных.",
            copyRight: "© LEDJ MEIDA 2024. Все права защищены.",
            icorp: "Разработано iCORP",
          },
        },
        popup: {
          title: "Оставить заявку",
          inputName: { input: "Ваше имя", span: "Введите Имя" },
          inputPhone: {
            input: "Номер телефона",
            span: "Введите Номер телефона",
          },
          btnSend: "Отправить",
          btnSpan:
            "Отправляя данную форму, вы соглашаетесь на обработку персональных данных.",
        },
      },
      uz: {
        offer: {
          title: ["To'liq siklli", "reklama agentligi"],
          sub: "Sizning marketing va biznes maqsadlaringizni amalga oshirish uchun keng qamrovli yechimlarni taklif qilamiz",
          aplication: "Ariza qoldirish",
          span: ["Oʻzbekiston bozorida", "2020 yildan beri"],
          slider: [
            {
              title: "Individual yondashuv",
              sub: "Sizning media makonda bo'lishingizning maksimal samaradorligini ta'minlash uchun har bir loyiha uchun o'ziga xos strategiyalarni ishlab chiqamiz.",
            },
            {
              title: "Vaqt va resurslarni tejamkorligi",
              sub: "To'liq siklli reklama agentligi bilan ishlash orqali siz bir nechta turdagi xizmat ko'rsatuvchilarga murojaat qilish zaruriyatidan xalos bo'lasiz. Barcha kerakli xizmatlar bir joyda.",
            },
            {
              title: "Kompleks tahlil va optimallashtirish",
              sub: "Agentlik barcha kuchli va zaif tomonlarni aniqlash imkonini beruvchi keng ko'lamli xizmatlarga ega bo'lib,  reklama kampaniyalarini va ularning samaradorligini har tomonlama tahlil qilish imkoniyatiga ega. ",
            },
          ],
        },
        about: {
          span: "Agentlik haqida",
          title: "Natijalarga e'tibor qaratamiz",
          description: [
            " — natijalarga erishishga qaratilgan to'liq siklli reklama agentligi. Sizning reklama kampaniyangizga sarmoyalaringiz hamkorligimizning boshidanoq va keyingi barcha bosqichlarida foyda keltira boshlashini ta'minlashga intilamiz.",
            "Reklama uchun original g'oyalarni yaratish, samarali strategiyalarni ishlab chiqish va biznesingizni muvaffaqiyatli ilgari surish uchun ularni amalga oshirish — bizning asosiy vazifamiz.",
            "Biz o'z missiyamizni bozorda ajralib turish, maqsadli auditoriyangizni jalb qilish va biznesingizda kerakli natijalarga erishishda yordam berish deb bilamiz.",
          ],
          effective: {
            title: ["Samarali biznes reklama ", "strategiyalari"],
            sub: "Biznesingizni muvaffaqiyatli targ'ib qilish uchun professional yechimlar.",
          },
        },
        services: {
          title: "Taqdim etiladigan xizmatlar",
          span: "Bizning xizmatlarimiz",
          allServices: "Barcha xizmatlar",
        },
        benefits: {
          span: "Afzalliklar",
          title: "Reklama va marketingda ishonchli hamkor",
          description:
            "Biz bilan ishlashda siz tor doiradagi agentliklarning butun guruhini emas, balki barcha jarayonlar uchun mas'ul bo'lgan yagona pudratchini hamkor qilasiz.",
          messages: [
            "Biz barcha xalqaro talablar va sifat standartlariga javob beramiz",
            "Biz barcha kelishuvlar va muddatlarga qat'iy rioya qilamiz",
            "Bizning mas'ul menejerlarimiz doimo siz bilan aloqada",
            "Doimiy mijozlar uchun maxsus chegirmalar tizimi",
          ],
          cards: [
            {
              title: "Kompleks yondashuv",
              sub: "Biznesingizga to'liq kirib boramiz, uni o'rganib, to'liq tahlil qilamiz va optimal reklama strategiyasini tanlaymiz.",
            },
            {
              title: "Professionallar jamoasi",
              sub: "Biz — ish jarayonida zimmamizga yuklatilgan barcha vazifalarni bekamu ko'st bajara oladigan tajribali mutaxassislar jamoasimiz.",
            },
            {
              title: "Sodiq narxlar",
              sub: "Barcha kutganlaringizga va ajratilgan budjetga mos keladigan raqobatbardosh tariflarni taklif qilishga intilamiz.",
            },
            {
              title: "Uzoq muddatli hamkorlik",
              sub: "Biz qisqa muddatli foyda olishga emas, yagona maqsadimiz bo'lgan uzoq muddatli hamkorlik va birgalikdagi rivojlanishga intilamiz.",
            },
          ],
        },
        reviews: {
          client: {
            title: "Bizga ishonishadi",
            sub: [
              "Biz eng yuqori darajadagi",
              "xizmatni taqdim etamiz va har bir mijozimiz uchun maqbul natijalarga erishamiz.",
            ],
            span: "Bizning mijozlarimiz",
          },
          reviews: {
            title: "Mijozlarning fikrlari",
            sub: [
              "Shaffof muloqotimiz va shaxsiy",
              "yondashuvimiz tufayli mijozlarimiz bilan uzoq muddatli munosabatlarni o'rnatamiz.",
            ],
            span: "Mijozlarning fikrlari",
          },
        },
        footer: {
          title: "Aloqa uchun",
          question: "Savollaringiz bormi?",
          sub: "Shaklni to'ldirish orqali so'rov qoldiring yoki ko'rsatilgan kontaktlarga qo'ng'iroq qiling va sizni qiziqtirgan masalalar bo'yicha maslahat beramiz, xizmatlarimiz va narxlarimiz haqida to'liq ma'lumot olasiz.",
          adress: "Manzil: ",
          form: {
            title: "Qayta aloqa shakli",
            inputName: { input: "Ismingiz", span: "Ismingizni kiriting" },
            inputPhone: {
              input: "Telefon raqamingiz",
              span: "Telefon raqamingizni kiriting",
            },
            inputCompany: "Kompaniyangiz",
            inputComment: "Sharhingiz",
            btnSend: "Yuborish",
            btnSub:
              "Ushbu shaklni yuborish orqali siz shaxsiy ma'lumotlarni qayta ishlanishiga rozilik bildirasiz.",
            copyRight: "© LEDJ MEIDA 2024. Barcha huquqlar himoyalangan.",
            icorp: "iCORP tomonidan ishlab chiqilgan",
          },
        },
        popup: {
          title: "Ariza qoldirish",
          inputName: { input: "Ismingiz", span: "Ismingizni kiriting" },
          inputPhone: {
            input: "Telefon raqamingiz",
            span: "Telefon raqamingizni kiriting",
          },
          btnSend: "Yuborish",
          btnSpan:
            "Ushbu shaklni yuborish orqali siz shaxsiy ma'lumotlarni qayta ishlanishiga rozilik bildirasiz.",
        },
      },
      en: {
        offer: {
          title: ["Full cycle ", "advertising agency"],
          sub: "We offer comprehensive solutions to realize your marketing and business objectives",
          aplication: "Leave a request",
          span: ["On the Uzbek market", "since 2020"],
          slider: [
            {
              title: "Individual approach",
              sub: "We develop unique strategies for each project to maximize the effectiveness of your presence in the media space.",
            },
            {
              title: "Time and resource savings",
              sub: 'By working with a full-service advertising agency, you avoid having to deal with multiple service providers. You get all the services you need "all under the same roof".',
            },
            {
              title: "Integrated analysis and optimization",
              sub: "The agency, having a wide range of services, has the ability to conduct a comprehensive analysis of advertising campaigns and their effectiveness, which allows you to identify all the strengths and weaknesses.",
            },
          ],
        },
        about: {
          span: "About the Agency",
          title: "Results-oriented",
          description: [
            "is a full-service advertising agency that is focused on delivering results. We strive to ensure that your investment in an advertising campaign starts to bring profit from the very beginning of our cooperation and at all subsequent stages.",
            "Creating original advertising ideas, developing effective strategies and implementing them to successfully promote your business is our key task.",
            "We see our mission in helping you stand out in the market, attract the target audience and achieve the desired results in your business.",
          ],
          effective: {
            title: ["Effective promotion", "strategies"],
            sub: "Professional solutions for successful promotion of your business.",
          },
        },
        services: {
          title: "Services provided",
          span: "Our services",
          allServices: "All services",
        },
        benefits: {
          span: "Advantages",
          title: "Reliable partner in advertising and marketing",
          description:
            "Working with us, you will get a single contractor who is responsible for all processes, rather than a string of specialized agencies.",
          messages: [
            "We meet all international requirements and quality standards",
            "We strictly adhere to all agreements and deadlines",
            "Our account managers are always in touch with you",
            "Special discount system for regular clients",
          ],
          cards: [
            {
              title: "Comprehensive approach",
              sub: "We fully immerse ourselves in your business, study it, fully analyze it and choose the best promotion strategy.",
            },
            {
              title: "Professional team",
              sub: "We are a team of experienced professionals with a track record of flawlessly handling all the tasks assigned to us in the process.",
            },
            {
              title: "Loyal Rates",
              sub: "We strive to offer you competitive rates that meet all your expectations and allocated budget.",
            },
            {
              title: "Long-term cooperation",
              sub: "We do not seek short-term profits, our goal is long-term partnership and co-development.",
            },
          ],
        },
        reviews: {
          client: {
            title: "We are trusted",
            sub: [
              "Providing the highest level",
              "of service and achieving optimal results for each of our clients.",
            ],
            span: "Our customers",
          },
          reviews: {
            title: "Feedback from our customers",
            sub: [
              "We build long-term relationships ",
              "with our clients through our transparent communication and personalized approach.",
            ],
            span: "Customer feedback",
          },
        },
        footer: {
          title: "Contacts",
          question: "Any questions?",
          sub: "Leave a request by filling out the form, or call on the specified contacts and we will advise you on the questions of interest, provide full information about our services and prices.",
          adress: "Address: ",
          form: {
            title: "Feedback form",
            inputName: { input: "Your Name", span: "Enter your name" },
            inputPhone: { input: "Phone Number", span: "Enter phone number" },
            inputCompany: "Company",
            inputComment: "Comment",
            btnSend: "Submit",
            btnSub:
              "By submitting this form, you agree to the processing of personal data.",
            copyRight: "© LEDJ MEIDA 2024. All rights reserved.",
            icorp: "Developed by iCORP",
          },
        },
        popup: {
          title: "Leave a request",
          inputName: { input: "Your Name", span: "Enter your name" },
          inputPhone: { input: "Phone Number", span: "Enter phone number" },
          btnSend: "Submit",
          btnSpan:
            "By submitting this form, you agree to the processing of personal data.",
        },
      },
    },
    header: {
      ru: {
        menu: {
          main: "Главная",
          services: "Услуги ",
          about: "Об агентстве",
          benefits: "Преимущества",
          partners: "Партнеры",
          reviews: "Отзывы ",
          contacts: "Контакты",
          btn: "Оставить заявку",
        },
        choose: "Выберите услугу",
      },
      uz: {
        menu: {
          main: "Bosh sahifa",
          services: "Xizmatlar ",
          about: "Agentlik haqida",
          benefits: "Afzalliklar",
          partners: "Hamkorklar",
          reviews: "Sharhlar",
          contacts: "Aloqa uchun",
          btn: "Ariza qoldirish",
        },
        choose: "Xizmatni tanglang",
      },
      en: {
        menu: {
          main: "Home",
          services: "Services",
          about: "About the Agency",
          benefits: "Benefits",
          partners: "Partners",
          reviews: "Reviews",
          contacts: "Contacts",
          btn: "Leave a Request",
        },
        choose: "Choose a service",
      },
    },
    services: {
      ru: {
        suggestions: "Предоставляемые услуги",
        contactsUs: {
          title: "Связаться с нами",
          sub: "Оставьте заявку, зполнив форму, и мы свяжемся с вами в самое ближайшее время",
          btn: "Заказать услугу",
        },
        add: {
          span: " Ориентируемся на результат",
          title: "Выведем ваш бренд на новый уровень",
        },
        free: {
          title: "Бесплатноя консультация",
        },
        maps: {
          adress: "Адрес:",
          size: "Размер:",
          price: "Стоимость:",
        },
        card: {
          span: "Рекламное продвижение",
          description:
            "Хорошая реклама формирует культуру общества, воспитывает хороший вкус и вдохновляет людей",
        },
      },
      uz: {
        suggestions: "Taqdim etiladigan xizmatlar",
        contactsUs: {
          title: "Biz bilan bpg'laning",
          sub: "Shaklni to'ldirish orqali so'rov qoldiring va biz tez orada siz bilan bog'lanamiz",
          btn: "Buyurtma berish",
        },
        add: {
          span: " Biz natijaga e'tibor qaratamiz",
          title: "Brendingizni keyingi bosqichga olib chiqamiz",
        },
        free: {
          title: "Bepul maslahat",
        },
        maps: {
          adress: "Manzil:",
          size: "Hajmi:",
          price: "Narxi:",
        },
        card: {
          span: "Reklama rivojlantirish",
          description:
            "Yaxshi reklama jamiyat madaniyatini shakllantiradi, yaxshi didni tarbiyalaydi va odamlarni ilhomlantiradi",
        },
      },
      en: {
        suggestions: "Services provided",
        contactsUs: {
          title: "Contact us",
          sub: "Leave a request by filling out the form, and we will contact you as soon as possible",
          btn: "Order a service",
        },
        add: {
          span: " We focus on the result",
          title: "We will take your brand to a new level",
        },
        free: {
          title: "Free consultation",
        },
        maps: {
          adress: "Adress:",
          size: "Size:",
          price: "Price:",
        },
        card: {
          span: "Advertising promotion",
          description:
            "Good advertising shapes the culture of society, fosters good taste and inspires people",
        },
      },
    },
    currentMainPage: null as any,
    currentHeader: null as any,
    currentService: null as any,
  }),
  getters: {},
  actions: {
    setLocolize(lang = "ru") {
      this.currentMainPage = useLocaleText(this.mainPage as any, lang);
      this.currentHeader = useLocaleText(this.header as any, lang);
      this.currentService = useLocaleText(this.services as any, lang);
    },
  },
});
