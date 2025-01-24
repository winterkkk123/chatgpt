<template>
  <div class="chat">
    <DialogBox />
  </div>
</template>

<script lang="ts" setup name="Chat">
  import { ref } from 'vue';
  import DialogBox from './Chat/DialogBox.vue';
  
</script> 

<style scoped>
  .chat {
    width: auto;
    max-width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
  }
  .dialogBox {
    max-width: 100%;
    max-height: 100%;
  }
</style>