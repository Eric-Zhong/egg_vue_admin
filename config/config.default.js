const path = require('path');
const fs = require('fs');
module.exports = app => {
  const exports = {};

  /* XZ: 此处定义站内表态文件 */
  exports.siteFile = {
    '/favicon.ico': fs.readFileSync(path.join(app.baseDir, 'app/web/asset/images/favicon.ico'))
  };

  exports.view = {
    cache: false
  };

  /* XZ: 此处定义 vuessr 的默认配置 */
  exports.vuessr = {
    layout: path.join(app.baseDir, 'app/web/view/layout.html'),
    renderOptions: {
      basedir: path.join(app.baseDir, 'app/view')
    }
  };

  /* XZ: 此处定义 log 的默认配置 */
  exports.logger = {
    consoleLevel: 'DEBUG',
    dir: path.join(app.baseDir, 'logs')
  };

  /* XZ: 此处定义 静态文件夹 的默认路径 */
  exports.static = {
    prefix: '/public/',
    dir: path.join(app.baseDir, 'public')
  };

  /* XZ: 此处定义 csrf 的默认 key (我猜) */
  exports.keys = '123456';

  /* XZ: 此处定义 egg 的中间件 */
  exports.middleware = [
    'access'
  ];

  return exports;
};
