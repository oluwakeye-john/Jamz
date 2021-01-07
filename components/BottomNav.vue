<template>
  <div class="bottom-container border-border">
    <div class="controls">
      <button disabled class="icon">
        <font-awesome-icon :icon="['fas', 'backward']" />
      </button>
      <button
        :disabled="!src || isLoadingTrack"
        class="icon icon--play"
        @click="togglePlaying"
      >
        <font-awesome-icon
          v-if="isLoadingTrack"
          class="rotateClass"
          :icon="['fas', 'redo']"
        />
        <font-awesome-icon v-else-if="!isPlaying" :icon="['fas', 'play']" />
        <font-awesome-icon v-else :icon="['fas', 'pause']" />
      </button>
      <button disabled class="icon">
        <font-awesome-icon :icon="['fas', 'forward']" />
      </button>
    </div>
    <div class="center-nav">
      <div class="track-info">
        <p class="track-info__name">{{ currentTrack.name }} ·</p>
      </div>
      <div class="progress-container">
        <span class="progress-label">{{ filteredCurrentTime }}</span>
        <vue-slider
          v-model="currentTrack.currentTime"
          class="progress"
          :min="0"
          :max="flooredDuration"
          :disabled="!src"
          tooltip="none"
          rail-style="background:#92929D"
          @change="handleSeek"
        ></vue-slider>
        <span class="progress-label">{{ filteredDuration }}</span>
      </div>
    </div>
    <div class="right-nav">
      <div class="icon active" @click="toggleFavorite">
        <font-awesome-icon :icon="['fas', 'heart']" />
      </div>
      <div class="icon">
        <font-awesome-icon :icon="['fas', 'plus']" />
      </div>
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
      isPlaying: (state) => state.player.isPlaying,
      isLoadingTrack: (state) => state.player.isLoadingTrack,
      currentTrack: (state) => state.player.currentTrack,
      currentTime: (state) => state.player.currentTrack.currentTime,
      item: (state) => state.player.item,
      src: (state) => state.player.currentTrack.src,
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
    // this.disableTimeWatch()
  },
  mounted() {
    // this.enableTimeWatch()
  },
  methods: {
    ...mapActions({
      togglePlaying: 'player/togglePlaying',
      handleSeekAction: 'player/seekAction',
      checkTime: 'player/checkTime',
      toggleFavoriteAction: 'music/toggleFavorite',
    }),
    toggleFavorite() {
      this.toggleFavoriteAction(this.item)
    },
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
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    padding: 1.5rem 1.5rem;
  }
}

.controls {
  text-align: center;

  button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    transition: 0.3s;
    margin: 0 0.5rem;

    &:not([disabled]):hover {
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.3);
    }
  }
}

.center-nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45%;

  @media (max-width: 768px) {
    width: 100%;
    display: none;
  }

  .track-info {
    padding: 0 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &__name {
      justify-content: center;
    }
  }
}

.right-nav {
  display: flex;
  @media (max-width: 768px) {
    width: 100%;
    display: none;
  }

  .icon {
    cursor: pointer;
  }
  .active {
    @apply text-primary;
  }
}

.progress-container {
  display: flex;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    /* display: none; */
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
  opacity: 1;

  &:focus {
    outline: none;
  }

  &:disabled {
    opacity: 0.6;
    cursor: default;
  }

  &--play {
    font-size: 24px;
  }
}
</style>
