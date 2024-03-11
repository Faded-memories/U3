<template>
	<view>
		<video id="myVideo" src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/2minute-demo.mp4"
			@error="videoErrorCallback" enable-danmu danmu-btn controls></video>
		<video id="myVideo2" src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/2minute-demo.mp4"
			@error="videoErrorCallback" enable-danmu danmu-btn controls></video>
		<video id="myVideo3" src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/2minute-demo.mp4"
			@error="videoErrorCallback" enable-danmu danmu-btn controls></video>
		<video id="myVideo4" src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/2minute-demo.mp4"
			@error="videoErrorCallback" enable-danmu danmu-btn controls></video>
		<cover-view class="control" @click="con">
			<cover-view>这是个控件</cover-view>
		</cover-view>
	</view>
</template>

<script lang="ts" setup>
	const con = () => {
		console.log('点击了控件')
	}
	const videoErrorCallback = () => {

	}
</script>

<style lang="scss" scoped>
	#myVideo,
	#myVideo1,
	#myVideo2,
	#myVideo3,
	#myVideo4{
		width: 100vw;
	}

	.control {
		width: 100vw;
		height: 60px;
		background-color: pink;
		position: fixed;
		top: 50px;
		z-index: 999999;
	}
</style>