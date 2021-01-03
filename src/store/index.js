import Vue from "vue";
import Vuex from "vuex";

import block from "./modules/block";
import properties from "./modules/properties";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    block,
    properties
  }
});
