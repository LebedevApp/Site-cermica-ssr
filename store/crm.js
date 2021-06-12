import firebase from "firebase/app";
import "firebase/database";

export const state = () => ({
  allContent: null
});

export const mutations = {
  saveContent(state, payload) {
    state.allContent = payload;
  },
  loadContent(state, payload) {
    state.allContent = payload;
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
  }
};

export const getters = {
  getContent(state) {
    return state.allContent;
  }
};
