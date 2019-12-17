<template>
  <div class="wrapper" v-if="false">
    <h3 class="title">标题标题标题</h3>
    <div class="text">文本文本文本文本文本文本</div>
    <div class="marquee-wrapper">
      <div class="notice"><i class="iconfont mb-notice1"></i></div>
      <marquee-text :speed="speed" class="marquee-container" @click="marquee">
        测试 测试测试测试, 测试测试测试, 测试
      </marquee-text>
    </div>
    <br>
    <div class="container">
      <input type="text" v-model="message">
      <button type="button" @click="doCopy">Copy!</button>
    </div>
    <br>
    <m-swiper @change="swiperChange" height="220px" autoplay="5000">
      <m-swiper-item v-for="(img, index) in images" :key="index">
        <img :src="img.src" alt="" class="swiper-img">
      </m-swiper-item>
    </m-swiper>
    <back-to-top
      :visibleoffset="500"
      :right="'30px'"
      :bottom="'50px'"
      @scrolled="scrolled">
      <div class="to-top">
        <i class="to-top-icon iconfont mb-top2"></i>
      </div>
    </back-to-top>
    <div class="loading">
      <img src="../../assets/images/pig.gif" />
      <div class="shadow"></div>
    </div>
  </div>
</template>

<script>
import { mSwiper, mSwiperItem } from '@/components/Swiper'
const MarqueeText = () => import('@/components/Marquee/MarqueeText.vue')
const BackToTop = () => import('@/components/BackToTop/index.vue')
export default {
  components: {
    MarqueeText,
    BackToTop,
    mSwiper,
    mSwiperItem
  },
  props: {},
  data() {
    return {
      speed: 25,
      message: 'copy',
      images: [
        { src: 'http://chzflive.caihome.cn/web/o_1c7390v9q1al1rak17g2v3uhc438?x-oss-process=image/resize,m_fill,h_240,w_320' },
        { src: 'http://chzflive.caihome.cn/web/o_1c7390v9q1al1rak17g2v3uhc438?x-oss-process=image/resize,m_fill,h_240,w_320' },
        { src: 'http://chzflive.caihome.cn/web/o_1c7390v9q1al1rak17g2v3uhc438?x-oss-process=image/resize,m_fill,h_240,w_320' }
      ]
    }
  },
  computed: {},
  created() {
    // this.$_loading.show({
    //   loadingType: 'three-bounce',
    //   loadingText: '玩命加载中...',
    //   bgColor: 'rgba(0, 0, 0, 0.1)',
    //   contentBgColor: 'rgba(0, 0, 0, 0.6)',
    //   color: '#fff'
    // })
    // this.$_loading.hide()
  },
  mounted() {
    this.$_toast.show({
      bgColor: 'rgba(0, 0, 0, .7)',
      color: '#fff',
      message: 'I want to toast！',
      position: 'bottom',
      duration: 2000
    })
    // test 与原生交互对象
    window.$obj = {
      handleTestAPP: (s) => {
        this.testAPP(s)
      }
    }
  },
  methods: {
    marquee() {
      console.log('marquee')
    },
    testAPP(s) {
      console.log('testApp' + s)
    },
    doCopy() {
      this.$copyText(this.message).then((e) => {
        this.$_toast.show({
          bgColor: 'rgba(0, 0, 0, .7)',
          color: '#fff',
          message: 'Copied！',
          position: 'bottom',
          duration: 2000
        })
        console.log(e)
      }, (e) => {
        this.$_toast.show({
          bgColor: 'rgba(0, 0, 0, .7)',
          color: '#fff',
          message: 'Can not copy！',
          position: 'bottom',
          duration: 2000
        })
        console.log(e)
      })
    },
    swiperChange(index) {
      // console.log(index)
    },
    scrolled() {
      console.log('456')
    }
  }
}
</script>

<style lang="less" scoped>
.wrapper{
  min-height: 6000px;
  .to-top{
    width: 80px;
    height: 80px;
    line-height: 80px;
    border-radius: 100%;
    background: rgba(0, 0, 0, .5);
    text-align: center;
    .to-top-icon{
      font-size: 42px;
      color: #fff;
    }
  }
  .title{
    font-size:42px;
    font-family:PingFangSC-Medium;
    font-weight:600;
    color:#333;
    line-height:42px;
  }
  .text{
    font-size:36px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:#666  ;
    line-height:54px;
  }
  .loading{
    position: relative;
    width: 300px;
    height: 300px;
    margin: 100px auto;
    // background: rgba(243, 243, 245, 1);
    border-radius: 30px;
    text-align: center;
    img{
      width: 150px;
      height: 150px;
      margin-top: 0;
      display: inline-block;
      animation: imgLoading 1.3s infinite cubic-bezier(.21,1.29,.54,.96);
    }
    .shadow{
      width: 80px;
      height: 10px;
      position: absolute;
      left: 50%;
      bottom: 60px;
      transform: translateX(-50%);
      border-radius: 50%;
      background: #ffa396;
      box-shadow: 0 0 6px #ffa396;
      animation: shadowLoading 1.3s infinite cubic-bezier(.21,1.29,.54,.96);
    }
  }
}
.marquee-wrapper{
  position: relative;
  padding: 0 24px 0 68px;
  background: #ffebb1;
  .notice{
    position: absolute;
    top: 0;
    left: 0;
    padding: 22px 24px 16px;
    background: #ffebb1;
    color: #ff864a;
    z-index: 10;
    i{
      font-size: 48px;
    }
  }
}
.marquee-container{
  padding: 26px 0 30px;
  background: #ffebb1;
  color: #ff864a;
  font-size: 42px;
  letter-spacing: 4px
}
.swiper-img{
  width: 100%;
  height: 100%;
}
@keyframes imgLoading {
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
@keyframes shadowLoading {
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
