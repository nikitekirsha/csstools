export default {
  state: {
    currentProperty: null
  },
  mutations: {
    selectProperty(state, prop) {
      state.currentProperty = prop;
    },
    getBack(state) {
      state.currentProperty = null;
      state.blockStyles = {};
    }
  },
  getters: {
    currentProperty(state) {
      return state.currentProperty;
    }
  }
};
