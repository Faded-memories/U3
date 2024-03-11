<template>
	<view class="generalHeader">
		<view class="" @click="toPage">
			<svg width="27" height="27" viewBox="0 0 32 32">
				<path
					d="M21.781 7.844l-9.063 8.594 9.063 8.594q0.25 0.25 0.25 0.609t-0.25 0.578q-0.25 0.25-0.578 0.25t-0.578-0.25l-9.625-9.125q-0.156-0.125-0.203-0.297t-0.047-0.359q0-0.156 0.047-0.328t0.203-0.297l9.625-9.125q0.25-0.25 0.578-0.25t0.578 0.25q0.25 0.219 0.25 0.578t-0.25 0.578z"
					fill="#000000"></path>
			</svg>
		</view>
		<view>
			{{props.title}}
		</view>
		<view>

		</view>
	</view>
</template>

<script setup lang="ts">
	import { ref } from "vue";
	let props = defineProps({
		title: {
			type: String,
			default: ''
		}
	})
	const toPage = () => {
		uni.navigateBack()
	}
</script>

<style lang="scss" scoped>
	.generalHeader {
		position: fixed;
		left: 0;
		top: 0;
		width: calc(100vw - 24rpx);
		height: 88rpx;
		padding: calc(var(--status-bar-height)) 12rpx 0 12rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: white;
		z-index: 999;

		>view {
			display: flex;
			align-items: center;
		}

		>view>image,
		>view>svg {
			width: 54rpx;
			height: 54rpx;
		}

		>view:nth-child(2n) {
			flex: 1;
			color: #333;
			font-size: 32rpx;
			justify-content: center;
		}

		>view:first-child {
			width: 180rpx;
		}

		>view:last-child {
			width: 180rpx;
			flex-direction: row-reverse;
		}
	}
</style>