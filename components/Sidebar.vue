<template>
  <div class="sidebar-container">
    <div :class="{ 'sidebar-open': sidebar }" class="sidebar border-border">
      <button class="close-button" @click="closeSidebar">
        <font-awesome-icon :icon="['fas', 'times']" />
      </button>
      <h1 class="text-3xl text-primary mb-20 font-bold">
        <nuxt-link to="/">
          <font-awesome-icon
            class="logo"
            :class="{ dance: isPlaying }"
            :icon="['fas', 'headphones']"
          />
          <span class="ml-2">Jamz</span>
        </nuxt-link>
      </h1>

      <div
        v-for="(item, index) in sidebarItems"
        :key="index"
        class="my-8 sidebar__item"
      >
        <nuxt-link exact :to="item.path" active-class="text-primary">
          <font-awesome-icon :icon="['fas', item.icon]" />
          <span class="ml-2">
            {{ item.name }}
          </span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
      sidebarItems: [
        { name: 'Music', path: '/', icon: 'music' },
        { name: 'Browse', path: '/browse', icon: 'search' },
        { name: 'Favorites', path: '/favorite', icon: 'heart' },
      ],
    }
  },
  computed: {
    ...mapState({
      sidebar: (state) => state.layout.sidebar,
      isPlaying: (state) => state.player.isPlaying,
    }),
  },
  methods: {
    ...mapActions({ toggleSidebarAction: 'layout/toggleSidebarAction' }),

    closeSidebar() {
      this.toggleSidebarAction(false)
    },
  },
}
</script>

<style lang="scss" scoped>
.sidebar-container {
  width: 250px;
  @media (max-width: 768px) {
    width: 0;
  }
}

.sidebar {
  width: 250px;
  border-width: 1px;
  min-height: 100vh;
  @apply bg-bgColor3;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  padding: 1.5rem;

  @media (max-width: 768px) {
    transition: 0.3s;
    transform: translateX(-250px);
    z-index: 3;
  }

  &__item {
    transition: 0.3s;
    font-weight: bolder;
    font-size: 16px;
    &:hover {
      opacity: 0.7;
    }
  }
}

.close-button {
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem;
  font-size: 20px;
  display: none;

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    display: block;
  }
}

.sidebar-open {
  transform: translateX(0);
}
</style>
