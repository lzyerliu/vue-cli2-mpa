<template>
  <div class="yo-scroll"
    :class="{ 'down': (state === 0), 'up': (state === 1), refresh: (state === 2), touch: touching}"
    @touchstart="touchStart($event)"
    @touchmove="touchMove($event)"
    @touchend="touchEnd($event)"
    @scroll="(onInfinite || infiniteLoading) ? onScroll($event) : undefined">
    <section class="inner" :style="{ top: onRefresh ? '-1.5rem': '0', transform: 'translate3d(0, ' + top + 'px, 0)', webkitTransform: 'translate3d(0, ' + top + 'px, 0)' }">
      <header v-show="onRefresh" class="pull-refresh">
        <slot name="pull-refresh">
          <span class="down-tip">↓ {{ topPullText }}</span>
          <span class="up-tip">↑ {{ topDropText }}</span>
          <div class="refresh-tip">
            <img class="loading" :src="loadingImg" alt="">
            <span>{{ topLoadingText }}</span>
          </div>
        </slot>
      </header>
      <slot></slot>
      <footer class="load-more" v-show="enableInfinite && infiniteLoading">
        <slot name="load-more">
          <img class="loading" :src="loadingImg" alt="">
          <span>{{ bottomLoadingText }}</span>
        </slot>
      </footer>
    </section>
  </div>
</template>

<script>
import LoadingImg from './images/loading.gif'
export default {
  props: {
    topPullText: {
      type: String,
      default: '下拉刷新'
    },
    topDropText: {
      type: String,
      default: '松开更新'
    },
    topLoadingText: {
      type: String,
      default: '更新中'
    },
    bottomLoadingText: {
      type: String,
      default: '加载中...'
    },
    // 上拉滚动距离底部多少时 加载更多, 默认1, 避免到底部都等于0的情况
    bottomDistance: {
      type: Number,
      default: 1
    },
    // 下拉多少显示 ‘松开更新’
    offset: {
      type: Number,
      default: 50
    },
    enableInfinite: {
      type: Boolean,
      default: true
    },
    enableRefresh: {
      type: Boolean,
      default: true
    },
    onRefresh: {
      type: Function,
      default: undefined,
      required: false
    },
    onInfinite: {
      type: Function,
      default: undefined,
      require: false
    },
    infiniteLoading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      loadingImg: LoadingImg,
      top: 0,
      state: 0,
      startY: 0,
      touching: false
    }
  },
  methods: {
    touchStart(e) {
      this.startY = e.targetTouches[0].pageY
      this.startScroll = this.$el.scrollTop || 0
      this.touching = true
    },
    touchMove(e) {
      if (!this.enableRefresh || this.$el.scrollTop > 0 || !this.touching) {
        return
      }
      let diff = e.targetTouches[0].pageY - this.startY - this.startScroll
      // console.log(diff)
      // if (diff > 0) e.preventDefault()
      this.top = Math.pow(diff, 0.8) + (this.state === 2 ? this.offset : 0)

      if (this.state === 2) { // in refreshing
        return
      }
      if (this.top >= this.offset) {
        this.state = 1
      } else {
        this.state = 0
      }
    },
    touchEnd(e) {
      if (!this.enableRefresh) return
      this.touching = false
      if (this.state === 2) { // in refreshing
        this.state = 2
        this.top = this.offset
        return
      }
      if (this.top >= this.offset) { // do refresh
        this.refresh && this.refresh()
      } else { // cancel refresh
        this.state = 0
        this.top = 0
      }
    },
    refresh() {
      this.state = 2
      this.top = this.offset
      // 存在onRefresh的时候，才给下拉刷新
      if (this.onRefresh) {
        this.onRefresh(this.refreshDone)
      } else {
        this.refreshDone()
      }
    },
    refreshDone() {
      this.state = 0
      this.top = 0
    },
    infinite() {
      this.infiniteLoading = true
      this.onInfinite(this.infiniteDone)
    },
    infiniteDone() {
      this.infiniteLoading = false
    },
    onScroll(e) {
      // console.log([this.enableInfinite, this.infiniteLoading])
      if (!this.enableInfinite || this.infiniteLoading) {
        return
      }
      let scrollHeight = this.$el.scrollHeight
      let outerHeight = this.$el.clientHeight
      let scrollTop = this.$el.scrollTop
      let ptrHeight = this.onRefresh ? this.$el.querySelector('.pull-refresh').clientHeight : 0
      let bottom = scrollHeight - outerHeight - scrollTop - ptrHeight
      // console.log([scrollHeight, outerHeight, scrollTop, ptrHeight])
      // console.log([bottom, this.bottomDistance])
      if (bottom < this.bottomDistance) this.infinite()
    }
  }
}
</script>

<style lang="less" scoped>
.yo-scroll {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
.yo-scroll .inner {
  position: absolute;
  top: -1.5rem;
  width: 100%;
  height: 100%;
  transition-duration: 300ms;
}
.yo-scroll .pull-refresh {
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  color: #666;
}
.yo-scroll.touch .inner {
  transition-duration: 0ms;
}
.yo-scroll.down .down-tip {
  display: block;
}
.yo-scroll.up .up-tip {
  display: block;
}
.yo-scroll.refresh .refresh-tip {
  display: block;
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  -webkit-flex-direction: row;
}
.yo-scroll .down-tip,
.yo-scroll .refresh-tip,
.yo-scroll .up-tip {
  display: none;
}
.yo-scroll .load-more {
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  color: #666;
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  -webkit-flex-direction: row;
}
.loading{
  width: 52px;
  height: 52px;
  margin-right: 16px;
}
</style>
