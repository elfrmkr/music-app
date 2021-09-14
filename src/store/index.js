import { createStore } from 'vuex';

export default createStore({
  state: {
    authModalShow: false,
  },
  mutations: {

    // this model changes the visibility of the login or registeration module 

    toggleAuthModal: (state) => {
      state.authModalShow = !state.authModalShow;
    },
  },
  getters: {
    // authModalShow: (state) => state.authModalShow,
  },
});