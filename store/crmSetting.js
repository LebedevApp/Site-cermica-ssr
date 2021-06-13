export const state = () => ({
    block: null,
    CONTENT: null,
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
    },
    saveContentBlock(state, payload) {
        state.block.title = payload.title
        state.block.text = payload.text
        state.block.subtitle = payload.subtitle
    },
    SAVE_CONTENT_IMG(state, payload) {
      state.CONTENT = payload
      //console.log(state.CONTENT)
    },
    EDIT_CONTENT_IMG(state, payload) {
      state.CONTENT.TITLE = payload.title
      state.CONTENT.TEXT = payload.text
      //state.CONTENT = {}
      //console.log(state.CONTENT)
    },
    EDIT_CONTENT_DESCRIPTION(state, payload) {
      state.CONTENT.DESCRIPTION = payload
    },
    SAVE_DESCRIPTION(state, payload) {
      state.CONTENT = payload
      //console.log(state.CONTENT)
    },
    CLEAN(state) {
      state.CONTENT = null
    },
    SAVE_CONTENT(state, payload) {
      state.CONTENT = payload
    },
    EDIT_CONTENT(state, payload) {
      state.CONTENT.CONTENT.CONTENT_BLOCK.TITLE = payload.title
      state.CONTENT.CONTENT.CONTENT_BLOCK.TEXT = payload.text
      state.CONTENT.CONTENT.CONTENT_BLOCK.DESCRIPTION = payload.description
    },
    EDIT_PARTNERS(state,payload) {
      state.CONTENT.CONTENT.PARTNERS_BLOCK.TITLE = payload.title
      state.CONTENT.CONTENT.PARTNERS_BLOCK.TEXT = payload.text
    },
    SAVE_CARDS(state, payload) {
      state.CONTENT = payload
    },
    EDIT_CARD(state, payload) {
      state.CONTENT.TITLE = payload.title
      state.CONTENT.TEXT = payload.text
      //console.log(state.CONTENT)
    },
    EDIT_SERVISE(state, payload) {
      state.CONTENT.CONTENT.OUR_SERVICE.EXTRA_TITLE = payload.extra
      state.CONTENT.CONTENT.OUR_SERVICE.TITLE = payload.title
      state.CONTENT.CONTENT.OUR_SERVICE.TEXT = payload.text
    },
    SAVE_TABS(state, payload) {
      state.CONTENT = payload
    },
    EDIT_TABS(state,payload) {
      state.CONTENT.BUTTON_NAME = payload.button
      state.CONTENT.EXTRA_TITLE = payload.extra
      state.CONTENT.TITLE = payload.title
      state.CONTENT.TEXT = payload.text
    }
    
  };
  
  export const actions = {
    setBlock({commit}, payload) {
        commit('setBlock', payload)
    },
    SAVE_CONTENT_IMG({commit}, payload) {
      commit('SAVE_CONTENT_IMG', payload)
    },
    EDIT_CONTENT_IMG({commit}, payload) {
      commit('EDIT_CONTENT_IMG', payload)
    },
    EDIT_CONTENT_DESCRIPTION({commit}, payload) {
      commit('EDIT_CONTENT_DESCRIPTION', payload)
    },
    SAVE_DESCRIPTION({commit}, payload) {
      commit('SAVE_DESCRIPTION', payload)
    }
  };
  
  export const getters = {
    getBlock(state) {
      return state.block;
    }
  };
  