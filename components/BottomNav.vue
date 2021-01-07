<template>
  <div class="bottom-container border-border">
    <div>
      <button class="icon">
        <font-awesome-icon :icon="['fas', 'backward']" />
      </button>
      <button class="icon icon--play" @click="togglePlaying">
        <font-awesome-icon v-if="!isPlaying" :icon="['fas', 'play']" />
        <font-awesome-icon v-else :icon="['fas', 'pause']" />
      </button>
      <button class="icon">
        <font-awesome-icon :icon="['fas', 'forward']" />
      </button>
    </div>
    <div class="center-nav">
      <p>{{ currentTrack.name }}</p>
      <div class="progress-container">
        <span class="progress-label">{{ filteredCurrentTime }}</span>
        <vue-slider
          v-model="currentTrack.currentTime"
          class="progress"
          :min="0"
          :max="flooredDuration"
          tooltip="none"
          rail-style="background:#92929D"
          @change="handleSeek"
        ></vue-slider>
        <span class="progress-label">{{ filteredDuration }}</span>
      </div>
    </div>
    <div>
      <h1>Queue</h1>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { convertSecondsToTime } from '../utils/filterTime'

export default {
  data() {
    return {
      timer: null,
      cT: 20,
    }
  },
  computed: {
    ...mapState({
      isPlaying: (state) => state.isPlaying,
      currentTrack: (state) => state.currentTrack,
      currentTime: (state) => state.currentTrack.currentTime,
    }),
    filteredDuration() {
      return convertSecondsToTime(this.currentTrack.duration)
    },
    filteredCurrentTime() {
      return convertSecondsToTime(this.currentTime)
    },
    flooredDuration() {
      return Math.floor(this.currentTrack.duration)
    },
  },
  beforeDestroy() {
    this.disableTimeWatch()
  },
  mounted() {
    this.enableTimeWatch()
  },
  methods: {
    ...mapActions({
      togglePlaying: 'togglePlaying',
      handleSeekAction: 'seekAction',
      checkTime: 'checkTime',
    }),
    handleSeek(val) {
      this.handleSeekAction(val)
    },
    enableTimeWatch() {
      if (process.client) {
        this.timer = setInterval(() => {
          this.checkTime()
        }, 1000)
      }
    },
    disableTimeWatch() {
      if (process.client) {
        clearInterval(this.timer)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.bottom-container {
  z-index: 2;
  border-width: 1px;
  @apply bg-bgColor2;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 50px;

  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
}

.center-nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45%;
}

.progress-container {
  display: flex;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    display: none;
  }

  .progress {
    flex: 1;
  }

  .progress-label {
    font-size: 14px;
    width: 50px;
    display: inline-block;
    text-align: center;
    margin: 0 auto;
  }
}

.icon {
  margin: 0 1rem;
  opacity: 0.6;

  &:focus {
    outline: none;
  }

  &--play {
    opacity: 1;
    font-size: 24px;
  }
}
</style>
