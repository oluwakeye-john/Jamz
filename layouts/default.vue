<template>
  <Nuxt />
</template>

<script>
import { mapActions } from 'vuex'
export default {
  mounted() {
    this.initPlayer()
    this.getInitial()
  },
  methods: {
    ...mapActions({
      getInitial: 'music/getInitial',
      initPlayer: 'player/initPlayer',
    }),
  },
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  @apply bg-bgColor1;
  color: #fff;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.rotateClass {
  animation: rotate 1s ease-in-out infinite;
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}
.dance {
  animation: shake 2.5s ease-in-out infinite alternate;
}

@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}
.active {
  @apply text-primary;
  transition: color 0.3s;
  transition-delay: 0.5s;
}
</style>
