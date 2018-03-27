/**
 * XZ: Egg 启动自定义
 * 我们常常需要在应用启动期间进行一些初始化工作，等初始化完成后应用才可以启动成功，并开始对外提供服务。
 */

import Vue from 'vue';
import './filter';
import './directive';
import './component';

// XZ: 添加 element-ui 组件
/* 写在这里，也无法在 client 端使用 element-ui，还需要再研究
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import i18n from '@/lang';

Vue.use(i18n);

Vue.use(ElementUI, {
  size: 'medium',
  i18n: (key, value) => i18n.t(key, value)
});
*/

const App = {};

App.data = () => {
  return window.__INITIAL_STATE__ || {};
};

App.init = options => {
  console.log('=>程序初始化 App.init(.)');
  console.log('=>  判断 EASY_ENV_IS_NODE');
  console.log(EASY_ENV_IS_NODE);
  if (EASY_ENV_IS_NODE) {
    return App.server(options);
  }
  return App.client(options);
};


App.client = options => {
  Vue.prototype.$http = require('axios');
  if (options.store) {
    options.store.replaceState(Object.assign({}, App.data(), options.store.state));
  } else if (window.__INITIAL_STATE__) {
    options.data = Object.assign(window.__INITIAL_STATE__, options.data && options.data());
  }
  const app = new Vue(options);
  app.$mount('#app');
};

App.server = options => {
  if (options.store && options.router) {
    return context => {
      options.router.push(context.state.url);
      const matchedComponents = options.router.getMatchedComponents();
      if (!matchedComponents) {
        return Promise.reject({
          code: '404'
        });
      }
      return Promise.all(
        matchedComponents.map(component => {
          if (component.preFetch) {
            return component.preFetch(options.store);
          }
          return null;
        })
      ).then(() => {
        context.state = Object.assign(options.store.state, context.state);
        return new Vue(options);
      });
    };
  }
  return context => {
    const VueApp = Vue.extend(options);
    const app = new VueApp({
      data: context.state
    });
    return new Promise(resolve => {
      resolve(app);
    });
  };
};

App.use = component => {
  Vue.use(component);
};

App.component = (name, component) => {
  Vue.component(name, component);
};


// 下边的东西是自己写的，好象不起做用
App.onBeforeStart = () => {
  console.log('Egg server will be started');
};

App.beforeStart(App.onBeforeStart);

App.on('response', ctx => {
  console.log('=>Response');
});

export default App;