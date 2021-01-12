<template>
  <div v-if="fetching">
    <page-spinner />
  </div>
  <div v-else>
    <artist-detail :id="artistId" :data="data" />
  </div>
</template>

<script>
import { GET_ARTIST } from '~/services/types'
const initial = {
  name: '',
  imageUrl: '',
}

export default {
  asyncData({ params }) {
    const artistId = params.id
    return {
      artistId,
    }
  },
  data() {
    return {
      data: initial,
      artistId: '',
      fetching: true,
      error: '',
    }
  },
  mounted() {
    this.getArtist()
  },
  methods: {
    async getArtist() {
      try {
        const { name } = await this.$axios.$get(GET_ARTIST(this.artistId))
        this.data = { name }
      } catch {
        this.$toast.global.network_error()
      } finally {
        this.fetching = false
      }
    },
  },
}
</script>
