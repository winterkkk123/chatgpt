<template>
  <div class="dialogBox">
    <RouterView></RouterView>
  </div>

</template>

<script lang="ts" setup name="dialogBox">
  import { RouterView } from 'vue-router';
  import { ref } from 'vue';

</script> 

<style scoped>
.dialogBox {
  min-width: 768px;
  height: calc(100% - 60px);
  /* height: 768px; */
  /* background-color: aqua; */
}
</style>