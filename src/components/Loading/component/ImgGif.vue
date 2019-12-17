<template>
  <div class="img-gif-w">
    <img src="../../../assets/images/pig.gif" alt="">
  </div>
</template>

<script>
export default {
  name: 'ImgGif',
  props: {}
}
</script>

<style lang="less" scoped>
.img-gif-w{
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 150px;
    height: 150px;
    display: inline-block;
  }
}
</style>
