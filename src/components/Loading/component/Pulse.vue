<template>
  <div class="sk-pulse-container">
    <div class="sk-spinner sk-spinner-pulse" :style="'background-color: ' + color + ';'"></div>
  </div>
</template>

<script>
export default {
  name: 'Pulse',
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
.sk-pulse-container{
  width: 110px;
  height: 110px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
}
.sk-spinner-pulse {
  width: 100%;
  height: 100%;
  border-radius: 100%;
  -webkit-animation: sk-pulseScaleOut 1s infinite ease-in-out;
          animation: sk-pulseScaleOut 1s infinite ease-in-out;
}

@-webkit-keyframes sk-pulseScaleOut {
  0% {
    -webkit-transform: scale(0);
            transform: scale(0);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 0;
  }
}

@keyframes sk-pulseScaleOut {
  0% {
    -webkit-transform: scale(0);
            transform: scale(0);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 0;
  }
}
</style>
