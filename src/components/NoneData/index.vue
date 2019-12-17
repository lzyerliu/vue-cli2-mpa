<template>
  <div class="none-wrapper">
    <img class="none-img" :src="noneImg" alt="">
    <div class="none-text">暂无数据</div>
  </div>
</template>

<script>
import NoneImg from '@/assets/images/none.png'
export default {
  name: 'NoneData',
  data() {
    return {
      noneImg: NoneImg
    }
  }
}
</script>

<style lang="less" scoped>
.none-wrapper{
  text-align: center;
  .none-img{
    width: 450px;
    height: 450px;
    margin: 0 auto;
    display: block
  }
  .none-text{
    margin-top: 45px;
    font-size: 42px;
    font-family:PingFangSC;
    font-weight: 600;
    color: #363636;
  }
}
</style>
