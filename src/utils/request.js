import BASE_URL from './env.js' //引入接口共用地址
import useUserStore from '@/store/user.js' //引入仓库，使用的是pinia
export const setRequestConfig = () => {
  uni.$u.http.setConfig((config) => {
    /* config 为默认全局配置*/
    config.baseURL = BASE_URL
    return config
  })
  // 请求拦截
  uni.$u.http.interceptors.request.use(
    (config) => {
      const token = useUserStore().token
      if (token) {
        config.header.Authorization = `Bearer ${token}`
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )
  // 响应拦截
  uni.$u.http.interceptors.response.use(
    (response) => {
      if (Number(response.data.code) === 401) {
        // 提示重新登录
        uni.$showMsg('请登录')
        useUserStore().userLogout()
        setTimeout(() => {
          uni.switchTab({
            url: '/pages/account/login'
          })
        }, 1000)
      }
      return response
    },
    (error) => {
      return Promise.reject(error)
    }
  )
}
