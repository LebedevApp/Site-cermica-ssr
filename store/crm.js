import firebase from "firebase/app"
import "firebase/database";

export const state = () => ({
  allContent: null
});

export const mutations = {
    saveContent(state, payload) {
      state.allContent = payload
      //console.log(state)
    },
    loadContent(state, payload) {
      
      state.allContent = payload
      //console.log(state.allContent)
    }
};

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('loadContent')
  },
    saveContent({commit}, payload) {
      commit('saveContent', payload)
      firebase.database().ref('site-content').set(payload)
    },
    async loadContent({commit}) {
      //const obj = await (await firebase.database().ref('site-content').once('value')).val()
      
      const messageRef = this.$fire.database.ref('site-content')

      const ref = (await messageRef.once('value')).val()
      //console.log(ref)
      commit('loadContent', ref)
    }
};

export const getters = {
  getContent(state) {
    return state.allContent;
  }
};
