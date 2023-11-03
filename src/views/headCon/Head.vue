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
  height: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  cursor: pointer;
  
  &:hover {
    .head-pic {
      transform: scale(.8);
    }
  }
  
  .head-pic {
    width: 14vw;
    height: 14vw;
    border-radius: 50%;
    background: white url("/src/assets/image/head-pic.jpg") no-repeat 0.8vw 0.9vw / 80% 80%;
    transition: 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  
  .head-text {
    margin-top: 1rem;
  }
}
</style>
