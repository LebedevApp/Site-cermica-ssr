

export const state = () => ({
  CONTACT_INFO: {
      coords: [55.760798, 37.678802],
      adress: 'Москва,  Набережная академика Туполева, дом 15, корпус 28',
      email: 'info@ceramicfilter.ru',
      tel: [
          {
              prof: 'Коммерческий директор',
              name: 'Адамович Владимир Игоревич',
              tel:'+7 (968)-968-07-80',
              telLink: 'tel:+79689680780',
              watsapp: true,
              telegramm: true
          },
          {
            prof: 'Директор по науке',
            name: 'Покровский Данила Данилович',
            tel:'+7 (916)-681-80-91',
            telLink: 'tel:+79166818091',
            watsapp: false,
            telegramm: false
        },
        {
            prof: 'Руководитель производства',
            name: 'Якушев Денис Анатольевич',
            tel:'+7 (910)-457-72-47',
            telLink: 'tel:+79104577247',
            watsapp: true,
            telegramm: false
        }
      ]
      
  },
  LINKS_THIS_SITE: {
    SERVICE: [
      {
        title: "Главная страница",
        to: "/",
      },
      {
        title: "Пористая керамика",
        to: "/porousCeramics",
      },
      {
        title: "Керамические мембраны",
        to: "/ceramicMembranes",
      },
      {
        title: "Современные технологии водоподготовки",
        to: "/waterTreatment",
      },
      {
        title: "Лабораторные исследования разделения жидких растворов",
        to: "/research",
      },
    ],
    DOCUMENTATIONS: [
      {
        title: "Документация",
        to: "/",
      },
      {
        title: "Наши партнеры",
        to: "/partners",
      },
    ],
    CONTACT: [
      {
        title: "Контакты",
        to: "/contact",
      },
    ]
  }
});

export const mutations = {
    
};

export const actions = {
  loadContent({commit}, payload) {
    console.log(payload)
  }
};

export const getters = {
  SAVE_CONTACT_INFO(state) {
      return state.CONTACT_INFO
  },
  GET_LINKS(state) {
    return state.LINKS_THIS_SITE
  }
};
