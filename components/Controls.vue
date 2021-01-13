<template>
  <div class="controls desktop">
    <button disabled class="icon" :class="{ show: expanded }">
      <font-awesome-icon :icon="['fas', 'random']" />
    </button>
    <button disabled class="icon" :class="{ show: expanded }">
      <font-awesome-icon :icon="['fas', 'step-backward']" />
    </button>
    <button
      :disabled="!src || isLoadingTrack"
      class="icon icon--play"
      @click="togglePlaying"
    >
      <font-awesome-icon
        v-if="isLoadingTrack"
        class="rotateClass"
        :icon="['fas', 'circle-notch']"
      />
      <font-awesome-icon v-else-if="!isPlaying" :icon="['fas', 'play']" />
      <font-awesome-icon v-else :icon="['fas', 'pause']" />
    </button>
    <button disabled class="icon" :class="{ show: expanded }">
      <font-awesome-icon :icon="['fas', 'step-forward']" />
    </button>
    <button disabled class="icon" :class="{ show: expanded }">
      <font-awesome-icon :icon="['fas', 'heart']" />
    </button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  props: {
    expanded: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapState({
      isPlaying: (state) => state.player.isPlaying,
      isLoadingTrack: (state) => state.player.isLoadingTrack,
      src: (state) => state.player.currentTrack.src,
    }),
  },
  methods: {
    ...mapActions({
      togglePlaying: 'player/togglePlaying',
    }),
  },
}
</script>

<style lang="scss" scoped>
.controls {
  text-align: center;

  @media (max-width: 768px) {
    display: inline-flex;
  }

  button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    transition: 0.3s;
    margin: 0 0.5rem;

    /* &:not([disabled]):hover {
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.3);
    } */

    &:disabled {
      opacity: 0.6;
      cursor: default;
    }

    &:focus {
      outline: 0;
    }

    @media (max-width: 768px) {
      display: none;

      &.show {
        display: block;
      }
    }
  }

  .icon--play {
    font-size: 24px;
    @media (max-width: 768px) {
      display: block;
    }
  }
}
</style>
