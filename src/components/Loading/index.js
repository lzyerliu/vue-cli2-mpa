let loadTemp = require('./index.vue').default // cli3.0以后引入vue模板需要default

let Load = {} // 定义插件对象

Load.install = (Vue, options) => { // Vue的install方法，用于定义vue插件
  // 如果存在loading 不重复创建DOM
  if (document.getElementsByClassName('.load-wrapper').length) return

  // 创建一个VUE构造器
  let LTemp = Vue.extend(loadTemp)

  // 提供一个在页面上已存在的DOM元素作为Vue实例的挂载目标。
  // 在实例挂载之后，可以通过$vm.$el访问。
  // 如果这个选项在实例化时有用到，实例将立即进入编译过程。否则，需要显示调用vm.$mount()手动开启编译(如下)
  // 提供的元素只能作为挂载点。所有的挂载元素会被vue生成的dom替换。因此不能挂载在顶级元素(html, body)上
  // let $vm = new toastTpl({
  //  el: document.createElement('div')
  // })

  // 实例化VUE实例
  let $vm = new LTemp()

  // 此处使用$mount来手动开启编译。用$el来访问元素，并插入到body中
  let tpl = $vm.$mount().$el
  document.body.appendChild(tpl)

  Vue.prototype.$_loading = { // 在Vue的原型上添加实例方法，以全局调用
    show(options) {
      // 通过传入props改变$vm下的属性控制组件 例如$vm.text = options

      // 背景颜色
      $vm.bgColor = options && options.bgColor ? options.bgColor : 'rgba(0, 0, 0, 0)'
      // 内容背景颜色
      $vm.contentBgColor = options && options.contentBgColor ? options.contentBgColor : 'rgba(0, 0, 0, 0.6)'
      // loading icon 颜色
      $vm.color = options && options.color ? options.color : '#ffffff'
      // 类型
      $vm.loadingType = options && options.loadingType ? options.loadingType : 'felding-circle'
      // 加载文案
      $vm.loadingText = options && options.loadingText ? options.loadingText : ''

      $vm.showLoading = true
    },
    hide() {
      $vm.showLoading = false
    }
  }
}

// 导出Load
export default Load
