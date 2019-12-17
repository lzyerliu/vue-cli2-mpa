<template>
  <div class="toast-wrapper" v-if="showToast" :class="clsObj">
    <div class="toast-container"
      :class="[position, fadeClass]"
      :style="'background-color: ' + bgColor + ';color: ' + color + ';'">
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  props: {
    showToast: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    bgColor: {
      type: String,
      default: () => {
        return 'rgba(0, 0, 0, 0.7)'
      }
    },
    color: {
      type: String,
      default: () => {
        return '#ffffff'
      }
    },
    message: {
      type: String,
      default: () => {
        return ''
      }
    },
    position: {
      type: String,
      default: () => {
        return 'bottom'
      }
    },
    duration: {
      type: Number,
      default: () => {
        return 3000
      }
    }
  },
  data() {
    return {
      fadeClass: ''
    }
  },
  computed: {
    // 返回empty 只是做计算fadeClass用
    clsObj() {
      if (this.showToast) {
        if (this.position === 'bottom') {
          this.fadeClass = 'toast-fadein-bottom'
        } else if (this.position === 'middle') {
          this.fadeClass = 'toast-fadein-middle'
        } else if (this.position === 'top') {
          this.fadeClass = 'toast-fadein-top'
        } else {
          this.fadeClass = 'toast-fadein'
        }
      } else {
        this.fadeClass = 'toast-fadeout'
      }
      return ''
    }
  }
}
</script>
<style lang="less" scoped>
.toast-wrapper{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  z-index: 9999;
  .toast-container{
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    max-width: 80%;
    padding: 24px 36px 25px;
    display: inline-block;
    text-align: center;
    border-radius: 20px;
    font-size: 42px;
    letter-spacing: 2px;
  }
  .toast-container.top{
    top: 15%;
  }
  .toast-container.middle{
    bottom: 50%;
  }
  .toast-container.bottom{
    bottom: 15%;
  }
}
.toast-fadein{
  animation: animation_in .5s;
}
.toast-fadein-bottom{
  animation: animation_in_bottom .3s;
}
.toast-fadein-middle{
  animation: animation_in_middle .4s;
}
.toast-fadein-top{
  animation: animation_in_top .3s;
}
.toast-fadeout{
  animation: animation_out .5s;
  opacity: 0;
}

@keyframes animation_in {
  0% {
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
@-webkit-keyframes animation_in {
  0% {
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}

@keyframes animation_in_bottom {
  0% {
    opacity: 0;
    bottom: 0;
  }
  100%{
    opacity: 1;
    bottom: 15%;
  }
}
@-webkit-keyframes animation_in_bottom {
  0% {
    opacity: 0;
    bottom: 0;
  }
  100%{
    opacity: 1;
    bottom: 15%;
  }
}

@keyframes animation_in_middle {
  0% {
    opacity: 0;
    bottom: 0;
  }
  100%{
    opacity: 1;
    bottom: 50%;
  }
}
@-webkit-keyframes animation_in_middle {
  0% {
    opacity: 0;
    bottom: 0;
  }
  100%{
    opacity: 1;
    bottom: 50%;
  }
}

@keyframes animation_in_top {
  0% {
    opacity: 0;
    top: 0;
  }
  100%{
    opacity: 1;
    top: 15%;
  }
}
@-webkit-keyframes animation_in_top {
  0% {
    opacity: 0;
    top: 0;
  }
  100%{
    opacity: 1;
    top: 15%;
  }
}

@keyframes animate_out {
  0% {
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
}
@-webkit-keyframes animate_out {
  0% {
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
}
</style>
