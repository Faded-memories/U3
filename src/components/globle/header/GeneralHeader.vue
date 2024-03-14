<template>
	<view class="generalHeader">
		<view class="" @click="toPage">
			<u-icon :name="props.icon" />
		</view>
		<view>
			{{props.title}}
		</view>
		<view>

		</view>
	</view>
</template>

<script setup lang="ts">
	let props = defineProps({
		title: {
			type: String,
			default: ''
		},
		icon: {
			type: String,
			default: 'arrow-left'
		},
	})
	const toPage = () => {
		if (!props.icon) return ''
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