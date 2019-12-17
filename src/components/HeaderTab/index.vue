<template>
  <div class="header--tab-wrapper">
    <div class="fixed-none" v-if="position"></div>
    <div class="container f-row f-justify-between f-align-center" :class="{'fixed' : position, 'border-1px' : borderOnePX}" :style="'background:' + bgColor">
      <div class="back f-row f-justify-center f-align-center" @click="goback"><img :src="backImg" alt="返回"></div>
      <div class="content f-cover">
        <slot name="header-content"></slot>
      </div>
      <div class="more"></div>
    </div>
  </div>
</template>

<script>
import BackImg from '@/assets/images/back.png'
export default {
  name: 'HeaderTab',
  props: {
    position: {
      type: Boolean,
      default: false
    },
    bgColor: {
      type: String,
      default: '#fff'
    },
    borderOnePX: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      backImg: BackImg
    }
  },
  methods: {
    goback() {
      this.$emit('go-back', {})
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../style/variables.less';
.header--tab-wrapper{
  .fixed{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
  }
  .fixed-none{
    width: 100%;
    height: @headerHeight;
  }
  .container{
    width: 100%;
    height: @headerHeight;
    .back{
      padding: 32px 50px;
      img{
        width: 60px;
        height: 60px;
      }
    }
    .content{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .more{
      width: 60px;
      padding: 32px 50px;
    }
  }
}
</style>
