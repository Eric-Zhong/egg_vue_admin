import Vue from 'vue';

// XZ: 导入在 vue-element-admin 中定义的 filter
import * as filters from './filter.js';


Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});


/**
 * 去掉HTML标签
 */
Vue.filter('removeHtml', input => {
  return input && input.replace(/<(?:.|\n)*?>/gm, '')
    .replace(/(&rdquo;)/g, '\"')
    .replace(/&ldquo;/g, '\"')
    .replace(/&mdash;/g, '-')
    .replace(/&nbsp;/g, '')
    .replace(/&gt;/g, '>')
    .replace(/&lt;/g, '<')
    .replace(/<[\w\s"':=\/]*/, '');
});

