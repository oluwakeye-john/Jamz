<template>
  <base-layout>
    <div v-if="!fetching">
      <slide-list title="Made for you" :data="songs" />
      <slide-list title="Popular playlists" :data="songs" />
    </div>
    <page-spinner v-else />
  </base-layout>
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
