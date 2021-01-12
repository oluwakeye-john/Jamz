<template>
  <base-layout>
    <div v-if="!fetching">
      <slide-list title="Most Streamed" :data="home[0]" />
      <slide-list
        title="Pick Artists"
        :data="home[1]"
        :circular="true"
        type="artist"
      />
      <slide-list title="Today, we made for you" :data="home[0]" />
      <!-- <slide-list title="Top Picks" :data="home[0]" /> -->
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
      home: (state: any) => state.music.home,
    }),
  },
  head: {
    title: "Let's Jam | Jamz",
  },
})
</script>
