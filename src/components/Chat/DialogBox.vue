<template>
  <div class="dialogBox">
    <input 
      type="text" 
      v-model="userInput" 
      placeholder="请输入信息"
    />
    <button>提交</button>
    <RouterView></RouterView>
  </div>

</template>

<script lang="ts" setup name="dialogBox">
  import { RouterView } from 'vue-router';
  import { ref } from 'vue';

  const userInput = ref('');

</script> 

<style scoped>
.dialogBox {
  min-width: 768px;
  height: 100%;
  /* background-color: aqua; */
}
</style>