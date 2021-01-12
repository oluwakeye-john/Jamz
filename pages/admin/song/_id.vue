<template>
  <div v-if="fetching">
    <page-spinner />
  </div>
  <div v-else>
    <song-detail :id="songId" :data="data" />
  </div>
</template>

<script>
import { GET_SONG } from '~/services/types'
const initial = {
  name: '',
  artistId: '',
  imageUrl: '',
  fileUrl: '',
}

export default {
  asyncData({ params }) {
    const songId = params.id
    return {
      songId,
    }
  },
  data() {
    return {
      data: initial,
      songId: '',
      fetching: true,
      error: '',
    }
  },
  mounted() {
    this.getSong()
  },
  methods: {
    async getSong() {
      try {
        const { name, artistId } = await this.$axios.$get(GET_SONG(this.songId))
        this.data = { name, artistId }
      } catch {
        this.$toast.global.network_error()
      } finally {
        this.fetching = false
      }
    },
  },
}
</script>
