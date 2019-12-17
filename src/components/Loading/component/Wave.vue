<template>
  <div class="sk-wave">
    <div class="sk-rect sk-rect1" :style="'background-color: ' + color + ';'"></div>
    <div class="sk-rect sk-rect2" :style="'background-color: ' + color + ';'"></div>
    <div class="sk-rect sk-rect3" :style="'background-color: ' + color + ';'"></div>
    <div class="sk-rect sk-rect4" :style="'background-color: ' + color + ';'"></div>
    <div class="sk-rect sk-rect5" :style="'background-color: ' + color + ';'"></div>
  </div>
</template>

<script>
export default {
  name: 'Wave',
  props: {
    color: {
      type: String,
      default: () => {
        return '#ffffff'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.sk-wave {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  width: 100%;
  height: 80px;
  text-align: center;
  font-size: 10px;
}
.sk-wave .sk-rect {
  height: 100%;
  width: 10px;
  display: inline-block;
  -webkit-animation: sk-waveStretchDelay 1.2s infinite ease-in-out;
          animation: sk-waveStretchDelay 1.2s infinite ease-in-out;
}
.sk-wave .sk-rect1 {
  -webkit-animation-delay: -1.2s;
          animation-delay: -1.2s;
}
.sk-wave .sk-rect2 {
  -webkit-animation-delay: -1.1s;
          animation-delay: -1.1s;
}
.sk-wave .sk-rect3 {
  -webkit-animation-delay: -1s;
          animation-delay: -1s;
}
.sk-wave .sk-rect4 {
  -webkit-animation-delay: -0.9s;
          animation-delay: -0.9s;
}
.sk-wave .sk-rect5 {
  -webkit-animation-delay: -0.8s;
          animation-delay: -0.8s;
}

@-webkit-keyframes sk-waveStretchDelay {
  0%, 40%, 100% {
    -webkit-transform: scaleY(0.4);
            transform: scaleY(0.4);
  }
  20% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
  }
}

@keyframes sk-waveStretchDelay {
  0%, 40%, 100% {
    -webkit-transform: scaleY(0.4);
            transform: scaleY(0.4);
  }
  20% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
  }
}
</style>
