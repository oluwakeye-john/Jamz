<template>
  <div>
    <h1>All artists</h1>
    <div v-for="artist in artists" :key="artist._id">
      <nuxt-link :to="detailLink(artist._id)">
        {{ artist.name }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { GET_TOP_ARTISTS_CALL } from '~/services/types'
export default {
  data() {
    return {
      artists: [],
    }
  },

  mounted() {
    this.getArtists()
  },

  methods: {
    async getArtists() {
      try {
        const resp = await this.$axios.$get(GET_TOP_ARTISTS_CALL)
        this.artists = resp
      } catch {
        this.$toast.global.network_error()
      }
    },
    detailLink(id) {
      return `/admin/artist/${id}`
    },
  },
}
</script>
