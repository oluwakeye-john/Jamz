<template>
  <div class="sidebar-container">
    <div :class="{ 'sidebar-open': sidebar }" class="sidebar">
      <button class="close-button" @click="closeSidebar">
        <font-awesome-icon :icon="['fas', 'times']" />
      </button>
      <h1 class="text-3xl text-primary mb-20 font-bold">
        <font-awesome-icon class="logo" :icon="['fas', 'headphones']" />
        <span class="ml-2">Jamz</span>
      </h1>

      <div
        v-for="(item, index) in sidebarItems"
        :key="index"
        class="my-8 sidebar__item"
      >
        <nuxt-link to="#">
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
        { name: 'Music', path: '#', icon: 'music' },
        { name: 'Browse', path: '#', icon: 'search' },
        { name: 'Favorite', path: '#', icon: 'heart' },
      ],
    }
  },
  computed: {
    ...mapState({ sidebar: (state) => state.layout.sidebar }),
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

.logo {
  display: inline-block;
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
</style>
