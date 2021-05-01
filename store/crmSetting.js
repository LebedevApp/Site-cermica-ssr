export const state = () => ({
    block: null
  });
  
  export const mutations = {
    setBlock(state, payload) {
        state.block = payload
    },
    saveBlock(state, payload) {
        state.block.text = payload
    },
    saveCard(state, payload) {
        state.block.title = payload.title
        state.block.text = payload.text
        //console.log(payload)
    },
    saveContentBlock(state, payload) {
        state.block.title = payload.title
        state.block.text = payload.text
        state.block.subtitle = payload.subtitle
    }
  };
  
  export const actions = {
    setBlock({commit}, payload) {
        commit('setBlock', payload)
    },
  };
  
  export const getters = {
    getBlock(state) {
      return state.block;
    }
  };
  