

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
              watsapp: true,
              telegramm: true
          },
          {
            prof: 'Директор по науке',
            name: 'Покровский Данила Данилович',
            tel:'+7 (916)-681-80-91',
            watsapp: false,
            telegramm: false
        },
        {
            prof: 'Руководитель производства',
            name: 'Якушев Денис Анатольевич',
            tel:'+7 (910)-457-72-47',
            watsapp: true,
            telegramm: false
        }
      ]
      
  }
});

export const mutations = {
    
};

export const actions = {
  
};

export const getters = {
  SAVE_CONTACT_INFO(state) {
      return state.CONTACT_INFO
  }
};
