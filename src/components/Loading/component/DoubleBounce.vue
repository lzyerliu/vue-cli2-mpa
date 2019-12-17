<template>
  <div class="sk-double-bounce">
    <div class="sk-child sk-double-bounce1" :style="'background-color: ' + color + ';'"></div>
    <div class="sk-child sk-double-bounce2" :style="'background-color: ' + color + ';'"></div>
  </div>
</template>

<script>
export default {
  name: 'DoubleBounce',
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
.sk-double-bounce {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
}
.sk-double-bounce .sk-child {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-animation: sk-doubleBounce 2s infinite ease-in-out;
          animation: sk-doubleBounce 2s infinite ease-in-out;
}
.sk-double-bounce .sk-double-bounce2 {
  -webkit-animation-delay: -1.0s;
          animation-delay: -1.0s;
}

@-webkit-keyframes sk-doubleBounce {
  0%, 100% {
    -webkit-transform: scale(0);
            transform: scale(0); }
  50% {
    -webkit-transform: scale(1);
            transform: scale(1); } }

@keyframes sk-doubleBounce {
  0%, 100% {
    -webkit-transform: scale(0);
            transform: scale(0); }
  50% {
    -webkit-transform: scale(1);
            transform: scale(1); } }
</style>
