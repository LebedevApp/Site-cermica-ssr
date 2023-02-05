class Card {
    constructor(img = null, title, date = null, description, article = null) {
        this.img = img,
        this.title = title,
        this.date = date,
        this.description = description,
        this.article = article
    }
}

export const state = () => ({
    card: null,
    arr: null
});

export const mutations = {
    ADD_CARD(state, payload) {
        state.arr = payload.arr
        const card = new Card(payload.img, payload.title, payload.date, payload.description, payload.article)
        if (payload.name) {
            card.name = payload.name
        }
        state.arr.push(card)
    },
    CLEAR_CARD(state) {
        state.card = null
        state.arr = null
    },
    REMOVE_CARD(state, payload) {
        state.arr = payload.arr
        state.arr.splice(state.arr.indexOf(payload.item), 1)
        
    }
};

export const actions = {
    ADD_CARD({commit}, payload) {
        commit('ADD_CARD', payload)
    }
};

export const getters = {};
