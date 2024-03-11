<template>
	<view class="u3Tabbar">
		<view class="u3Tabbar-container" v-for="(item, index) in tabBarList" :key="index">
			<view @click="switchTab(index)">
				<image :src="activeIndex == index ?item.acIcvon:item.icon" />
				<text :style="{color:activeIndex == index ?item.color:''}">{{ item.label }}</text>
			</view>
		</view>
	</view>
</template>


<script setup lang="ts">
	import { ref } from "vue";
	const tabBarList = ref([
		{ label: '首页', path: '/pages/home/index', icon: '/static/tabBar/home.png', acIcvon: '/static/tabBar/homet.png', color: 'rgb(89, 181, 117)' },
		{ label: '我的', path: '/pages/account/index', icon: '/static/tabBar/my.png', acIcvon: '/static/tabBar/myt.png', color: 'rgb(89, 181, 117)' }
	])
	let activeIndex = ref(0)
	const switchTab = (ind : number) => {
		if (activeIndex.value === ind) return ''
		activeIndex.value = ind
		uni.switchTab({
			url: tabBarList.value[ind].path
		})
	}
</script>

<style lang="scss" scoped>
	.u3Tabbar {
		position: fixed;
		bottom: 0;
		width: 100vw;
		height: 100rpx;
		display: flex;
		justify-content: space-between;
		background-color: white;
		color: #333;
		box-shadow: 0 -5rpx 10rpx rgba(0, 0, 0, 0.1);
		/* 设置上边框阴影 */

		&-container {
			padding: 0 48rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 20rpx;

			image {
				width: 44rpx;
				height: 44rpx;
			}

			view {
				width: 100rpx;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: space-between;
			}
		}
	}
</style>