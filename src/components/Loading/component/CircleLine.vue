<template>
  <div class="sk-circle-line">
    <div class="sk-line-border" :style="'border: 2px solid ' + color + ';border-top: none;border-left: none;'"></div>
  </div>
</template>

<script>
export default {
  name: 'CircleLine',
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
.sk-circle-line{
  position: absolute;
  top: 46%;
  left: 48%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  .sk-line-border{
    width: 100%;
    height: 100%;
    border-radius: 0 100% 100% 100%;
    background-color: rgba(0, 0, 0, 0);
    -webkit-animation: sk-circleLineDelay 1.2s infinite linear;
            animation: sk-circleLineDelay 1.2s infinite linear;
  }
}

@keyframes sk-circleLineDelay{
  0%{
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100%{
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@-webkit-keyframes sk-circleLineDelay{
  0%{
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100%{
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
</style>
