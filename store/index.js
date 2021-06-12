export const state = () => ({
  });
  
  export const mutations = {
     
  };
  
  export const actions = {
    async nuxtServerInit({ dispatch }) {
      await dispatch('crm/loadContent')
      await dispatch('crm/LOAD_CONTENT')
    },
  };
  
  export const getters = {
    
  };
  