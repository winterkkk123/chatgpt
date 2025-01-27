<template>
  <div class="dialogueChat">
    <!-- 头像 -->
    <div class="chatAvatar">
      <img src="@/assets/chatgptLogo.png" alt="" />
    </div>
    <!-- 内容 -->
    <div class="chatAnswer">
      {{ chatAnswer }}
    </div>
  </div>
</template>

<script lang="ts" setup name="DialogueChat">
  import { ref } from 'vue';

  const chatAnswer = ref("问题回答");
</script> 

<style scoped>
  .dialogueChat {
    margin-top: 10px;
    width: calc(90% + 40px);
    max-width: calc(90% + 40px);
    height: auto;
    /* background-color: aqua; */
    display: flex;
    padding: 10px;

  }
  .chatAvatar {
    /* margin-top: 10px; */
    width: 40px;
    height: 100%;
    /* background-color: aqua; */
  }
  .chatAvatar img {
    width: 30px;
    height: 30px;
  }
  .chatAnswer {
    width: auto;
    height: auto;
    padding: 0 10px;
    padding-top: 3px;
  }
</style>