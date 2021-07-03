export const state = () => ({
  article: null
});

export const mutations = {
  GET_DATA(state, payload) {
    let res = []
    payload.article.forEach(item => {
        if(payload.search !== '') {
            if(item.title.toLowerCase().search(payload.search.toLowerCase()) !== -1 || item.description.toLowerCase().search(payload.search.toLowerCase()) !== -1 ) {
                res.push(item)
            }
        }
    });
    state.article = res
  }
};

export const actions = {};

export const getters = {
  GET_DATA(state) {
    return state.article;
  }
};
