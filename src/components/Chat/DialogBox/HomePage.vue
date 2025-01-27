<template>
  <div class="HomePage">
    <!-- <div class="top"></div> -->
    <h1>Hello, ChatGPT!</h1>
    <!-- 输入框 -->
    <div class="question">
      <textarea 
        v-model="userInput" 
        :placeholder="placeholderText"
        @focus="clearPlaceholder"
        @blur="restorePlaceholder"
        @input="adjustTextareaHeight"
        ref="textarea"
      />
      <button>提问</button>
    </div>
  </div>
</template>

<script lang="ts" setup name="HomePage">
  import { RefSymbol } from '@vue/reactivity';
  import { ref, nextTick } from 'vue';

  const userInput = ref('');
  const placeholderText = ref('给"ChatGPT"发送消息');
  const textarea = ref<HTMLTextAreaElement | null>(null);

  const clearPlaceholder = () => {
    if (userInput.value === placeholderText.value) {
      userInput.value = '';
    }
  };

  const restorePlaceholder = () => {
    if (userInput.value === '') {
      userInput.value = placeholderText.value;
    }
  };

  const adjustTextareaHeight = () => {
    if (textarea.value) {
      textarea.value.style.height = 'auto'; // 重置高度为自动
      const newHeight = textarea.value.scrollHeight; // 减去20px
      textarea.value.style.height = `${newHeight}px`; // 设置为内容高度减去20px
      // console.log(`Scroll Height: ${textarea.value.scrollHeight}px`);
      if (newHeight > 240) { // 240px 是 max-height
        textarea.value.style.overflowY = 'scroll'; // 显示滚动条
      } else {
        textarea.value.style.overflowY = 'hidden'; // 隐藏滚动条
      }
    }
  };

  nextTick(() => {
    adjustTextareaHeight();
  });
</script> 

<style scoped>
  .HomePage {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    /* background-color: aqua; */
  }

  .top {
    width: 100%;
    height: 60px;
    background-color: white;
  }

  h1 {
    margin-bottom: 20px;
  }

  .question {
    display: flex;
    align-items: center;
    width: 90%;
    /* max-width: 600px; */
    background-color: rgba(169, 169, 169, 0.1);
    border-radius: 25px;
    padding: 15px 20px;
   }

  textarea {
    flex: 1;
    /* padding: 10px; */
    font-size: 20px;
    font-weight: bolder;
    color: black;
    border: none;
    outline: none;
    background-color: transparent;
    resize: none;
    overflow-y: hidden;
    height: auto;
    min-height: 40px; /* 最小高度 */
    max-height: 240px; /* 最大高度为6行 */
    box-sizing: border-box; /* 确保 width 和 height 包括内边距和边框 */
    /* background-color: aqua; */
    display: block;
  }

  button {
    color: white;
    margin-left: 10px;
    padding: 10px 20px;
    font-size: 18px;
    border: none;
    border-radius: 10px;
    background-color: black;
    cursor: pointer;
  }

  button:hover {
    background-color: black;
  }
</style>