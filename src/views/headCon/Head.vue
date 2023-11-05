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
    }
  }
  
  .head-pic {
    width: 12vw;
    height: 12vw;
    border-radius: 50%;
    background: white url(/src/assets/image/head-pic.jpg) no-repeat 0.7vw 0.8vw / 80% 80%;
    transition: 0.3s cubic-bezier(0.545, 0.045, 0.755, 1);
  }
  
  .head-text {
    margin-top: 1rem;
  }
}
</style>
