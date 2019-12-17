<template>
  <div class="sk-three-bounce">
    <div class="sk-child sk-bounce1" :style="'background-color: ' + color + ';'"></div>
    <div class="sk-child sk-bounce2" :style="'background-color: ' + color + ';'"></div>
    <div class="sk-child sk-bounce3" :style="'background-color: ' + color + ';'"></div>
  </div>
</template>

<script>
export default {
  name: 'ThreeBounce',
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
.sk-three-bounce {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  width: 150px;
  text-align: center;
}
.sk-three-bounce .sk-child {
  width: 30px;
  height: 30px;
  border-radius: 100%;
  display: inline-block;
  -webkit-animation: sk-three-bounce 1.4s ease-in-out 0s infinite both;
          animation: sk-three-bounce 1.4s ease-in-out 0s infinite both;
}
.sk-three-bounce .sk-bounce1 {
  -webkit-animation-delay: -0.32s;
          animation-delay: -0.32s;
}
.sk-three-bounce .sk-bounce2 {
  -webkit-animation-delay: -0.16s;
          animation-delay: -0.16s;
}

@-webkit-keyframes sk-three-bounce {
  0%, 80%, 100% {
    -webkit-transform: scale(0);
            transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}

@keyframes sk-three-bounce {
  0%, 80%, 100% {
    -webkit-transform: scale(0);
            transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
</style>
