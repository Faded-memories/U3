<template>
	<view class="homeBox">
		<TabBer />
		这里是首页
	</view>
</template>

<script lang="ts" setup>
	import TabBer from "@/components/globle/TabBar.vue"
</script>

<style lang="scss" scoped>
	.homeBox {
		padding-top: var(--status-bar-height);
	}
</style>