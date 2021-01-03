export default {
  state: {
    blockStyles: {}
  },
  mutations: {
    updateBlockStyles(state, styles = {}) {
      state.blockStyles = styles;
    }
  },
  getters: {
    allBlockStyles(state) {
      return state.blockStyles;
    }
  }
};
