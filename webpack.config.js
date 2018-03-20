'use strict';
const path = require('path');
module.exports = {
  egg: true,
  framework: 'vue',
  entry: {
    include: ['app/web/page'],
    exclude: [
      'app/web/page/[a-z]+/component',
      'app/web/page/elementjs'
    ],
    loader: {
      client: 'app/web/framework/vue/entry/client-loader.js',
      server: 'app/web/framework/vue/entry/server-loader.js',
    }
  },
  alias: {
    '@': 'app',
    server: 'app/web/framework/vue/entry/server.js',
    client: 'app/web/framework/vue/entry/client.js',
    app: 'app/web/framework/vue/app.js',
    asset: 'app/web/asset',
    component: 'app/web/component',
    framework: 'app/web/framework',
    store: 'app/web/store',
    '#views': 'app/web/page',
    '#components': 'app/web/component',
    '#utils': 'app/web/framework/utils',
    '#directive': 'app/web/framework/vue/directive',
    'src/styles': 'app/web/asset/style',
    vue: 'vue/dist/vue.js'
  },
  dll: ['vue', 'axios', 'vue-router', 'vuex', 'vuex-router-sync'],
  loaders: {},
  plugins: {
    serviceworker: true
  },
  optimization: {},
  done() {}
};