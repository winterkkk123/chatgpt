<template>
  <div class="sessionList">
    <ul>
      <li
        v-for="(item, index) in items"
        :key="index"
        :class="{ selected: selectedIndex === index }"
        @click="selectItem(index)"
        @mouseenter="handleMouseEnter(index)"
        @mouseleave="handleMouseLeave"
      >
        <RouterLink :to="item.to">{{ item.name }}</RouterLink>
        <div class="ellipsis" v-if="hoverIndex === index || selectedIndex === index">
          <img src="@/assets/ellipsis.png" alt="Ellipsis">
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="SessionList">
  import { ref } from 'vue';
  import { RouterLink } from 'vue-router';

  const items = [
    { to: '/', name: 'ChatGpt' },
    { to: '/HomePage', name: '探索Gpt' },
    { to: '/Demo', name: 'Demo' },
    { to: '', name: '郑重铧快干活' },
    { to: '', name: '压力死郑重铧' }
  ];

  const selectedIndex = ref<number | null>(null);
  const hoverIndex = ref<number | null>(null);

  const selectItem = (index: number) => {
    selectedIndex.value = selectedIndex.value === index ? null : index;
  };

  const handleMouseEnter = (index: number) => {
    hoverIndex.value = index;
  };

  const handleMouseLeave = () => {
    hoverIndex.value = null;
  };
</script>

<style scoped>
  .sessionList {
    width: 100%;
    height: 100%;
    /* background-color: aqua; */
    overflow-y: auto; /* 当内容超出高度时显示垂直滚动条 */
  }
  ul {
    width: 100%;
    height: calc(100% - 120px); /* 使用 calc 函数计算高度 */
    padding: 0; /* 可选：去除默认的 padding */
    margin: 0; /* 可选：去除默认的 margin */
    display: flex;
    flex-direction: column;
    justify-content: flex-start; /* 靠上 */
    align-items: center; 
  }
  li {
    width: 85%;
    height: 38px;
    min-height: 38px;
    /* background-color: aqua; */
    /* margin-top: 10px; */
    border-radius: 10px;
    color: black;
    display: flex;
    align-items: center;
    padding: 0 10px;
    justify-content: space-between; /* 使内容两端对齐 */
    position: relative; /* 使 .ellipsis 绝对定位生效 */
  }
  li:hover {
    cursor: pointer;
    /* background-color: rgba(169, 169, 169, 0.2); */
  }
  li.selected {
    background-color: rgba(169, 169, 169, 0.2); /* 选中时的背景颜色 */
  }
  /* 使用深度选择器覆盖 RouterLink 的样式 */
  ::v-deep a {
    color: black;
    text-decoration: none; /* 可选：去除下划线 */
    flex: 0 1 80%; /* 占据 80% 的宽度 */
    white-space: nowrap; /* 防止文字换行 */
    overflow: hidden; /* 隐藏溢出的内容 */
    text-overflow: ellipsis; /* 在文本溢出时显示省略号 */
  }
  ::v-deep a:hover {
    color: black; /* 可选：保持悬停时的颜色一致 */
  }
  ul li .ellipsis {
    flex: 0 0 10%; /* 占据 10% 的宽度 */
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 10px; /* 调整省略号的位置 */
    top: 50%;
    transform: translateY(-50%);
  }
  ul li img {
    width: 20px; /* 设置省略号图片的宽度 */
    height: 20px; /* 设置省略号图片的高度 */
  }
</style>