import Axios from 'axios'
import config from './env.js'
import { isWeiXin } from '../utils/util'

/**
 * vue 安装 axios 配置方法
 * 调用Vue.use 可执行该方法
 * 目的是将axios 挂载到全局的实例中
 */
function install (Vue) {
  Vue.prototype.$axios = Axios.create({
    baseURL: config.baseURL,
    timeout: 30000
  })

  Vue.prototype.$axios.interceptors.request.use(function (config) {
    config.headers['X-Requested-With'] = 'XMLHttpRequest'
    return config
  }, function (error) {
    return Promise.reject(error)
  })

  // 截获返回数据，对请求状态进行统一处理
  Vue.prototype.$axios.interceptors.response.use(function (response) {
    if (response.status) {
      return response.data
    } else {
      return Promise.reject(response)
    }
  }, function (error) {
    if (error.response.status === 401 && isWeiXin()) {
      console.log(isWeiXin())
      window.location.href = error.response.data.url
      return
    }
    return Promise.reject(error)
  })
}

export default {
  install
}
