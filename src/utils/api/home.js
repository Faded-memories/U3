import { setRequestConfig } from '../request.js';
// 调用setRequestConfig函数进行请求配置
setRequestConfig();
const http = uni.$u.http
// 发起登录请求   post请求
export const requestLogin = (data) => http.post('/wx-api/login', data);
//获取个人中心信息  get请求
export const requestUserInfo = () => http.get('/wx-api/me/info')