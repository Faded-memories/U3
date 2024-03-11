<template>
	<view class="u3-Page">
		home
		<view @click="toPage('/pages/home/contentDetails')">文本详情</view>
		<view @click="toPage('/pages/home/contentDetails')">文本详情</view>
		<view @click="toPage('/pages/home/contentDetails')">文本详情</view>
		<view @click="toPage('/pages/home/contentDetails')">文本详情</view>
		<view @click="toPage('/pages/home/contentDetails')">视频详情</view>
		<TabBer />
	</view>
</template>

<script lang="ts" setup>
	import TabBer from "@/components/globle/TabBar.vue"
	const toPage = (url:string)=>{
		uni.navigateTo({
			url
		})
	}
</script>

<style>

</style>
