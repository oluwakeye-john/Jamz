<template>
  <base-layout>
    <!-- <slide-list title="Favorites" :data="favorites" /> -->
    <table-list title="Recent" :data="recent" />
  </base-layout>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  computed: {
    ...mapState({ recent: (state) => state.music.recent }),
  },
  mounted() {
    this.getRecent()
  },
  methods: {
    ...mapActions({ getRecent: 'music/getRecent' }),
  },
}
</script>
