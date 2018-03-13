<template>
  <header class="header">
    <div class="container"><h1>
      <a href="/" class="router-link-active">Egg + Vue</a></h1>
      <ul class="nav">
        <li class="nav-item"><a href="/" :class="{'active' : selectedMenu === '/'}" title="Server Render">Server</a></li>
        <li class="nav-item"><a href="/client" :class="{'active' : selectedMenu === '/client'}" title="Client-Render">Client</a></li>
        <li class="nav-item"><a href="/dynamic" :class="{'active' : selectedMenu === '/dynamic'}" title="Vue-Component-Dynamic">Dynamic</a></li>
        <li class="nav-item"><a href="/public/html/home/index.html" :class="{'active' : selectedMenu === '/public/html/home/index.html'}">Html</a></li>
        <li class="nav-item"><a href="/element" :class="{'active' : selectedMenu === '/element'}">Element</a></li>
        <li class="nav-item"><a href="/app" :class="{'active' : selectedMenu === '/app'}" title="Single Page">SPA</a></li>
        <li class="nav-item"><a href="/admin" :class="{'active' : selectedMenu === '/admin'}">Admin</a></li>
      </ul>
    </div>
  </header>
</template>
<style>
  @import "./header.css";
</style>
<script type="text/babel">
  export default{
    data(){
      return {
        selectedMenu : '/'
      }
    },
    computed:{
    },
    mounted(){
      this.selectedMenu = window.location.pathname.toLowerCase();
    }
  }
</script>
