// stores/counter.js
import { defineStore } from 'pinia';

export const useTabBarStore = defineStore('counter', {
	state: () => {
		return { tabIndex: 0 };
	},
	// 也可以这样定义
	// state: () => ({ count: 0 })
	actions: {
		indexChange(tabIndex: any) {
			this.tabIndex = Number(tabIndex)
		},
	},
});
