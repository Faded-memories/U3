// 管理员
const member = [
	{
		pagePath: 'pages/project/project',
		iconPath: '/static/default_images/scene.png',
		selectedIconPath: '/static/default_images/select-scene.png',
		text: '场景'
	},
	{
		pagePath: 'pages/index/index',
		iconPath: '/static/default_images/index.png',
		selectedIconPath: '/static/default_images/select-index.png',
		text: '我的'
	}
];

// 普通用户
const notMember = [
	{
		pagePath: 'pages/project/project',
		iconPath: '/static/default_images/scene.png',
		selectedIconPath: '/static/default_images/select-scene.png',
		text: '扫码'
	},
	{
		pagePath: 'pages/index/index',
		iconPath: '/static/default_images/index.png',
		selectedIconPath: '/static/default_images/select-index.png',
		text: '我的'
	}
];
//抛出供外部调用
export default {
	member,
	notMember
};
