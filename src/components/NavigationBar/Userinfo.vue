<template>
  <div class="Userinfo">
    <!-- <div class="left"></div> -->
    
    <!-- 头像 -->
    <div class="UserAvatar">
      <img src="@/assets/userAvatar.jpg" alt="">
    </div>
    <!-- 用户名 -->
    <div class="UserName">winter</div>
    <!-- 我的 -->
    <div class="UserCenter">
      <img src="@/assets/userCenter.png" alt="">
    </div>
    
    <!-- <div class="right"></div> -->
  </div>
</template>
  
<script lang="ts" setup name="Userinfo">

</script>
  
<style scoped>
  .Userinfo {
    display: flex;
    width: 100%;
    height: 60px;
    /* background-color: aqua; */
  }
  .Userinfo:hover {
    cursor: pointer;
  }
  .right,
  .left {
    width: 5%;
    height: 100%;
  }
  .UserAvatar {
    width: 20%;
    height: 100%;
    margin: 0 1%;
    /* background-color: aqua; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .UserAvatar img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover; /* 确保图片填充整个圆形区域 */
  }
  .UserName {
    width: 58%;
    height: 100%;
    padding: 0 3%;
    display: flex;
    justify-content: left;
    align-items: center;
    /* background-color: aqua; */
    white-space: nowrap; /* 防止文字换行 */
    overflow: hidden; /* 隐藏溢出的内容 */
    text-overflow: ellipsis; /* 在文本溢出时显示省略号 */
  }
  .UserCenter {
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .UserCenter img {
    width: 24px;
    height: 24px;
  }
</style>