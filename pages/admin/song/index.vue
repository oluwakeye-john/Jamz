<template>
  <div>
    <h1>All songs</h1>
    <div v-for="song in songs" :key="song._id">
      <nuxt-link :to="detailLink(song._id)">
        {{ song.name }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { GET_TOP_SONGS_CALL } from '~/services/types'
export default {
  data() {
    return {
      songs: [],
    }
  },

  mounted() {
    this.getSongs()
  },
  methods: {
    async getSongs() {
      try {
        const resp = await this.$axios.$get(GET_TOP_SONGS_CALL)
        this.songs = resp
      } catch {
        this.$toast.global.network_error()
      }
    },
    detailLink(id) {
      return `/admin/song/${id}`
    },
  },
}
</script>
