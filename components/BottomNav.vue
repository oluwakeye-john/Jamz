<template>
  <div
    :class="{
      'expand-bottom-nav': isMobileOpen,
      'disable-nav': !isReadyToPlay,
    }"
    class="bottom-container border-border"
  >
    <controls />
    <div class="center-nav desktop">
      <div class="track-info" @click="toggleMobileOpen">
        <p class="track-info__name">{{ currentTrack.name }}</p>
      </div>
      <slider />
    </div>

    <div class="right-nav desktop">
      <div class="right-nav__desktop">
        <button :disabled="!src" class="icon" @click="toggleFavorite">
          <font-awesome-icon :icon="['fas', 'heart']" />
        </button>
        <button :disabled="!src" class="icon">
          <font-awesome-icon :icon="['fas', 'plus']" />
        </button>
      </div>
      <div class="right-nav__mobile">
        <button :disabled="!src" class="icon" @click="toggleMobileOpen">
          <font-awesome-icon :icon="['fas', 'chevron-up']" />
        </button>
      </div>
    </div>
    <mobile-play v-show="isMobileOpen" :data="item" @close="closeMobilePlay" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      isMobileOpen: false,
    }
  },
  computed: {
    ...mapState({
      isPlaying: (state) => state.player.isPlaying,
      currentTrack: (state) => state.player.currentTrack,
      item: (state) => state.player.item,
      src: (state) => state.player.currentTrack.src,
    }),
    isReadyToPlay() {
      return this.src && this.src.length
    },
  },
  watch: {
    isMobileOpen(newVal) {
      if (newVal) {
        window.document.documentElement.style.overflowY = 'hidden'
      } else {
        window.document.documentElement.style.overflowY = 'auto'
      }
    },
  },

  methods: {
    ...mapActions({
      toggleFavoriteAction: 'music/toggleFavorite',
    }),
    toggleFavorite() {
      this.toggleFavoriteAction(this.item)
    },
    toggleMobileOpen() {
      this.isMobileOpen = !this.isMobileOpen
    },
    closeMobilePlay() {
      this.isMobileOpen = false
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
  transition: 0.3s;

  max-height: 20vh;
  @media (max-width: 768px) {
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
}

.center-nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45%;

  @media (max-width: 768px) {
    flex-direction: column;
    width: unset;
    align-items: flex-start;
  }

  .track-info {
    padding: 0 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      width: unset;
      padding: 0;
      justify-content: flex-start;
    }

    &__name {
      justify-content: center;
    }
  }
}

.right-nav {
  display: flex;
  &__mobile {
    display: none;
  }
  @media (max-width: 768px) {
    display: block;
    text-align: left;

    &__desktop {
      display: none;
    }
    &__mobile {
      text-align: right;
      display: block;
    }
  }

  .icon {
    cursor: pointer;
  }
  .active {
    @apply text-primary;
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

.disable-nav {
  @media (max-width: 768px) {
    display: none;
  }
}

.expand-bottom-nav {
  @media (max-width: 768px) {
    height: 100vh;
    max-height: 100vh;
  }

  & > .desktop {
    @media (max-width: 768px) {
      display: none;
    }
  }
}
</style>
