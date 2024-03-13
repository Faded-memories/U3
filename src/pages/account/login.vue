<template>
	<view class="">
		<GeneralHeader title="登录页" />
		<view class="">2</view>
		<view class="">2</view>
		<view class="">2</view>
		<view class="">2</view>
		<view class="">2</view>
		<view class="">2</view>
		<view class="">2</view>
		<view class="">2</view>
		<view class="">2</view>
		<view class="">2</view>
		<view class="">2</view>
		<view class="">2</view>
		<view @click="login">这是登录按钮</view>
	</view>
</template>

<script lang="ts" setup>
	import GeneralHeader from "@/components/globle/header/GeneralHeader.vue"
	const login = () => {
		uni.switchTab({
			url: '/pages/account/index'
		})
	}
</script>

<style>
</style>