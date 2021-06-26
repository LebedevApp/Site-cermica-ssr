import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth"

class User {
  constructor(id ) {
    this.id = id;
  }
}

export const state = () => ({
  user: null,
  loading: false,
  errors: null
});

export const mutations = {
  SET_USER(state, payload) {
    state.user = payload;
  },
  SET_LOADING(state, payload) {
    state.loading = payload;
  },
  SET_ERRORS(state, payload) {
    state.errors = payload;
  },
  CLEAR_ERRORS(state) {
    state.errors = null;
  }
};

export const actions = {
  async LOGIN_USER({ commit }, { email, password }) {
    commit('SET_LOADING', true)
    commit('CLEAR_ERRORS')
    try {
        const user = await this.$fire.auth.signInWithEmailAndPassword(email, password)
        commit('SET_USER', new User(user.user.uid))
        commit('SET_LOADING', false)
    } catch (err) {
        commit('SET_LOADING', false)
        commit('SET_ERRORS', err.message)
        throw err
    }
  },
  async LOGOUT({commit}) {
    commit('SET_LOADING', true)
    commit('CLEAR_ERRORS')
    try {
        await this.$fire.auth.signOut()
        commit('SET_USER', null)
        commit('SET_LOADING', false)
    } catch (e) {
        commit('SET_LOADING', false)
        commit('SET_ERRORS', err.message)
        throw err
    }
  }
};

export const getters = {
    GET_LOADING(state) {
        return state.loading
    },
    GET_ERRORS(state) {
      return state.errors
    },
    IS_USER_LIGGIN_IN(state) {
        return state.user !== null
    },
};
