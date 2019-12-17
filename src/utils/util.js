// 改变标题
export const changeTitle = (title) => {
  document.title = title
}

// 是否微信打开
export const isWeiXin = () => {
  let ua = window.navigator.userAgent.toLowerCase()
  console.log(ua) // mozilla/5.0 (iphone cpu iphone os 9_1 like mac os x) applewebkit/601.1.46 (khtml, like gecko)version/9.0 mobile/13b143 safari/601.1
  let r = ua.match(/MicroMessenger/i)
  if (r !== null && r[0] === 'micromessenger') {
    return true
  } else {
    return false
  }
}

// 返回host
export const getHost = () => {
  return window.location.protocol + '//' + window.location.host
}

// 平台、设备和操作系统 ，返回ture或false,true表示是移动端，false表示不是移动端
export const isMobile = () => {
  let mobileArry = ['iPhone', 'iPad', 'Android', 'Windows Phone', 'BB10 Touch', 'BB10 Touch', 'PlayBook', 'Nokia']
  let ua = navigator.userAgent
  let res = mobileArry.filter(function (arr) {
    return ua.indexOf(arr) > 0
  })
  return res.length > 0
}

// 获取查询参数
export const getUrlQueryString = (name) => {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  let r = window.location.search.substr(1).match(reg)
  if (r !== null) {
    return unescape(r[2])
  }
  return ''
}

// 是否是IphoneX 系列
export const isIphoneXSeries = () => {
  // iPhone X、iPhone XS
  let isIPhoneX = /iphone/gi.test(window.navigator.userAgent) && window.devicePixelRatio && window.devicePixelRatio === 3 && window.screen.width === 375 && window.screen.height === 812
  // iPhone XS Max
  let isIPhoneXSMax = /iphone/gi.test(window.navigator.userAgent) && window.devicePixelRatio && window.devicePixelRatio === 3 && window.screen.width === 414 && window.screen.height === 896
  // iPhone XR
  let isIPhoneXR = /iphone/gi.test(window.navigator.userAgent) && window.devicePixelRatio && window.devicePixelRatio === 2 && window.screen.width === 414 && window.screen.height === 896

  return isIPhoneX || isIPhoneXSMax || isIPhoneXR
}

// 去左空格
export const trimLeftSpace = (s) => {
  return s.replace(/(^\s*)/g, '')
}

// 去右空格
export const trimRightSpace = (s) => {
  return s.replace(/(\s*$)/g, '')
}

// 去左右两端所有空格
export const trimLeftRightSpace = (s) => {
  return s.replace(/^\s+|\s+$/g, '')
}

// 去所有空格
export const trimAllSpace = (s) => {
  return s.replace(/\s+/g, '')
}

/**
 * 日期格式化
 * @param {*} time Date对象或时间戳
 * @param {*} cFormat 格式 {yyyy}-{mm}-{dd} {hh}:{ii}:{ss}
 */
export const parseTime = (time, cFormat) => {
  if (arguments.length === 0) {
    return null
  }
  let format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000
    date = new Date(time)
  }
  let formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  let timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value] }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return timeStr
}

/**
 * 格式人性化时间
 * @param {*} time 时间戳
 * @param {*} option 格式 {yyyy}-{mm}-{dd} {hh}:{ii}:{ss}
 */
export const formatTime = (time, option) => {
  if (('' + time).length === 10) {
    // 秒
    time = parseInt(time) * 1000
  } else {
    // 毫秒
    time = time * 1
  }
  let d = new Date(time)
  let now = Date.now()

  let diff = (now - time) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    )
  }
}

/**
 * 判断日期是否是今天
 * @param {*} str '2019-03-25 12:12:12'
 */
export const isToday = (str) => {
  let nowYear = parseInt(new Date().getFullYear())
  let nowMonth = parseInt(new Date().getMonth() + 1)
  let nowDate = parseInt(new Date().getDate())
  let strYear = parseInt(new Date(str).getFullYear())
  let strMonth = parseInt(new Date(str).getMonth() + 1)
  let strDate = parseInt(new Date(str).getDate())
  return nowYear === strYear && nowMonth === strMonth && nowDate === strDate
}

/**
 * Toast弹窗
 */
export const Toast = (msg, duration) => {
  let mMark = document.getElementById('$toast_container_el')
  if (mMark) {
    return
  }
  duration = isNaN(duration) ? 3000 : duration
  let m = document.createElement('div')
  m.innerHTML = msg
  m.setAttribute('id', '$toast_container_el')
  m.style.cssText = `max-width: 60%;
                      min-width: 140px;
                      padding: 10px 14px;
                      color: #fff;
                      font-size: 16px;
                      line-height: 18px;
                      text-align: center;
                      border-radius: 6px;
                      position: fixed;
                      bottom: 50%;
                      left: 50%;
                      transform: translate(-50%, -50%);
                      -webkit-transform: translate(-50%, -50%);
                      z-index: 999999;
                      background: rgba(0, 0, 0, .7);
                    `
  document.body.appendChild(m)
  let showTime = setTimeout(() => {
    let d = 0.5
    m.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in'
    m.style.opacity = '0'
    let closeTime = setTimeout(() => {
      document.body.removeChild(m)
      clearTimeout(showTime)
      clearTimeout(closeTime)
    }, d * 1000)
  }, duration)
}

// android终端
export const isAndroid = () => {
  var u = navigator.userAgent
  return u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
}

// ios终端
export const isIos = () => {
  let u = navigator.userAgent
  return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
}

// 与ios交互
export const setupWebViewJavascriptBridge = (callback) => {
  if (window.WebViewJavascriptBridge) { return callback(window.WebViewJavascriptBridge) }
  if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback) }
  window.WVJBCallbacks = [callback]
  var WVJBIframe = document.createElement('iframe')
  WVJBIframe.style.display = 'none'
  WVJBIframe.src = 'https://__bridge_loaded__'
  document.documentElement.appendChild(WVJBIframe)
  setTimeout(function () { document.documentElement.removeChild(WVJBIframe) }, 0)
}
