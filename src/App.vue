<script setup lang="ts">
	import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
	onLaunch(() => {
		
	});
	onShow(() => {
		setTimeout(() => {
			uni.hideTabBar();
		}, 150);
	});
	onHide(() => {
		console.log("App Hide");
	});
</script>
<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "@/uni_modules/uview-plus/index.scss";
</style>