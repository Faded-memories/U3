<template>
	<view class="u3-Page">
		<GeneralHeader title="视频详情"/>
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
	import GeneralHeader from "@/components/globle/header/GeneralHeader.vue"
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
	#myVideo4 {
		width: 100vw;
	}

	.control {
		width: 100vw;
		height: 120rpx;
		background-color: pink;
		position: fixed;
		top: 350rpx;
		z-index: 999999;
	}
</style>