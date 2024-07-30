const user = {
  namespaced: true,
  state: {
    userInfo: {
      name: "主应用",
      dateTime: "2023-4-26",
    },
    token: "这是实时token",
    count: 1,
  },
  actions: {
    decrease({ state, commit }) {
      console.log(state);
      commit("reduce", 3);
    },
  },
  mutations: {
    increment(state, payload) {
      state.count += payload;
    },
    reduce(state, payload) {
      state.count -= payload;
    },
  },
};

export default user;
