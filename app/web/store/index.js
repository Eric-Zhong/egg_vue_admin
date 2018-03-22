import Vue from 'vue';
import Vuex from 'vuex';
import app from './modules/app';
// import errorLog from './modules/errorLog'
// import permission from './modules/permission'
// import tagsView from './modules/tagsView'
import user from './modules/user';
import getters from './getters';

Vue.use(Vuex);

console.log('=>加载 Store. /app/web/store/index.js');

const store = new Vuex.Store({
  modules: {
    app,
    // errorLog,
    // permission,
    // tagsView,
    user
  },
  getters
});

console.log(store);

export default store;
