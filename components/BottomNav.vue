<template>
  <div class="bottom-container border-border">
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
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState({ isPlaying: (state) => state.isPlaying }),
  },
  methods: {
    ...mapActions({ togglePlaying: 'togglePlaying' }),
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
  justify-content: flex-start;

  @media (max-width: 768px) {
    justify-content: center;
  }
}

.icon {
  margin: 0 1rem;
  opacity: 0.6;

  &:focus {
    outline: none;
  }

  &--play {
    font-size: 24px;
  }
}
</style>
