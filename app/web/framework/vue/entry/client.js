import Vue from 'vue';
import '../filter';
import '../directive';
import '../component';

console.log('=> 进入 /app/web/framework/vue/entry/client.js');

export default function(options) {
  Vue.prototype.$http = require('axios');
  if (options.store) {
    options.store.replaceState(Object.assign({}, window.__INITIAL_STATE__, options.store.state));
  } else if (window.__INITIAL_STATE__) {
    options.data = Object.assign(window.__INITIAL_STATE__, options.data && options.data());
  }
  const app = new Vue(options);
  app.$mount('#app');
}
