export const state = () => ({
  CONTACT_INFO: {
    coords: [55.760798, 37.678802],
    adress: "Москва,  Набережная академика Туполева, дом 15, корпус 28",
    email: "info@ceramicfilter.ru",
    tel: [
      {
        prof: "Коммерческий директор",
        name: "Адамович Владимир Игоревич",
        tel: "+7 (968)-968-07-80",
        telLink: "tel:+79689680780",
        watsapp: true,
        telegramm: true
      },
      {
        prof: "Директор по науке",
        name: "Покровский Данила Данилович",
        tel: "+7 (916)-681-80-91",
        telLink: "tel:+79166818091",
        watsapp: false,
        telegramm: false
      },
      {
        prof: "Руководитель производства",
        name: "Якушев Денис Анатольевич",
        tel: "+7 (910)-457-72-47",
        telLink: "tel:+79104577247",
        watsapp: true,
        telegramm: false
      }
    ]
  },
  LINKS_THIS_SITE: {
    SERVICE: [
      {
        title: "Главная страница",
        to: "/"
      },
      {
        title: "Пористая керамика",
        to: "/porousCeramics"
      },
      {
        title: "Керамические мембраны",
        to: "/ceramicMembranes"
      },
      {
        title: "Современные технологии водоподготовки",
        to: "/waterTreatment"
      },
      {
        title: "Лабораторные исследования разделения жидких растворов",
        to: "/research"
      }
    ],
    DOCUMENTATIONS: [
      {
        title: "Документация",
        to: "/documentation"
      },
      {
        title: "Статьи",
        to: "/article-cards"
      },
      {
        title: "Наши партнеры",
        to: "/partners"
      }
    ],
    CONTACT: [
      {
        title: "Контакты",
        to: "/contact"
      }
    ]
  },
  CONTENT_FROM_SITE: {
    MAIN_PAGE: {
      DESCRIPTION:
        "Our new Ultium Platform will help put everyone in an EV, moving us closer to a world with zero emissions.",
      CONTENT: {
        CAROUSEL: [
          {
            ID: "1",
            IMG: "img/porous_ceramics/firstImg.jpg",
            TITLE: "Пористая керамика",
            TEXT:
              "Разработка и производство керамических фильтров для разделения и очистки пара и газообразных сред.",
            TO: "/porousCeramics"
          },
          {
            ID: "2",
            IMG: "img/ceramic_membranes/firstImg.jpg",
            TITLE: "Керамические мембраны",
            TEXT:
              "Производство микро и ультрафильтрационных керамических мембранных фильтров. Проектирование и изготовление экспериментальных и промышленных установок микро и ультрафильтрации. Консультации по вопросам мембранного разделения.",
            TO: "/ceramicMembranes"
          },
          {
            ID: "3",
            IMG: "img/water_treatment/firstImg.jpg",
            TITLE: "Современные технологии водоподготовки",
            TEXT:
              "Проектирование и производство стационарных и мобильных установок водоподготовки на основе технологии озоноультрафильтрации с применением  керамических мембранных фильтроэлементов.",
            TO: "/waterTreatment"
          },
          {
            ID: "4",
            IMG: "img/research/firstImg.jpg",
            TITLE: "Лабораторные исследования разделения растворов",
            TEXT:
              "Проведение лабораторных испытаний мембранного разделения жидкостей. Очистки и  концентрирования содержащихся веществ. Подбор и определение производительности керамических мембран на продукте заказчика. Исследования и разработка способов регенерации мембранных фильтров.",
            TO: "/research"
          }
        ],
        CARDS: [
          {
            ID: "1",
            IMG: "img/article_cards/card_one.jpg",
            TITLE: "ПОРИСТАЯ КЕРАМИКА",
            TEXT:
              "Разработка и выпуск в промышленных масштабах высокопроизводительных керамических фильтров очистки высокотемпературных химически агрессивных и эрозионно-активных газовых сред и пара",
            TO: "/card_one"
          },
          {
            ID: "2",
            IMG: "img/article_cards/card_two.jpg",
            TITLE: "КЕРАМИЧЕСКИЕ МЕМБРАНЫ",
            TEXT:
              "ООО Керамикфильтр единственный в России разработчик и производитель керамических мембран",
            TO: "/card_two"
          },
          {
            ID: "3",
            IMG: "img/article_cards/card_three.jpg",
            TITLE: "СИСТЕМЫ ВОДОПОДГОТОВКИ",
            TEXT:
              "Уникальная высокопроизводительная озоно-мембранная технология очистки воды артезианских и поверхностных источников",
            TO: "/card_three"
          }
        ],
        CONTENT_BLOCK: {
          IMG: "img/main_page/buran.jpg",
          TITLE: "О НАС",
          DESCRIPTION: "Дополнительная информация",
          TEXT:
            'Организация основана в 1990 году специалистами по высокопрочным и тугоплавким волокнам, работавшими в военно-космическом проекте "Буран".\nБолее 30 лет мы разрабатываем и производим керамические мембранные  фильтры из супертонких керамических волокон и порошков для промышленных систем очистки жидкостей и газов и лабораторной практики.\nНыне мы остались единственным отечественным предприятием,  выпускающим керамические мембраны.\nНаши керамические микро- и ультрафильтры успешно работают на многих отечественных и зарубежных предприятиях. За последние годы мы увеличили производство мембран и установок фильтрации более чем в 3 раза - наши  фильтры соответствуют оптимальному соотношению цены и качества.\nНаш научный и производственный потенциал позволяет разрабатывать и внедрять новые типы керамических мембран, расширять области их применения, совершенствовать мембранные технологии разделения, очистки и концентрирования.',
          TO: "/article"
        },
        PARTNERS_BLOCK: {
          TITLE: "Блок партнерский",
          DESCRIPTION: "Дополнительная информация",
          TEXT:
            "Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum",
          TO: "/partners"
        },
        LAST_CONTENT_BLOCK: {
          IMG: "img/main_page/content-block-two.jpg",
          TITLE: "Название блока",
          DESCRIPTION: " Дополнительная информация",
          TEXT:
            "Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Haadasdsadsadsadmpden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum",
          TO: "/article"
        }
      }
    },
    CERAMIC_MEMBRANES_PAGE: {
      IMG: "img/ceramic_membranes/firsImg.jpg",
      TITLE: "Керамические мембраны",
      DESCRIPTION:
        "Our new Ultium Platform will help put everyone in an EV, moving us closer to a world with zero emissions.",
      TEXT:
        "Производство микро и ультрафильтрационных керамических мембранных фильтров. Проектирование и изготовление экспериментальных и промышленных установок микро и ультрафильтрации. Консультации по вопросам мембранного разделения.",
      CONTENT: {
        CONTENT_BLOCK: {
          IMG: "img/main_page/content-block-one.jpg",
          TITLE: "Название блока",
          DESCRIPTION: "Дополнительная информация",
          TEXT:
            "Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Haadasdsadsadsadmpden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum",
          TO: "/article"
        },
        OUR_SERVICE: {
          TITLE: "Почему керамическая мембрана?",
          EXTRA_TITLE: "НАШЕ ПРОИЗВОДСТВО",
          TEXT:
            "We believe that autonomous vehicles will have enormous potential benefits for society in the form of increased safety and access to transportation. Since we believe that all AVs should be EVs, these efforts will clearly advance our vision of zero crashes, zero emissions and zero congestion, and help us build a more sustainable and accessible world.",
          ICONS: [
            {
              ICON: "mdi-earth",
              DESCRIPTION: "Данное описание"
            },
            {
              ICON: "mdi-finance",
              DESCRIPTION: "Данное описание"
            },
            {
              ICON: "mdi-fire",
              DESCRIPTION: "Данное описание"
            }
          ]
        },
        TAB: [
          {
            BUTTON_NAME: "Название кнопки 1",
            IMG: "img/components/tabs/tab_one.jpg",
            EXTRA_TITLE: "НАШЕ ПРОИЗВОДСТВО СЕГОДНЯ",
            TITLE: "Возможно недавнее нововведение в производстве",
            TEXT:
              "Meet the Cruise Origin. You wont see a steering wheel, rearview mirror or pedals, but you will see something entirely new—a vehicle with an experience purely designed around the riders. And one that will be built at one of GM’s most advanced assembly plants in North America, Factory ZERO. Factory ZERO will become the first U.S. automotive plant to install Verizon’s 5G Ultra-Wideband technology. Key benefits of 5G in a manufacturing plant include reliability, speed and sheer scale."
          },
          {
            BUTTON_NAME: "Название кнопки 2",
            IMG: "img/components/tabs/tab_two.jpg",
            EXTRA_TITLE: "НАШЕ ПРОИЗВОДСТВО СЕГОДНЯ",
            TITLE: "Возможно недавнее нововведение в производстве",
            TEXT:
              "Meet the Cruise Origin. You wont see a steering wheel, rearview mirror or pedals, but you will see something entirely new—a vehicle with an experience purely designed around the riders. And one that will be built at one of GM’s most advanced assembly plants in North America, Factory ZERO. Factory ZERO will become the first U.S. automotive plant to install Verizon’s 5G Ultra-Wideband technology. Key benefits of 5G in a manufacturing plant include reliability, speed and sheer scale."
          }
        ],
        CHARACTERISTIC: [
          {
            TITLE: "Техническая часть",
            TEXT:
              "Autonomous vehicles are already here. Cruise is currently testing AVs on the streets of San Francisco for trips that include ridesharing and deliveries."
          },
          {
            TITLE: "Техническая часть",
            TEXT:
              "Technologies such as LIDAR, which uses laser light technology, help AVs see other vehicles on the road, just as they see pedestrians and bicyclists."
          },
          {
            TITLE: "Техническая часть",
            TEXT:
              "Our vision of AVs is all-electric—with zero tailpipe emissions."
          },
          {
            TITLE: "Техническая часть",
            TEXT:
              "Because human error is the cause of most serious vehicle crashes today, we believe AV technology can help reduce the incidence of crashes."
          }
        ]
      }
    },
    POROUS_CERAMICS_PAGE: {
      IMG: "img/porous_ceramics/firstImg.jpg",
      TITLE: "Пористая керамика",
      DESCRIPTION:
        "Our new Ultium Platform will help put everyone in an EV, moving us closer to a world with zero emissions.",
      TEXT:
        "Разработка и производство керамических фильтров для разделения и очистки жидких и газообразных сред!",
      CONTENT: {
        CONTENT_BLOCK: {
          IMG: "img/main_page/content-block-one.jpg",
          TITLE: "Название блока",
          DESCRIPTION: "Дополнительная информация",
          TEXT:
            "Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Haadasdsadsadsadmpden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum",
          TO: "/article"
        },
        OUR_SERVICE: {
          TITLE: "Почему керамическая мембрана?",
          EXTRA_TITLE: "НАШЕ ПРОИЗВОДСТВО",
          TEXT:
            "We believe that autonomous vehicles will have enormous potential benefits for society in the form of increased safety and access to transportation. Since we believe that all AVs should be EVs, these efforts will clearly advance our vision of zero crashes, zero emissions and zero congestion, and help us build a more sustainable and accessible world.",
          ICONS: [
            {
              ICON: "mdi-earth",
              DESCRIPTION: "Данное описание"
            },
            {
              ICON: "mdi-finance",
              DESCRIPTION: "Данное описание"
            },
            {
              ICON: "mdi-fire",
              DESCRIPTION: "Данное описание"
            }
          ]
        },
        TAB: [
          {
            BUTTON_NAME: "Название кнопки 1",
            IMG: "img/components/tabs/tab_one.jpg",
            EXTRA_TITLE: "НАШЕ ПРОИЗВОДСТВО СЕГОДНЯ",
            TITLE: "Возможно недавнее нововведение в производстве",
            TEXT:
              "Meet the Cruise Origin. You wont see a steering wheel, rearview mirror or pedals, but you will see something entirely new—a vehicle with an experience purely designed around the riders. And one that will be built at one of GM’s most advanced assembly plants in North America, Factory ZERO. Factory ZERO will become the first U.S. automotive plant to install Verizon’s 5G Ultra-Wideband technology. Key benefits of 5G in a manufacturing plant include reliability, speed and sheer scale."
          },
          {
            BUTTON_NAME: "Название кнопки 2",
            IMG: "img/components/tabs/tab_one.jpg",
            EXTRA_TITLE: "НАШЕ ПРОИЗВОДСТВО СЕГОДНЯ",
            TITLE: "Возможно недавнее нововведение в производстве",
            TEXT:
              "Meet the Cruise Origin. You wont see a steering wheel, rearview mirror or pedals, but you will see something entirely new—a vehicle with an experience purely designed around the riders. And one that will be built at one of GM’s most advanced assembly plants in North America, Factory ZERO. Factory ZERO will become the first U.S. automotive plant to install Verizon’s 5G Ultra-Wideband technology. Key benefits of 5G in a manufacturing plant include reliability, speed and sheer scale."
          }
        ],
        CHARACTERISTIC: [
          {
            TITLE: "Техническая часть",
            TEXT:
              "Autonomous vehicles are already here. Cruise is currently testing AVs on the streets of San Francisco for trips that include ridesharing and deliveries."
          },
          {
            TITLE: "Техническая часть",
            TEXT:
              "Technologies such as LIDAR, which uses laser light technology, help AVs see other vehicles on the road, just as they see pedestrians and bicyclists."
          },
          {
            TITLE: "Техническая часть",
            TEXT:
              "Our vision of AVs is all-electric—with zero tailpipe emissions."
          },
          {
            TITLE: "Техническая часть",
            TEXT:
              "Because human error is the cause of most serious vehicle crashes today, we believe AV technology can help reduce the incidence of crashes."
          }
        ]
      }
    },
    RESEARCH_PAGE: {
      IMG: "img/research/firstImg.jpg",
      TITLE: "Лабораторные исследования разделения жидких растворов",
      DESCRIPTION:
        "Our new Ultium Platform will help put everyone in an EV, moving us closer to a world with zero emissions.",
      TEXT:
        "Проведение лабораторных испытаний мембранного разделения и концентрирования жидких растворов. Подбор и определение производительности керамических мембран на продукте заказчика. Исследования и разработка способов регенерации мембранных фильтров.",
      CONTENT: {
        CONTENT_BLOCK: {
          IMG: "img/main_page/content-block-one.jpg",
          TITLE: "Название блока",
          DESCRIPTION: "Дополнительная информация",
          TEXT:
            "Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Haadasdsadsadsadmpden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum",
          TO: "/article"
        },
        OUR_SERVICE: {
          TITLE: "Почему керамическая мембрана?",
          EXTRA_TITLE: "НАШЕ ПРОИЗВОДСТВО",
          TEXT:
            "We believe that autonomous vehicles will have enormous potential benefits for society in the form of increased safety and access to transportation. Since we believe that all AVs should be EVs, these efforts will clearly advance our vision of zero crashes, zero emissions and zero congestion, and help us build a more sustainable and accessible world.",
          ICONS: [
            {
              ICON: "mdi-earth",
              DESCRIPTION: "Данное описание"
            },
            {
              ICON: "mdi-finance",
              DESCRIPTION: "Данное описание"
            },
            {
              ICON: "mdi-fire",
              DESCRIPTION: "Данное описание"
            }
          ]
        },
        TAB: [
          {
            BUTTON_NAME: "Название кнопки 1",
            IMG: "img/components/tabs/tab_one.jpg",
            EXTRA_TITLE: "НАШЕ ПРОИЗВОДСТВО СЕГОДНЯ",
            TITLE: "Возможно недавнее нововведение в производстве",
            TEXT:
              "Meet the Cruise Origin. You wont see a steering wheel, rearview mirror or pedals, but you will see something entirely new—a vehicle with an experience purely designed around the riders. And one that will be built at one of GM’s most advanced assembly plants in North America, Factory ZERO. Factory ZERO will become the first U.S. automotive plant to install Verizon’s 5G Ultra-Wideband technology. Key benefits of 5G in a manufacturing plant include reliability, speed and sheer scale."
          },
          {
            BUTTON_NAME: "Название кнопки 2",
            IMG: "img/components/tabs/tab_one.jpg",
            EXTRA_TITLE: "НАШЕ ПРОИЗВОДСТВО СЕГОДНЯ",
            TITLE: "Возможно недавнее нововведение в производстве",
            TEXT:
              "Meet the Cruise Origin. You wont see a steering wheel, rearview mirror or pedals, but you will see something entirely new—a vehicle with an experience purely designed around the riders. And one that will be built at one of GM’s most advanced assembly plants in North America, Factory ZERO. Factory ZERO will become the first U.S. automotive plant to install Verizon’s 5G Ultra-Wideband technology. Key benefits of 5G in a manufacturing plant include reliability, speed and sheer scale."
          }
        ]
      }
    },
    WATER_TREATMENT_PAGE: {
      IMG: "img/water_treatment/firstImg.jpg",
      TITLE: "Современные технологии водоподготовки",
      DESCRIPTION:
        "Our new Ultium Platform will help put everyone in an EV, moving us closer to a world with zero emissions.",
      TEXT:
        "Проектирование и производство стационарных и мобильных установок водоподготовки на основе технологии озоноультрафильтрации с применением мембранных фильтроэлементов.",
      CONTENT: {
        CONTENT_BLOCK: {
          IMG: "img/main_page/content-block-one.jpg",
          TITLE: "Название блока",
          DESCRIPTION: "Дополнительная информация",
          TEXT:
            "Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Haadasdsadsadsadmpden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum",
          TO: "/article"
        },
        PARTNERS_BLOCK: {
          TITLE: "Основные направления производства",
          DESCRIPTION: "Дополнительная информация",
          TEXT:
            "Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum",
          TO: "/partners"
        },
        TAB: [
          {
            BUTTON_NAME: "Название кнопки 1",
            IMG: "img/components/tabs/tab_one.jpg",
            EXTRA_TITLE: "НАШЕ ПРОИЗВОДСТВО СЕГОДНЯ",
            TITLE: "Возможно недавнее нововведение в производстве",
            TEXT:
              "Meet the Cruise Origin. You wont see a steering wheel, rearview mirror or pedals, but you will see something entirely new—a vehicle with an experience purely designed around the riders. And one that will be built at one of GM’s most advanced assembly plants in North America, Factory ZERO. Factory ZERO will become the first U.S. automotive plant to install Verizon’s 5G Ultra-Wideband technology. Key benefits of 5G in a manufacturing plant include reliability, speed and sheer scale."
          },
          {
            BUTTON_NAME: "Название кнопки 2",
            IMG: "img/components/tabs/tab_one.jpg",
            EXTRA_TITLE: "НАШЕ ПРОИЗВОДСТВО СЕГОДНЯ",
            TITLE: "Возможно недавнее нововведение в производстве",
            TEXT:
              "Meet the Cruise Origin. You wont see a steering wheel, rearview mirror or pedals, but you will see something entirely new—a vehicle with an experience purely designed around the riders. And one that will be built at one of GM’s most advanced assembly plants in North America, Factory ZERO. Factory ZERO will become the first U.S. automotive plant to install Verizon’s 5G Ultra-Wideband technology. Key benefits of 5G in a manufacturing plant include reliability, speed and sheer scale."
          }
        ],
        CHARACTERISTIC: [
          {
            TITLE: "Техническая часть",
            TEXT:
              "Autonomous vehicles are already here. Cruise is currently testing AVs on the streets of San Francisco for trips that include ridesharing and deliveries."
          },
          {
            TITLE: "Техническая часть",
            TEXT:
              "Technologies such as LIDAR, which uses laser light technology, help AVs see other vehicles on the road, just as they see pedestrians and bicyclists."
          },
          {
            TITLE: "Техническая часть",
            TEXT:
              "Our vision of AVs is all-electric—with zero tailpipe emissions."
          },
          {
            TITLE: "Техническая часть",
            TEXT:
              "Because human error is the cause of most serious vehicle crashes today, we believe AV technology can help reduce the incidence of crashes."
          }
        ]
      }
    },
    PARTNERS_PAGE: {},
    ARTICLE_PAGE: {},
    ARTICLE_CARDS: {
      CARDS_ONE: {},
      CARDS_TWO: {},
      CARDS_THREE: {}
    },
    COMPONENTS: {
      TIME_LINE: {},
      MULTIPLE_CAROUSEL: {},
      SOCIAL_LINKS: []
    }
  }
});

export const mutations = {};

export const actions = {
  loadContent({ commit }, payload) {
    console.log(payload);
  }
};

export const getters = {
  SAVE_CONTACT_INFO(state) {
    return state.CONTACT_INFO;
  },
  GET_LINKS(state) {
    return state.LINKS_THIS_SITE;
  },
  GET_CONTENT_ALL(state) {
    return state.CONTENT_FROM_SITE;
  }
};
