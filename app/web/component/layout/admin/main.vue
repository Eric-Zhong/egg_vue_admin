<template>
    <div>
        <sidebar></sidebar>
        <slot name="main"></slot>
        <footer>Copyright XZSoftware</footer>
    </div>
</template>
<style>
    body {
        margin: 0 0px;
    }

    a {
        text-decoration: none;
    }

    @import "../../../asset/css/global.css";
</style>
<script type="text/babel">
    console.log('=>进入 /app/web/component/layout/admin/main.vue');

    import Sidebar from './components/sidebar';

    export default{ 
        components: {Sidebar} 
    };
</script>
