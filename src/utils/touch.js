/**
 * 用法
 * 1、import Touch from '@/utils/touch.js'
 * 2、Vue.use(Touch)
 * 3、<div v-swipeleft="(e)=>vueTouch('left',e)" v-swiperight="(e)=>vueTouch('right',e)" class="record-container"></div>
 * 4、vueTouch(s, e) {
      console.log([s, e])
      if (s === 'left') {
        if (this.type === 'seed') return
        this.changeTab('seed')
      }
      if (s === 'right') {
        if (this.type === 'flower') return
        this.changeTab('flower')
      }
    }
 * @param {*} el
 * @param {*} binding
 * @param {*} type
 * @param {*} vnode
 */

function VueTouch(el, binding, type, vnode) {
  this.obj = el
  this.binding = binding
  this.touchType = type
  this.vueTouches = { x: 0, y: 0 }
  this.vueMoves = true
  this.vueLeave = true
  this.longTouch = true
  this.vueCallBack = binding.value
  this.obj.addEventListener('touchstart', (e) => {
    this.start(e)
  }, false)
  this.obj.addEventListener('touchend', (e) => {
    this.end(e)
  }, false)
  this.obj.addEventListener('touchmove', (e) => {
    this.move(e)
  }, false)
  vnode.key = this.randomString()
}
VueTouch.prototype = {
  start: function(e) {
    e.preventDefault()
    this.vueMoves = true
    this.vueLeave = true
    this.longTouch = true
    this.vueTouches = { x: e.changedTouches[0].pageX, y: e.changedTouches[0].pageY }
    this.time = setTimeout(function() {
      if (this.vueLeave && this.vueMoves) {
        this.touchType === 'longtap' && this.vueCallBack(e)
        this.longTouch = false
      }
    }.bind(this), 1000)
  },
  end: function(e) {
    let disX = e.changedTouches[0].pageX - this.vueTouches.x
    let disY = e.changedTouches[0].pageY - this.vueTouches.y
    clearTimeout(this.time)
    if (Math.abs(disX) > 10 || Math.abs(disY) > 100) {
      this.touchType === 'swipe' && this.vueCallBack(e)
      if (Math.abs(disX) > Math.abs(disY)) {
        if (disX > 10) {
          this.touchType === 'swiperight' && this.vueCallBack(e)
        }
        if (disX < -10) {
          this.touchType === 'swipeleft' && this.vueCallBack(e)
        }
      } else {
        if (disY > 10) {
          this.touchType === 'swipedown' && this.vueCallBack(e)
        }
        if (disY < -10) {
          this.touchType === 'swipeup' && this.vueCallBack(e)
        }
      }
    } else {
      if (this.longTouch && this.vueMoves) {
        this.touchType === 'tap' && this.vueCallBack(e)
        this.vueLeave = false
      }
    }
  },
  move: function(e) {
    this.vueMoves = false
  },
  randomString: function() {
    let len = 10
    let $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
    let maxPos = $chars.length
    let pwd = ''
    for (let i = 0; i < len; i++) {
      pwd += $chars.charAt(Math.floor(Math.random() * maxPos))
    }
    return pwd
  }
}

export default {
  install: function (Vue, options) {
    Vue.directive('tap', {
      bind: function(el, binding, vnode) {
        new VueTouch(el, binding, 'tap', vnode)
      }
    })
    Vue.directive('swipe', {
      bind: function(el, binding, vnode) {
        new VueTouch(el, binding, 'swipe', vnode)
      }
    })
    Vue.directive('swipeleft', {
      bind: function(el, binding, vnode) {
        new VueTouch(el, binding, 'swipeleft', vnode)
      }
    })
    Vue.directive('swiperight', {
      bind: function(el, binding, vnode) {
        new VueTouch(el, binding, 'swiperight', vnode)
      }
    })
    Vue.directive('swipedown', {
      bind: function(el, binding, vnode) {
        new VueTouch(el, binding, 'swipedown', vnode)
      }
    })
    Vue.directive('swipeup', {
      bind: function(el, binding, vnode) {
        new VueTouch(el, binding, 'swipeup', vnode)
      }
    })
    Vue.directive('longtap', {
      bind: function(el, binding, vnode) {
        new VueTouch(el, binding, 'longtap', vnode)
      }
    })
  }
}
