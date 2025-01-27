<template>
  <div class="chat">
    <ModelSelect class="modelSelect"/>
    <DialogBox />
  </div>
</template>

<script lang="ts" setup name="Chat">
  import { ref } from 'vue';
  import DialogBox from './Chat/DialogBox.vue';
  import ModelSelect from './Chat/ModelSelect.vue';
  
</script> 

<style scoped>
  .chat {
    width: auto;
    max-width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
    /* background-color: aqua; */
  }
  /* .modelSelect {
    background-color: black;
  } */
</style>