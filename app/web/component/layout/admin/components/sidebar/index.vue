<template>
    <scroll-bar>
        <el-menu mode="vertical" :default-active="$route.path" :collapse="isCollapse" 
            background-color="#304156" 
            text-color="#bfcbd9"
            active-text-color="#409EFF"
            >
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>Navigator A</span>
                </template>
                <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>
        </el-menu>
    </scroll-bar>
</template>

<script>
console.log(
  "=>进入 /app/web/component/layout/admin/components/sidebar/index.vue"
);
import ScrollBar from "#components/ScrollBar";
import { mapGetters } from "vuex";

export default {
  name: "Sidebar",
  components: {
    ScrollBar
  },
  computed: {
    // XZ: ...mapGetters() 方法是 vuex 中定义的方法
    ...mapGetters(["sidebar"]),
    isCollapse() {
      return !this.sidebar.opened;
    }
  }
};
</script>
