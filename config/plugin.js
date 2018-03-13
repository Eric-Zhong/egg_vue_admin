/* XZ: 此处定义 egg 的 plugin 组件 */
exports.static = true;

exports.vuessr = {
  enable: true,
  package: 'egg-view-vue-ssr'
};
exports.serviceworker = {
  enable: true,
  package: 'egg-serviceworker'
};