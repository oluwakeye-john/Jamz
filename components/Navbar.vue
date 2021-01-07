<template>
  <div class="navbar border-border text-lightText">
    <div class="toggler" @click="openSidebar">
      <font-awesome-icon
        class="text-primary"
        :class="{ dance: isPlaying }"
        :icon="['fas', 'headphones']"
      />
    </div>

    <div class="input-container">
      <font-awesome-icon class="icon" :icon="['fas', 'search']" />
      <input placeholder="Search..." />
    </div>
    <div class="avatar">
      <font-awesome-icon class="icon" :icon="['fas', 'user-circle']" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  computed: {
    ...mapState({ isPlaying: (state) => state.player.isPlaying }),
  },
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
  border-bottom-width: 1px;
  @apply bg-bgColor1;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 1.5rem;
  font-size: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  &:focus {
    outline: none;
  }

  .toggler {
    display: none;
    @media (max-width: 768px) {
      font-size: 25px;
      display: block;
      margin-right: 2rem;

      display: inline-block;
    }
  }

  .input-container {
    font-size: 15px;
    .icon {
      margin-right: 1rem;
      @media (max-width: 768px) {
        display: none;
      }
    }
    input {
      background-color: transparent;
      &:focus {
        outline: none;
      }
    }
  }

  .avatar {
    align-self: flex-end;
    font-size: 25px;
    cursor: pointer;
  }
}
</style>
