<template>
	<view class="homeBox">
		<TabBer />
		<u-swiper :list="swiperList" indicator indicatorMode="line" circular />
		<u-notice-bar :text="noticeText" mode="closable" speed="250" url="/pages/home/contentDetails" direction="column" />
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
	import { ref ,onMounted} from "vue";
	import { requestLogin } from "@/utils/api/home.js";
	//点击登录按钮操作
	const getToken = async () => {
	  let res = await requestLogin()
	  console.log('res', res)
	  }
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
	const noticeText = ref<Array>([
		"通知信息1",
		"通知信息2",
		"通知信息3",
	])
	const toPage = (url : string) => {
		uni.navigateTo({
			url
		})
	}
	onMounted(()=>{
		getToken()
	})
</script>

<style lang="scss" scoped>
	.homeBox {
		padding-top: var(--status-bar-height);
	}
</style>