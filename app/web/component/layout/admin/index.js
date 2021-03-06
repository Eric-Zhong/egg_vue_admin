console.log('=>进入/layout/admin/index.js');
const msg = '=>EASY_ENV_IS_BROWSER = ' + EASY_ENV_IS_BROWSER;
console.log(msg);

// XZ: 引入Vue模板，名称定义成 MainLayout 后，在模板中会替换 <MainLayout></MainLayout>
import MainLayout from './main';

const tpl = `<div id="app">
    <MainLayout>
        <div slot="main">
            <slot></slot>
        </div>
    </MainLayout>
</div>`;

export default {
  name: 'admin-layout',
  props: [ 'title', 'description', 'keywords' ],
  components: {
    MainLayout // XZ: 将引入的 layout 绑定到 当前模板的 <div slot="main"></div> 中
  },
  computed: {
    vTitle() {
      return this.$root.title || this.title || 'Egg + Vue';
    },
    vKeywords() {
      return this.$root.keywords || this.keywords || 'egg, vue, webpack, server side render';
    },
    vDescription() {
      return this.$root.description || this.description || 'egg-vue-webpack server side render';
    },
    baseClass() {
      return this.$root.baseClass;
    }
  },
  template: EASY_ENV_IS_BROWSER ? tpl : `<!DOCTYPE html>
    <html lang="en">
        <head>
        <title>{{vTitle}}</title>
        <meta name="keywords" :content="vKeywords">
        <meta name="description" :content="vDescription">
        <meta http-equiv="content-type" content="text/html;charset=utf-8">
        <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="stylesheet" href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.min.css">
        </head>
        <body :class="baseClass">
        ${tpl}
        </body>
    </html>`

};
