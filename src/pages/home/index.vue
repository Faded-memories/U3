<template>
	<view>
		home
		<text @click="toPage('/pages/home/details')">视频详情</text>
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
