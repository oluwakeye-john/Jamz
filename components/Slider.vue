<template>
  <div class="progress-container" :class="{ expanded: expanded }">
    <span class="progress-label progress-label__desktop">{{
      filteredCurrentTime
    }}</span>

    <div class="progress-label__mobile">
      <span class="progress-label">{{ filteredCurrentTime }}</span>
      <span class="progress-label">{{ filteredDuration }}</span>
    </div>

    <vue-slider
      v-model="currentTrack.currentTime"
      class="progress custom-slider"
      :min="0"
      :max="flooredDuration"
      :disabled="!src"
      tooltip="none"
      rail-style="background:#92929D"
      @change="handleSeek"
    ></vue-slider>
    <span class="progress-label progress-label__desktop">{{
      filteredDuration
    }}</span>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { convertSecondsToTime } from '~/utils/filterTime'
export default {
  props: {
    expanded: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapState({
      currentTrack: (state) => state.player.currentTrack,
      src: (state) => state.player.currentTrack.src,
      currentTime: (state) => state.player.currentTrack.currentTime,
    }),
    filteredDuration() {
      return convertSecondsToTime(this.currentTrack.duration)
    },
    flooredDuration() {
      return Math.floor(this.currentTrack.duration)
    },
    filteredCurrentTime() {
      return convertSecondsToTime(this.currentTime)
    },
  },
  methods: {
    ...mapActions({
      handleSeekAction: 'player/seekAction',
    }),
    handleSeek(val) {
      this.handleSeekAction(val)
    },
  },
}
</script>

<style lang="scss" scoped>
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

    &__desktop {
      display: inline-block;

      @media (max-width: 768px) {
        display: none;
      }
    }

    @media (max-width: 768px) {
      width: unset;
      margin: unset;
    }

    &__mobile {
      display: none;

      @media (max-width: 768px) {
        display: flex;
        justify-content: space-between;
      }
    }
  }
}

.expanded {
  @media (max-width: 768px) {
    display: block;
  }
}
</style>
