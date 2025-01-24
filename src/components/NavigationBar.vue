<template>
  <div class="navigationBar">
    <TopBar />
    <SessionList />
    <Userinfo />
  </div>
</template>

<script lang="ts" setup name="NavigationBar">
  import { ref, onMounted, onUnmounted } from 'vue';
  import TopBar from './NavigationBar/TopBar.vue';
  import SessionList from './NavigationBar/SessionList.vue';
  import Userinfo from './NavigationBar/Userinfo.vue';

  const navigationBarWidth = ref(268);
  const thresholdWidth = 268 + 768;

  const handleResize = () => {
    if (window.innerWidth < thresholdWidth) {
      navigationBarWidth.value = 0;
    } else {
      navigationBarWidth.value = 268;
    }
  };

  onMounted(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); // 初始化时执行一次
  });

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
  });
</script>

<style scoped>
  .navigationBar {
    display: flex;
    flex-direction: column; /* 设置为上下排列 */
    height: 100%;
    background-color: rgba(169, 169, 169, 0.1);
    width: 268px; /* 默认宽度 */
    transition: width 0.3s ease; /* 添加平滑过渡 */
  }
</style>