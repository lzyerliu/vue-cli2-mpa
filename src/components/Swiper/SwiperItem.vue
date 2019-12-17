<template>
  <div class="m-swiper-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SwiperItem',
  mounted() {
    this.$nextTick(() => {
      this.$parent.init()
    })
  },
  beforeDestroy() {
    this.$nextTick(() => {
      this.$parent.destroy()
    })
  }
}
</script>

<style lang="less" scoped>
.m-swiper-item{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>
