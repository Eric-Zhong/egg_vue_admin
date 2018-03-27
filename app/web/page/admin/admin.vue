<template>
  <admin-layout 
    title="Admin home page"
    description="XZSoftware integrate 2 site code." 
    keywords="xuzhong">
    <!-- <el-alert
            title="这里就是一个测试"
            type="info">
    </el-alert> -->
    <!--
      XZ: 在 /app/web/framework/vue/component/index.js 中已经将 AdminLayout 定义成全局 Component。
      可以在App中任何地方进行使用
    -->
  </admin-layout>
</template>
<style>
@import "admin.scss";
</style>
<script type="text/babel">
console.log("=> 加载 /app/web/page/admin/admin.vue");
import Vue from "vue";

/* XZ: 加载多语言 */
import i18n from "@/lang";
Vue.use(i18n);

/* XZ: 加载 element-ui */
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

/* XZ: 加载前端的 router */
import router from "@/router/index";

/* XZ: 加载 store */
import store from "store";

/* XZ: 加载 icon */
import "@/icons";

/* XZ: 主要是把 vue-router 的狀態放進 vuex 的 state 中，這樣就可以透過改變 state 來進行路由的一些操作 */
import { sync } from "vuex-router-sync";
sync(store, router);

Vue.use(ElementUI, {
  size: "medium",
  i18n: (key, value) => i18n.t(key, value)
});

export default {
  router,
  store,
  components: {},
  data() {
    return {
      pageIndex: 1,
      pageSize: 10
    };
  },
  methods: {},
  mounted() {
    console.log(this.$data);
  }
};
</script>

