/* XZ: 此处定义 egg 的 plugin 组件 */

exports.cors = {
  enable: true,
  package: 'egg-cors'
};

exports.webpack = {
  enable: true,
  package: 'egg-webpack'
};

exports.webpackvue = {
  enable: true,
  package: 'egg-webpack-vue'
};

exports.logview = {
  package: 'egg-logview',
  env: ['local']
};
