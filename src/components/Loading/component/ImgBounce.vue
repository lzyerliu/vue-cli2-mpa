<template>
  <div class="img-bounce-w">
    <img src="../../../assets/images/pig.gif" />
    <div class="shadow" :style="'background: ' + color + ';' + 'box-shadow: 0 0 5px ' + color + ';'"></div>
  </div>
</template>

<script>
export default {
  name: 'ImgBounce',
  props: {
    color: {
      type: String,
      default: () => {
        return '#8f8f8f'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.img-bounce-w{
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  img{
    width: 150px;
    height: 150px;
    margin-top: 0;
    display: inline-block;
    animation: imgAnimation 1.2s infinite cubic-bezier(.21,1.29,.54,.96);
  }
  .shadow{
    width: 80px;
    height: 10px;
    position: absolute;
    left: 50%;
    bottom: 60px;
    transform: translateX(-50%);
    border-radius: 50%;
    // background: #ffb0a4;
    // box-shadow: 0 0 6px #ffb0a4;
    animation: shadowAnimation 1.2s infinite cubic-bezier(.21,1.29,.54,.96);
  }
}
@keyframes imgAnimation {
  0% {
    transform: translate(0px, 0px);
    height: 150px;
    margin-top: 0;
  }
  50% {
    transform: translate(0px, 80px);
    height: 110px;
    margin-top: 30px;
  }
  100% {
    transform: translate(0px, 0px);
    height: 150px;
    margin-top: 0;
  }
}
@keyframes shadowAnimation {
  0% {
    -webkit-transform: scaleX(1) translateX(-50%);
    transform: scaleX(1) translateX(-50%);
  }
  50% {
    -webkit-transform: scaleX(1.26) translateX(-40%);
    transform: scaleX(1.26) translateX(-40%);
  }
  100% {
    -webkit-transform: scaleX(1) translateX(-50%);
    transform: scaleX(1) translateX(-50%);
  }
}
</style>
