export const state = () => ({
  card: null,
  loading: false,
});

export const mutations = {
  ADD_CARD(state, payload) {
    state.card = payload;
  },
  EDIT_CARD(state, payload) {
    Object.keys(payload).forEach(item => {
      if (state.card[item]) {
        state.card[item] = payload[item];
      }
    });
  },
  CLEAN_CARD(state) {
      state.card = null
  },
};

export const actions = {};

export const getters = {
};
