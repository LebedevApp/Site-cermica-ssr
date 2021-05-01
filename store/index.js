export const state = () => ({
  });
  
  export const mutations = {
     
  };
  
  export const actions = {
    async nuxtServerInit({ dispatch }) {
      await dispatch('crm/loadContent')
    },
  };
  
  export const getters = {
    
  };
  