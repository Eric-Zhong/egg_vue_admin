<template>
  <layout>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </layout>
</template>
<script type="text/babel">
import Vue from "vue";
import i18n from "@/lang";
import { sync } from "vuex-router-sync";
import store from "store/app";
import router from "./component/router";
import Layout from "component/layout/app";

Vue.use(i18n);

console.log('=> 看看 router 的内容');
console.log(router);

sync(store, router);
export default {
  router,
  store,
  computed: {},
  mounted() {}
};
</script>
