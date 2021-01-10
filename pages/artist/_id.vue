<template>
  <base-layout>
    <table-list v-if="!fetching" :title="artist.name" :data="songs" />
    <page-spinner v-else />
  </base-layout>
</template>

<script>
import { GET_ARTIST_SONG } from '~/services/types'
export default {
  asyncData({ params, redirect }) {
    const id = params.id
    if (!id) {
      redirect('/')
    }
    return { id }
  },
  data() {
    return {
      fetching: {
        type: Boolean,
        default: true,
      },
      artist: {
        type: Object,
        default: () => ({}),
      },
      id: {
        type: String,
      },
      songs: {
        type: Array,
        default: [],
      },
    }
  },
  computed: {
    pageTitle() {
      return `${this.artist.name || 'Artist'} | Jamz`
    },
  },
  mounted() {
    this.getArtist()
  },
  methods: {
    async getArtist() {
      this.fetching = true
      const { name, description, songs } = await this.$axios.$get(
        GET_ARTIST_SONG(this.id)
      )
      if (name) {
        this.songs = songs
        this.artist = { name, description }
      } else {
        this.songs = []
      }
      this.fetching = false
    },
  },
  head() {
    return {
      title: this.pageTitle,
    }
  },
}
</script>
