<template>
  <div class="dialogueUser">
    <div class="user">
      {{ userQuestion }}
    </div>
  </div>
</template>

<script lang="ts" setup name="DialogueUser">
  import { ref } from "vue";

  const userQuestion = ref("问题提问");
</script> 

<style scoped>
  .dialogueUser {
    width: calc(90% + 20px);
    max-width: calc(90% + 20px);
    height: auto;
    /* background-color: aqua; */
    display: flex;
    justify-content: flex-end;
  }
  .user {
    width: auto;
    max-width: 80%;
    height: auto;
    background-color: rgba(169, 169, 169, 0.2);
    border-radius: 20px;
    padding: 10px 15px;
  }
</style>