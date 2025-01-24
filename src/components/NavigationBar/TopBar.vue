<template>
	<div class="topBar">
		<!-- 存放logo -->
		<div class="topLogo">
			
			<!-- 左侧logo -->
			<div class="leftLogo">
				<div class="chatgptLogo">
					<img src="@/assets/chatgptLogo.png" alt="">
				</div>
			</div>
			<!-- 右侧logo -->
			<div class="rightLogo">
				<div class="find">
					<img src="@/assets/find.png" alt="">
				</div>
				<div class="createANewSession">
					<img src="@/assets/createANewSession.png" alt="">
				</div>
			</div>

		</div>
	</div>
</template>

<script lang="ts" setup name="TopBar">

</script>

<style scoped>
	.topBar {
		width: 100%;
		height: 60px;
		min-height: 60px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.topLogo {
		width: 91%;
		height: 68%;
		/* background-color: white; */
		display: flex; /* 设置为 flexbox 布局 */
		justify-content: space-between; /* 左右两端排列 */
		align-items: center; /* 垂直居中 */
	}
	.leftLogo {
		width: 50%;
		height: 100%;
		display: flex;
		justify-content: flex-start; /* 确保所有左侧 logo 在左边 */
		gap: 0px; /* 设置左侧 logo 之间的间距 */
	}
	.rightLogo {
		width: 50%;
		height: 100%;
		display: flex; 
		justify-content: flex-end; /* 确保所有右侧 logo 在右边 */
		gap: 0px;
	}
	.createANewSession,
	.rightLogos {
		display: flex;
		justify-content: flex-end; /* 确保所有右侧 logo 在右边 */
		gap: 0px; 
	}
	.find,
	.createANewSession,
	.chatgptLogo {
		height: 100%;
		aspect-ratio: 1; /* 设置宽高比为 1:1 */
		position: relative; /* 为了定位 img */
		border-radius: 10px;
	}
	.find:hover,
	.createANewSession:hover,
	.chatgptLogo:hover {
		background-color: rgba(169, 169, 169, 0.2); /* 鼠标悬停时添加淡灰色背景 */
		cursor: pointer; /* 鼠标悬停时变为手型 */
	}
	.find img,
	.createANewSession img,
	.chatgptLogo img {
		width: 50%;   
		height: 50%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%); /* 实现上下左右居中 */
	}
	.chatgptLogo img {
		width: 60%;
		height: 60%;
	}
</style>