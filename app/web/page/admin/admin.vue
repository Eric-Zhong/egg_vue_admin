<template>
  <admin-layout description="XZSoftware integrate 2 site code." keywords="xuzhong">
    <el-alert
            title="el-table有bug, 服务器渲染出来数据是空的,用简单的模板结果是可以出来"
            type="info">
    </el-alert>
  </admin-layout>
</template>
<style>
@import "admin.scss";
</style>
<script type="text/babel">
console.log('=> 加载 /app/web/page/admin/admin.vue');
import Vue from 'vue';

/* XZ: 加载多语言 */
import i18n from '@/lang';
Vue.use(i18n);

/* XZ: 加载 element-ui */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

/* XZ: 加载前端的 router */
import router from '@/router/index';

/* XZ: 加载 store */
import store from 'store';

/* XZ: 加载 icon */
import '@/icons';

import { sync } from "vuex-router-sync";

sync(store, router);

Vue.use(ElementUI, {
  size: 'medium',
  i18n: (key, value) => i18n.t(key, value)
});

export default {
  router,
  components: {}, 
  data() {
    return {
      pageIndex: 1,
      pageSize: 10
    };
  },
  methods: {
  },
  mounted() {
    console.log(this.$data);
  }
};
</script>

