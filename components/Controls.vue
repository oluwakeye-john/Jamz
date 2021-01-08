<template>
  <div class="controls desktop">
    <button disabled class="icon" :class="{ show: expanded }">
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
    <button disabled class="icon" :class="{ show: expanded }">
      <font-awesome-icon :icon="['fas', 'forward']" />
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
