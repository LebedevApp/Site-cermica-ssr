export const state = () => ({
  database: null
});

export const mutations = {
  SAVE_CONTENT(state, payload) {
    state.database = payload;
  },
};

export const actions = {
  async nuxtServerInit({ dispatch, commit }) {
    //delete
    await dispatch("crm/loadContent");
    await dispatch("crm/LOAD_CONTENT");
    commit('user/CLEAR_ERRORS')
    try {
      const dataV = await this.$fire.database.ref("new_content");
      const ref = (await dataV.once("value")).val();
      commit("SAVE_CONTENT", ref);
    } catch(e) {
      commit('user/SET_ERRORS', err.message)
      throw e
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
      commit('user/SET_ERRORS', err.message)
      throw e
    }
    
  },
};

export const getters = {
  GET_MAIN_PAGE(state) {
    return state.database.main_page
  },
  GET_CERAMIC_MEMBRANES_PAGE(state) {
    return state.database.ceramics_membranes_page
  },
  GET_POROUS_CERAMIC_PAGE(state) {
    return state.database.porous_ceramic_page
  },
  GET_RESEARCH_PAGE(state) {
    return state.database.research_page
  },
  GET_WATER_TREATMENT_PAGE(state) {
    return state.database.water_treatment_page
  },
  GET_TIME_LINE(state) {
    return state.database.components.time_line
  },
  GET_MULTIPLE(state) {
    return state.database.components.multiple_caorusel
  }
};
