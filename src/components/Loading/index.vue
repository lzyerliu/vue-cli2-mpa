<template>
  <div class="loading-wrapper" v-if="showLoading" :style="'background-color: ' + bgColor + ';'">
    <div class="loading-container" :style="'background-color: ' + contentBgColor + ';'">
      <wave v-if="loadingType === 'wave'" :color="color" />
      <double-bounce v-if="loadingType === 'double-bounce'" :color="color" />
      <felding-circle v-if="loadingType === 'felding-circle'" :color="color" />
      <wander-cube v-if="loadingType === 'wander-cube'" :color="color" />
      <pulse v-if="loadingType === 'pulse'" :color="color" />
      <three-bounce v-if="loadingType === 'three-bounce'" :color="color" />
      <circle-line v-if="loadingType === 'circle-line'" :color="color" />
      <img-gif v-if="loadingType === 'img-gif'" :color="color" />
      <div class="loading-text" v-if="loadingText" :style="'color: ' + color + ';'">{{ loadingText }}</div>
    </div>
  </div>
</template>

<script>
  const Wave = () => import('./component/Wave.vue')
  const DoubleBounce = () => import('./component/DoubleBounce.vue')
  const FeldingCircle = () => import('./component/FeldingCircle.vue')
  const WanderCube = () => import('./component/WanderCube.vue')
  const Pulse = () => import('./component/Pulse.vue')
  const ThreeBounce = () => import('./component/ThreeBounce.vue')
  const CircleLine = () => import('./component/CircleLine.vue')
  const ImgGif = () => import('./component/ImgGif.vue')
  export default {
    name: 'Loading',
    components: {
      Wave,
      DoubleBounce,
      FeldingCircle,
      WanderCube,
      Pulse,
      ThreeBounce,
      CircleLine,
      ImgGif
    },
    props: {
      showLoading: {
        type: Boolean,
        default: () => {
          return false
        }
      },
      loadingType: {
        type: String,
        default: () => {
          return 'felding-circle'
        }
      },
      loadingText: {
        type: String,
        default: () => {
          return '加载中...'
        }
      },
      bgColor: {
        type: String,
        default: () => {
          return 'rgba(0, 0, 0, 0)'
        }
      },
      contentBgColor: {
        type: String,
        default: () => {
          return 'rgba(0, 0, 0, 0.6)'
        }
      },
      color: {
        type: String,
        default: () => {
          return '#ffffff'
        }
      }
    },
    data() {
      return {}
    }
  }
</script>

<style lang="less" scoped>
.loading-wrapper{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  z-index: 9999;
}
.loading-container{
  width: 300px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  border-radius: 30px;
  text-align: center;
  .loading-text{
    position: absolute;
    bottom: 12%;
    left: 50%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    display: inline-block;
    width: 100%;
    font-size: 36px;
    overflow: hidden;
    white-space: nowrap;
  }
}
</style>
