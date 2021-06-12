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
    MAIN_PAGE: {},
    CERAMIC_MEMBRANES_PAGE: {
      IMG: "",
      TITLE: "",
      DESCRIPTION: "",
      TEXT: '',
      CONTENT: {
        CONTENT_BLOCK: {
          IMG: '',
          TITLE: '',
          DESCRIPTION: '',
          TEXT: '',
          TO: ''
        },
        OUR_SERVICE: {
          TITLE: '',
          EXTRA_TITLE: '',
          TEXT: '',
          ICONS: [
            {
              ICON: '',
              DESCRIPTION: ''
            },
            {
              ICON: '',
              DESCRIPTION: ''
            },
            {
              ICON: '',
              DESCRIPTION: ''
            },
          ]
        },
        TAB: [
          {
            BUTTON_NAME: '',
            IMG: '',
            EXTRA_TITLE: '',
            TITLE: '',
            TEXT: ''
          },
          {
            BUTTON_NAME: '',
            IMG: '',
            EXTRA_TITLE: '',
            TITLE: '',
            TEXT: ''
          },
        ],
        CHARACTERISTIC: [
          {
            TITLE: '',
            TEXT: ''
          },
          {
            TITLE: '',
            TEXT: ''
          },
          {
            TITLE: '',
            TEXT: ''
          },
          {
            TITLE: '',
            TEXT: ''
          }
        ]
      }
    },
    POROUS_CERAMICS_PAGE: {
      IMG: "",
      TITLE: "",
      DESCRIPTION: "",
      TEXT: '',
      CONTENT: {
        CONTENT_BLOCK: {
          IMG: '',
          TITLE: '',
          DESCRIPTION: '',
          TEXT: '',
          TO: ''
        },
        OUR_SERVICE: {
          TITLE: '',
          EXTRA_TITLE: '',
          TEXT: '',
          ICONS: [
            {
              ICON: '',
              DESCRIPTION: ''
            },
            {
              ICON: '',
              DESCRIPTION: ''
            },
            {
              ICON: '',
              DESCRIPTION: ''
            },
          ]
        },
        TAB: [
          {
            BUTTON_NAME: '',
            IMG: '',
            EXTRA_TITLE: '',
            TITLE: '',
            TEXT: ''
          },
          {
            BUTTON_NAME: '',
            IMG: '',
            EXTRA_TITLE: '',
            TITLE: '',
            TEXT: ''
          },
        ],
        CHARACTERISTIC: [
          {
            TITLE: '',
            TEXT: ''
          },
          {
            TITLE: '',
            TEXT: ''
          },
          {
            TITLE: '',
            TEXT: ''
          },
          {
            TITLE: '',
            TEXT: ''
          }
        ]
      }
    },
    RESEARCH_PAGE: {
      IMG: "",
      TITLE: "",
      DESCRIPTION: "",
      TEXT: '',
      CONTENT: {
        CONTENT_BLOCK: {
          IMG: '',
          TITLE: '',
          DESCRIPTION: '',
          TEXT: '',
          TO: ''
        },
        OUR_SERVICE: {
          TITLE: '',
          EXTRA_TITLE: '',
          TEXT: '',
          ICONS: [
            {
              ICON: '',
              DESCRIPTION: ''
            },
            {
              ICON: '',
              DESCRIPTION: ''
            },
            {
              ICON: '',
              DESCRIPTION: ''
            },
          ]
        },
        TAB: [
          {
            BUTTON_NAME: '',
            IMG: '',
            EXTRA_TITLE: '',
            TITLE: '',
            TEXT: ''
          },
          {
            BUTTON_NAME: '',
            IMG: '',
            EXTRA_TITLE: '',
            TITLE: '',
            TEXT: ''
          },
        ],
      }
    },
    WATER_TREATMENT_PAGE: {
      IMG: "",
      TITLE: "",
      DESCRIPTION: "",
      TEXT: '',
      CONTENT: {
        CONTENT_BLOCK: {
          IMG: '',
          TITLE: '',
          DESCRIPTION: '',
          TEXT: '',
          TO: ''
        },
        PARTNERS_BLOCK: {
          IMG: '',
          TITLE: '',
          TEXT: '',
          TO: ''
        },
        TAB: [
          {
            BUTTON_NAME: '',
            IMG: '',
            EXTRA_TITLE: '',
            TITLE: '',
            TEXT: ''
          },
          {
            BUTTON_NAME: '',
            IMG: '',
            EXTRA_TITLE: '',
            TITLE: '',
            TEXT: ''
          },
        ],
        CHARACTERISTIC: [
          {
            TITLE: '',
            TEXT: ''
          },
          {
            TITLE: '',
            TEXT: ''
          },
          {
            TITLE: '',
            TEXT: ''
          },
          {
            TITLE: '',
            TEXT: ''
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
  }
};
