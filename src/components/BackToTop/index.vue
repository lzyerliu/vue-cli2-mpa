<template>
  <transition name="back-to-top-fade">
    <div
      class="back-to-top-wrapper"
      :style="`bottom: ${this.bottom}; right: ${this.right};`"
      v-show="visible"
      @click="backToTop">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'BackToTop',
  props: {
    visibleoffset: {
      type: [String, Number],
      default: 600
    },
    visibleoffsetbottom: {
      type: [String, Number],
      default: 0
    },
    right: {
      type: String,
      default: '30px'
    },
    bottom: {
      type: String,
      default: '50px'
    },
    scrollFn: {
      type: Function,
      default: function (eventObject) {}
    }
  },
  data() {
    return {
      visible: false
    }
  },
  mounted() {
    window.smoothscroll = () => {
      let currentScroll = document.documentElement.scrollTop || document.body.scrollTop
      if (currentScroll > 0) {
        window.requestAnimationFrame(window.smoothscroll)
        window.scrollTo(0, Math.floor(currentScroll - (currentScroll / 5)))
      }
    }
    window.addEventListener('scroll', this.catchScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.catchScroll)
  },
  methods: {
    /**
     * Catch window scroll event
     * @return {void}
     */
    catchScroll () {
      const pastTopOffset = window.pageYOffset > parseInt(this.visibleoffset)
      const pastBottomOffset = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - parseInt(this.visibleoffsetbottom)
      this.visible = parseInt(this.visibleoffsetbottom) > 0 ? pastTopOffset && !pastBottomOffset : pastTopOffset
      this.scrollFn(this)
    },
    /**
     * The function who make the magics
     * @return {void}
     */
    backToTop () {
      window.smoothscroll()
      this.$emit('scrolled')
    }
  }
}
</script>

<style lang="less" scoped>
.back-to-top-fade-enter-active,
.back-to-top-fade-leave-active {
  transition: opacity .5s;
  // transition: all .5s;-webkit-transition: all .5s;
}
.back-to-top-fade-enter,
.back-to-top-fade-leave-to {
  opacity: 0;
  // transform: translate3d(100% + 100px, 0, 0);
}
.back-to-top-wrapper{
  position: fixed;
  z-index: 1000;
}
</style>
