<template>
  <base-layout>
    <div v-if="!fetching">
      <slide-list title="Made for you" :data="songs" />
      <slide-list title="Popular playlists" :data="songs" />
      <slide-list title="Your Fav Artists" :data="songs" :circular="true" />
      <slide-list title="Your Fav Artists" :data="songs" />
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
  head: {
    title: "Let's Jam | Jamz",
  },
})
</script>
