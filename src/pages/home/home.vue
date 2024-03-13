<template>
	<view class="homeBox">
		<TabBer />
		<u-swiper :list="swiperList" indicator indicatorMode="line" circular />
		<u-notice-bar text="通知信息" mode="closable" speed="250" url="/pages/componentsB/tag/tag"></u-notice-bar>
		<u-grid :border="false" col="4">
			<u-grid-item v-for="(item,index) in gridList" :key="index">
				<u-icon :customStyle="{paddingTop:20+'rpx'}" :name="item.name" :size="22"></u-icon>
				<text class="grid-text">{{item.title}}</text>
			</u-grid-item>
		</u-grid>
	</view>
</template>

<script lang="ts" setup>
	import TabBer from "@/components/globle/TabBar.vue"
	import { ref } from "vue";
	const swiperList = ref<Array>([
		'https://cdn.uviewui.com/uview/swiper/swiper3.png',
		'https://cdn.uviewui.com/uview/swiper/swiper2.png',
		'https://cdn.uviewui.com/uview/swiper/swiper1.png'
	])
	const gridList = ref([
		{ name: 'photo', title: '视频详情' },
		{ name: 'lock', title: '文字详情' },
		{ name: 'star', title: '星星' },
		{ name: 'hourglass', title: '沙漏' },
		{ name: 'home', title: '首页' },
		{ name: 'star', title: '音量' }
	])
	const toPage = (url : string) => {
		uni.navigateTo({
			url
		})
	}
</script>

<style lang="scss" scoped>
	.homeBox {
		padding-top: var(--status-bar-height);
	}
</style>