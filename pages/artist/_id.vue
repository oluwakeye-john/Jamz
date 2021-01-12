<template>
  <base-layout>
    <div v-if="!fetching">
      <div class="artist-meta">
        <img class="artist-image" :src="imageSrc(artist.imageUrl)" />
        <div>
          <p class="text-2xl md:text-3xl font-bold">{{ artist.name }}</p>
          <!-- <p class="misc text-sm">493,596 fans</p> -->
        </div>
      </div>

      <table-list title="" :data="songs" />
    </div>
    <page-spinner v-else />
  </base-layout>
</template>

<script>
import { GET_ARTIST_SONG } from '~/services/types'
import { getPublicId } from '~/utils/image'
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
      const { name, description, imageUrl, songs } = await this.$axios.$get(
        GET_ARTIST_SONG(this.id)
      )
      if (name) {
        this.songs = songs
        this.artist = { name, description, imageUrl }
      } else {
        this.songs = []
      }
      this.fetching = false
    },
    imageSrc(url) {
      if (url) {
        return this.$cloudinary.image.url(getPublicId(url), {
          width: '400',
          height: 400,
          crop: 'fill',
        })
      } else {
        return ''
      }
    },
  },
  head() {
    return {
      title: this.pageTitle,
    }
  },
}
</script>

<style lang="scss" scoped>
.artist-meta {
  display: flex;
  align-items: center;
  margin: 2rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 1.5rem;
  }
}
.artist-image {
  margin-right: 2rem;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    margin-right: 0;
  }
}
</style>
