<script></script>

<template>
  <div class="head-container">
    <div class="head-pic"></div>
    <p class="head-text">
      爱生活,爱自己
    </p>
  </div>
</template>

<style lang="less" scoped>
.head-container {
  width: 20vw;
  height: 18vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  
  cursor: pointer;
  
  &:hover {
    .head-pic {
      transform: scale(1.1);
      // dom阴影 x坐标偏移 y坐标偏移 模糊距离 阴影大小 颜色
      box-shadow: 0 0 50px 20px rgba(200, 200, 200, 0.3);
    }
  }
  
  .head-pic {
    width: 12vw;
    height: 12vw;
    border-radius: 50%;
    // 背景颜色 颜色 图片地址 是否重复 x偏移 y偏移 / x方向缩放 y方向缩放
    background: white url(/src/assets/image/head-pic.jpg) no-repeat 0.7vw 0.8vw / 80% 80%;
    // 过度时间及行为 行为名称 时间 变化速率 延迟
    transition: all 0.3s cubic-bezier(0.545, 0.045, 0.755, 1) 0s;
  }
  
  .head-text {
    margin-top: 1rem;
  }
}
</style>
