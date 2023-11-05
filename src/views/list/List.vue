<script setup>
import { ref } from 'vue'

let fileTypeList = ref([
  { typeName: 'js' },
  { typeName:  'html' },
  { typeName: 'css' },
  { typeName: 'vue' },
  { typeName: 'http' },
  { typeName: 'vite' }
])
</script>

<template>
  <div class="file-list">
    <p class="list-title">文章列表</p>
    
    <div class="type-con">
      <ul class="type-name" v-for="(o , i) in fileTypeList" :key="i">
        <p>{{ o.typeName }}</p>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<style lang="less" scoped>
.file-list {
  position: relative;
  padding: 0 20px;
  height: calc(100vh - 18vw);
  overflow: hidden;
  
  .list-title {
    position: absolute;
    width: 100%;
    height: 20px;
    background: lightcoral;
  }
  
  .type-con {
    position: absolute;
    top: 40px;
    overflow: scroll;
    width: calc(100% - 24px);
    height: calc(100% - 30px);
  
    .type-name {
      width: calc(100% - 5px);
      height: 400px;
      margin-bottom: 20px;
      background: cadetblue;
      
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
