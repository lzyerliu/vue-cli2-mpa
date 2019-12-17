<template>
  <div class="sk-wandering-cubes">
    <div class="sk-cube sk-cube1" :style="'background-color: ' + color + ';'"></div>
    <div class="sk-cube sk-cube2" :style="'background-color: ' + color + ';'"></div>
  </div>
</template>

<script>
export default {
  name: 'WanderCube',
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
.sk-wandering-cubes {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  width: 150px;
  height: 150px;
}
.sk-wandering-cubes .sk-cube {
  width: 28px;
  height: 28px;
  position: absolute;
  top: 25%;
  left: 25%;
  border-radius: 100%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-animation: sk-wanderingCube 1.8s ease-in-out -1.8s infinite both;
          animation: sk-wanderingCube 1.8s ease-in-out -1.8s infinite both;
}
.sk-wandering-cubes .sk-cube2 {
  -webkit-animation-delay: -0.9s;
          animation-delay: -0.9s;
}

@-webkit-keyframes sk-wanderingCube {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  25% {
    -webkit-transform: translateX(30px) rotate(-90deg) scale(0.5);
            transform: translateX(30px) rotate(-90deg) scale(0.5);
  }
  50% {
    /* Hack to make FF rotate in the right direction */
    -webkit-transform: translateX(30px) translateY(30px) rotate(-179deg);
            transform: translateX(30px) translateY(30px) rotate(-179deg);
  }
  50.1% {
    -webkit-transform: translateX(30px) translateY(30px) rotate(-180deg);
            transform: translateX(30px) translateY(30px) rotate(-180deg);
  }
  75% {
    -webkit-transform: translateX(0) translateY(30px) rotate(-270deg) scale(0.5);
            transform: translateX(0) translateY(30px) rotate(-270deg) scale(0.5);
  }
  100% {
    -webkit-transform: rotate(-360deg);
            transform: rotate(-360deg);
  }
}

@keyframes sk-wanderingCube {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  25% {
    -webkit-transform: translateX(30px) rotate(-90deg) scale(0.5);
            transform: translateX(30px) rotate(-90deg) scale(0.5);
  }
  50% {
    /* Hack to make FF rotate in the right direction */
    -webkit-transform: translateX(30px) translateY(30px) rotate(-179deg);
            transform: translateX(30px) translateY(30px) rotate(-179deg);
  }
  50.1% {
    -webkit-transform: translateX(30px) translateY(30px) rotate(-180deg);
            transform: translateX(30px) translateY(30px) rotate(-180deg);
  }
  75% {
    -webkit-transform: translateX(0) translateY(30px) rotate(-270deg) scale(0.5);
            transform: translateX(0) translateY(30px) rotate(-270deg) scale(0.5);
  }
  100% {
    -webkit-transform: rotate(-360deg);
            transform: rotate(-360deg);
  }
}
</style>
