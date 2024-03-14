<template>
	<view>
		<TabBer />
		这里是我的页面
		<view @click="loginOut">点击前往登录页</view>
	</view>
</template>

<script lang="ts" setup>
	import TabBer from "@/components/globle/TabBar.vue"
	const loginOut = () => {
		uni.redirectTo({
			url: '/pages/account/login'
		})
	}
</script>

<style>

</style>