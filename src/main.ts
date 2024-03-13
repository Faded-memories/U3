import { createSSRApp } from "vue";
import App from "./App.vue";
import uviewPlus from '@/uni_modules/uview-plus'
//导入pinia
import * as Pinia from 'pinia';
export function createApp() {
	const app = createSSRApp(App);
	app.use(Pinia.createPinia());
	app.use(uviewPlus)
	return {
		app,
		Pinia, // 此处必须将 Pinia 返回
	};
}