<template>
	<view class="u3-Page contentDetails">
		<GeneralHeader title="内容详情" />
<u-count-to ref="uCountTo" :endVal="endVal" :autoplay="autoplay"></u-count-to>
	</view>
</template>

<script lang="ts" setup>
	import GeneralHeader from "@/components/globle/header/GeneralHeader.vue"
	import { getCurrentInstance,ref,onMounted  } from "vue";
	const endVal = ref(5000.66)
	const autoplay = ref(false)
	let refs = null;
	    onMounted(() => {
	      let { $refs } = (getCurrentInstance() as any).proxy;
	      refs = $refs;
		  refs.uCountTo.start()
	    });
	// uCountTo.start();
</script>

<style lang="scss" scoped>
	.contentDetails {
		color: $u-primary;
		// background-color: pink;
	}
</style>