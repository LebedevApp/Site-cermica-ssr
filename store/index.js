class Partner {
  constructor (name, img, article) {
    this.name = name,
    this.img = img,
    this.article = article
  }
}


export const state = () => ({
  database: null,
  contact_info: {
    img: "img/contact/contact-img.jpg",
    name: "contact",
    title: "Контактная информация компании",
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
  links_menu: {
    service: [
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
        title: "Лабораторные исследования разделения жидких сред",
        to: "/research"
      }
    ],
    documentation: [
      {
        title: "Документация",
        to: "/documentation"
      },
      {
        title: "Статьи",
        to: "/article"
      },
      //{
      //  title: "Наши партнеры",
      //  to: "/partners"
      //}
    ],
    contact: [
      {
        title: "Контакты",
        to: "/contact"
      }
    ]
  },
  partners: [
    {
      name: 'mvd',
      img: 'img/logo/mvd.png'
    },
    {
      name: 'mvd',
      img: 'img/logo/mvd.png'
    },
    {
      name: 'mvd',
      img: 'img/logo/mvd.png'
    },
    {
      name: 'mvd',
      img: 'img/logo/mvd.png'
    },
    {
      name: 'mvd',
      img: 'img/logo/mvd.png'
    },
    {
      name: 'mvd',
      img: 'img/logo/mvd.png'
    },
    {
      name: 'mvd',
      img: 'img/logo/mvd.png'
    },
    {
      name: 'mvd',
      img: 'img/logo/mvd.png'
    },
    {
      name: 'mvd',
      img: 'img/logo/mvd.png'
    }
  ]
});

export const mutations = {
  SAVE_CONTENT(state, payload) {
    state.database = payload;
    //console.log(state.database)
  }
};

export const actions = {
  async nuxtServerInit({commit }) {
    commit("user/CLEAR_ERRORS");
    try {
      const dataV = await this.$fire.database.ref("new_content");
      const ref = (await dataV.once("value")).val();
      //console.log(ref)
      commit("SAVE_CONTENT", ref);
    } catch (e) {
      commit("user/SET_ERRORS", err.message);
      throw e;
    }
  },

  onAuthStateChangedAction(ctx, { authUser, claims }) {
    if (!authUser) {
    } else {
      ctx.commit("user/SET_USER", authUser.uid);
    }
  },

  async SAVE_CONTENT({ commit }, payload) {
    commit("SAVE_CONTENT", payload);
    this.$fire.database.ref("new_content").set(payload);
  },

  async RE_CONTENT({ commit, state }) {
    try {
      await this.$fire.database.ref("new_content").set(state.database);
    } catch (e) {
      commit("user/SET_ERRORS", err.message);
      throw e;
    }
  }
};

export const getters = {
  GET_MAIN_PAGE(state) {
    return state.database.main_page;
  },
  GET_CERAMIC_MEMBRANES_PAGE(state) {
    return state.database.ceramics_membranes_page;
  },
  GET_POROUS_CERAMIC_PAGE(state) {
    return state.database.porous_ceramic_page;
  },
  GET_RESEARCH_PAGE(state) {
    return state.database.research_page;
  },
  GET_WATER_TREATMENT_PAGE(state) {
    return state.database.water_treatment_page;
  },
  GET_TIME_LINE(state) {
    return state.database.components.time_line;
  },
  GET_MULTIPLE(state) {
    return state.database.components.multiple_caorusel;
  },
  GET_CONTACT_INFO(state) {
    return state.contact_info
  },
  GET_LINKS(state) {
    return state.links_menu
  },
  GET_PARTNERS(state) {
    const res = []
    const data = state.database.components.partners
    for(let key in data) {
      const obj = new Partner(data[key].name, data[key].img, data[key].article)
      res.push(obj)
    }
    return res
  }
};
