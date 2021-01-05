<template>
  <div class="navbar">
    <font-awesome-icon :icon="['fas', 'bars']" @click="openSidebar" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions({ toggleSidebarAction: 'layout/toggleSidebarAction' }),

    openSidebar() {
      this.toggleSidebarAction(true)
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar {
  @apply bg-bgColor2;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 1.5rem;
  font-size: 20px;
  display: none;

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    display: block;
  }
}
</style>
