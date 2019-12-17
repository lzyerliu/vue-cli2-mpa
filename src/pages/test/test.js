// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'
import App from './App'
import '@/assets/iconfont/iconfont.css'
import '@/style/style.less'
import '@/style/common.less'
import Loading from '@/components/Loading/index.js'
import Toast from '@/components/Toast/index.js'

Vue.config.productionTip = false

Vue.use(Loading)
Vue.use(Toast)

VueClipboard.config.autoSetContainer = true // add this line
Vue.use(VueClipboard)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
