<template>
  <base-layout>
    <!-- <slide-list title="Favorites" :data="favorites" /> -->
    <table-list title="Favorites" :data="favorites" />
  </base-layout>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  computed: {
    ...mapState({ favorites: (state) => state.music.favorites }),
  },
  mounted() {
    this.getFavorites()
  },
  methods: {
    ...mapActions({ getFavorites: 'music/getFavorites' }),
  },
}
</script>
