
export const state = () => ({
  });
  
  export const mutations = {
     
  };
  
  export const actions = {
    async nuxtServerInit({ dispatch }) {
      await dispatch('crm/loadContent')
      await dispatch('crm/LOAD_CONTENT')
    },
    onAuthStateChangedAction(ctx, { authUser, claims }) {
      if (!authUser) {
        //console.log(authUser)
        // claims = null
        // Perform logout operations
      } else {
        ctx.commit('user/SET_USER',authUser.uid)
        //console.log(ctx)
        //console.log(authUser)
        //console.log(claims)
        
        // Do something with the authUser and the claims object...
      }
    }
  };
  
  export const getters = {
    
  };
  