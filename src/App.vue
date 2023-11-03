<script setup>
import Head from './views/headCon/Head.vue'

</script>

<template>
  <div class="main">
    <div class="left">
      <Head></Head>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="less">
#app {
  width: 100vw;
  height: 100vh;
}

@default-bg-color: #001529;

.main {
  width: 100vw;
  height: 100vh;
  display: flex;
  .left {
    width: 20vw;
    height: 100vh;
    background: @default-bg-color;
    flex-shrink: 0;
    color: rgba(255, 255, 255, 0.65);
  }
  
  .right {
    flex-grow: 1;
  }
}

</style>
