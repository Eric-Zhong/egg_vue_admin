<template>
  <scroll-bar>
      <el-menu 
        mode="vertical" 
        :collapse="isCollapse"
        background-color="#304156" 
        text-color="#bfcbd9" 
        active-text-color="#409EFF">
      </el-menu>
  </scroll-bar>
</template>

<script>
console.log('=>进入 /app/web/component/layout/admin/components/sidebar/index.vue');
import ScrollBar from '#components/ScrollBar';
import { mapGetters } from 'vuex';

export default {
  components: {ScrollBar},
  computed: {
        // XZ: ...mapGetters() 方法是 vuex 中定义的方法
        //   ...mapGetters([
        //       'sidebar'
        //   ]),
      isCollapse(){
          console.log(this.sidebar);
          return true;
          // return !this.sidebar.opened;
      }
  }
}
</script>

