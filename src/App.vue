<template>
  <div class="app">
    <NavigationBar class="navigationBar" />
    <Chat class="chat"/>
  </div>
</template>

<script lang="ts" setup name="App">
  import NavigationBar from './components/NavigationBar.vue'
  import Chat from './components/Chat.vue'
  import { ref } from 'vue';

</script>

<style scoped>
  .app {
    display: flex;
    width: 100vw;
    height: 100vh;
    /* min-height: 512px;
    min-width: 720px; */
    /* background-color: rgb(217,234,252); */
    justify-content: space-between;
    align-items: flex-start;
  }
  .navigationBar {
    height: 100%;
    transition: width 0.3s ease;
  }
  .chat {
    width: calc(100% - 268px);
    min-width: 768px;;
    height: 100%;
    transition: width 0.3s ease;
  }
  /* 默认情况下，导航栏宽度为 268px */
  .navigationBar {
    width: 268px;
  }

  .chat {
    width: calc(100% - 268px);
  }

  /* 响应式设计：当窗口小于1066px时，隐藏导航栏 */
  @media (max-width: 1036px) {
    .navigationBar {
      width: 0;
      display: none;
    }
    .chat {
      width: 100%;
    }
  }
  /* 模糊背景 */
  /* .background-blur {
    filter: blur(10px);
    pointer-events: none;
  } */
  
  .left-component {
    position: relative;
    left: 0;
    top: 0;
  }
  .right-component {
    position: relative;
    right: 0;
    top: 0;
  }
</style>