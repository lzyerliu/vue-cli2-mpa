import MD5 from 'blueimp-md5'
import Axios from 'axios'
import config from './env.js'
// import { isWeiXin } from '../utils/util'

axios = Axios.create({
  baseURL: config.baseURL,
  timeout: 30000
})

// 请求拦截
axios.interceptors.request.use(function (config) {
  // console.log(config)
  config.headers['X-Requested-With'] = 'XMLHttpRequest'
  // 接口不加签名，自行设置{ headers: { 'No-Sign': true }}
  if (config.headers['No-Sign']) {
    return config
  }

  let accessURL = config.baseURL + config.url
  let routeURL = config.url
  let time = Date.parse(new Date()) / 1000
  if (accessURL.indexOf('?') !== -1) {
    accessURL += '&ts=' + time
    routeURL += '&ts=' + time
  } else {
    accessURL += '?ts=' + time
    routeURL += '?ts=' + time
  }
  let accessSign = ''
  // get 请求
  if (config.method === 'get') {
    accessSign = window.Travel && window.Travel.sign ? window.Travel.sign(config.method, accessURL, '') : ''
  }

  // post请求
  if (config.method === 'post') {
    if (config.headers['Content-Type'].indexOf('application/json') !== -1) {
      let jsonStr = JSON.stringify(config.data)
      config.data = jsonStr
      accessSign = window.Travel && window.Travel.sign ? window.Travel.sign(config.method, accessURL, MD5(jsonStr)) : ''
    }

    if (config.headers['Content-Type'].indexOf('application/x-www-form-urlencoded') !== -1) {
      let postStr = ''
      let postArr = Object.keys(config.data)
      postArr.forEach((key, index) => {
        postStr += (key + '=' + config.data[key])
        if (index > 0 || index < (postArr.length - 1)) {
          postStr += '&'
        }
      })
      config.data = postStr
      accessSign = window.Travel && window.Travel.sign ? window.Travel.sign(config.method, accessURL, MD5(postStr)) : ''
    }

    // multipart/form-data 类型暂时不加sign
    if (config.headers['Content-Type'] === 'multipart/form-data') {
      // console.log('form')
      // accessSign = window.Travel && window.Travel.sign ? window.Travel.sign(config.method, accessURL, MD5(config.data.FormData)) : ''
    }
  }
  config.url = routeURL + '&sign=' + accessSign
  return config
}, function (error) {
  return Promise.reject(error)
})

// 响应
axios.interceptors.response.use(function (response) {
  if (response.status && response.status === 200) {
    // alert('res----' + JSON.stringify(response))
    return response.data
  } else {
    return Promise.reject(response)
  }
}, function (error) {
  // if (error.response.status === 401 && isWeiXin()) {
  //   console.log(isWeiXin())
  //   window.location.href = error.response.data.url
  //   return
  // }
  // alert('error----' + JSON.stringify(error))
  return Promise.reject(error)
})

export default axios
