import Vue from 'vue';

/* XZ: 注册到了标准模板 <layout></layout> */
import Layout from 'component/layout/standard';

Vue.component(Layout.name, Layout);

/* XZ: 注册登记 vue-element-admin 中定义的 layout */
/* 在这里，定义成 admin-layout */
import AdminLayout from 'component/layout/admin';
Vue.component(AdminLayout.name, AdminLayout);