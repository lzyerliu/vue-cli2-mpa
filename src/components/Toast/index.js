let toastTemp = require('./index.vue').default // cli3.0以后引入vue模板需要default

let Toast = {} // 定义插件对象

Toast.install = (Vue, options) => { // Vue的install方法，用于定义vue插件
  // 如果存在 不重复创建DOM
  if (document.getElementsByClassName('.toast-wrapper').length) return

  // 创建一个VUE构造器
  let TTemp = Vue.extend(toastTemp)

  // 实例化VUE实例
  let $vm = new TTemp()

  // 此处使用$mount来手动开启编译。用$el来访问元素，并插入到body中
  let tpl = $vm.$mount().$el
  document.body.appendChild(tpl)

  Vue.prototype.$_toast = { // 在Vue的原型上添加实例方法，以全局调用
    show(options) {
      // 通过传入props改变$vm下的属性控制组件 例如$vm.text = options

      // 内容背景色
      $vm.bgColor = options && options.bgColor ? options.bgColor : 'rgba(0, 0, 0, 0.7)'
      // 字体色
      $vm.color = options && options.color ? options.color : '#ffffff'
      // 内容
      $vm.message = options && options.message ? options.message : ''
      // 位置 （3种分别为 top、middle、bottom）
      $vm.position = options && options.position ? options.position : 'bottom'
      // 显示停留多少秒
      $vm.duration = options && options.duration ? options.duration : 3000

      $vm.showToast = true

      let timer = null
      timer = setTimeout(() => {
        $vm.showToast = false
        clearTimeout(timer)
      }, $vm.duration)
    }
  }
}

// 导出Toast
export default Toast
