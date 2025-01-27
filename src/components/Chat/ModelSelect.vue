<template>
  <div class="modelSelect">
    <div class="modelSelectContainer" @click="toggleDropdown">
      <button class="dropbtn" :class="{ 'active': showDropdown || isHovered }" @mouseover="isHovered = true" @mouseleave="isHovered = false">
        {{ selectedModel }}
      </button>
      <div class="dropdown-content" :class="{ show: showDropdown }" @mouseover="showDropdown = true" @mouseleave="showDropdown = false">
        <a href="#" @click.prevent="selectModel('ChatGPT 4o')">ChatGPT 4o</a>
        <a href="#" @click.prevent="selectModel('ChatGPT 4o Pro')">ChatGPT 4o Pro</a>
        <a href="#" @click.prevent="selectModel('ChatGPT 4o Plus')">ChatGPT 4o Plus</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup name="ModelSelect">
  import { ref, onMounted, onUnmounted } from 'vue';

  const showDropdown = ref(false);
  const isHovered = ref(false);
  const selectedModel = ref('ChatGPT 4o');

  const selectModel = (model: string) => {
    selectedModel.value = model;
    showDropdown.value = false;
    console.log(`Selected model: ${model}`);
    // 在这里添加选择模型后的逻辑
  };

  const toggleDropdown = () => {
    showDropdown.value = !showDropdown.value;
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (!(event.target as HTMLElement).closest('.modelSelect')) {
      showDropdown.value = false;
    }
  };

  onMounted(() => {
    document.addEventListener('click', handleClickOutside);
  });

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
  });
</script>

<style scoped>
  .modelSelect {
    width: 100%;
    height: 60px;
    min-height: 60px;
    position: relative;   /* 添加相对定位 */
  }
  .modelSelectContainer {
    width: 180px;
    height: 60px;
    position: absolute; /* 绝对定位 */
    top: 10px;
    left: 10px;
    display: inline-block;
    align-items: center;
    justify-content: center;
    background-color: white;
  }
  @media (max-width: 1036px) { 
    .modelSelectContainer {
      position: fixed; /* 固定定位 */
      top: 0px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .dropbtn {
    border-radius: 5px;
    padding: 12px 16px;
    font-size: 16px;
    font-weight: bolder;
    border: none;
    cursor: pointer;
    width: 100%;
    text-align: left;
    background-color: white; /* 默认背景为白色 */
    transition: background-color 0.3s; /* 添加过渡效果 */
  }

  .dropbtn.active {
    background-color: rgba(169, 169, 169, 0.1); /* 灰色背景 */
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 180px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }

  .dropdown-content.show {
    display: block;
  }

  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    background-color: white; /* 默认背景为白色 */
    transition: background-color 0.3s; /* 添加过渡效果 */
  }

  .dropdown-content a:hover {
    background-color: rgba(169, 169, 169, 0.1); /* 悬停时为灰色 */
  }
</style>