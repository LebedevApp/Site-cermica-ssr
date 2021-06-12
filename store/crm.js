import firebase from "firebase/app";
import "firebase/database";

export const state = () => ({
  allContent: null,
  CONTENT: {}
});

export const mutations = {
  saveContent(state, payload) {
    state.allContent = payload;
  },
  loadContent(state, payload) {
    state.allContent = payload;
  },
  //==========================
  SAVE_CONTENT(state, payload) {
    state.CONTENT = payload
    //console.log(state.CONTENT)
  }
};

// Нужен обработчик ошибок try catch
export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch("loadContent");
  },
  saveContent({ commit }, payload) {
    commit("saveContent", payload);
    firebase
      .database()
      .ref("site-content")
      .set(payload);
  },
  async loadContent({ commit }) {
    const messageRef = this.$fire.database.ref("site-content");
    const ref = (await messageRef.once("value")).val();
    commit("loadContent", ref);
  },
  //=================

  SAVE_IN_DATABASE({ commit, dispatch }, payload) {
    firebase
      .database()
      .ref("CONTENT_IS_THIS_SITE")
      .set(payload);
    //dispatch('LOAD_CONTENT')
  },
  async LOAD_CONTENT({ commit }) {
    const messageRef = this.$fire.database.ref("CONTENT_IS_THIS_SITE");
    const res = (await messageRef.once("value")).val();
    commit('SAVE_CONTENT',res)
  }
};

export const getters = {
  getContent(state) {
    return state.allContent;
  },
  //=============================
  GET_CONTENT(state) {
    return state.CONTENT;
  },
  
};
