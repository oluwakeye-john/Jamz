<template>
  <div class="container">
    <sidebar />
    <div style="flex: 1; overflow: hidden" class="mb-20">
      <navbar />
      <div class="content">
        <div v-if="!fetching">
          <slide-list title="Made for you" :data="songs" />
          <slide-list title="Popular playlists" :data="songs" />
        </div>
        <page-spinner v-else />
      </div>
    </div>
    <bottom-nav />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  computed: {
    ...mapState({
      fetching: (state: any) => state.fetching,
      songs: (state: any) => state.music.songs,
    }),
  },
})
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  height: 100%;
  width: 100%;

  @media (max-width: 768px) {
    display: block;
  }
}

.content {
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
}
</style>
