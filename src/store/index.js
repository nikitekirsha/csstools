import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    blockStyles: {},
    currentProperty: null
  },
  mutations: {
    updateBlockStyles(state, styles = {}) {
      state.blockStyles = styles;
    },
    selectProperty(state, prop) {
      state.currentProperty = prop;
    },
    getBack(state) {
      state.currentProperty = null;
      state.blockStyles = {};
    }
  },
  getters: {
    allBlockStyles(state) {
      return state.blockStyles;
    },
    currentProperty(state) {
      return state.currentProperty;
    }
  }
});
