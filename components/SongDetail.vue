<template>
  <create-layout>
    <form @submit.prevent="handleSubmit">
      <h1 class="title">{{ title }}</h1>
      <div class="input-container">
        <label>Name</label>
        <input v-model="input.name" placeholder="Name" required />
      </div>
      <div class="input-container">
        <label>Artist</label>
        <select v-model="input.artistId">
          <option selected value="">None</option>
          <option
            v-for="artist in artists"
            :key="artist._id"
            :value="artist._id"
          >
            {{ artist.name }}
          </option>
        </select>
      </div>
      <div class="input-container">
        <label>Song Cover</label>
        <button class="file-input" type="button" @click="handleSongCoverUpload">
          <font-awesome-icon :icon="['fas', 'download']" />
          Click to upload
        </button>
      </div>
      <div class="input-container">
        <label>File</label>
        <button class="file-input" type="button" @click="handleSongFileUpload">
          <font-awesome-icon :icon="['fas', 'download']" />
          Click to upload
        </button>
      </div>

      <div class="input-container">
        <button class="bg-primary my-10" type="submit">Submit</button>
      </div>
    </form>
  </create-layout>
</template>

<script>
import { openUploadModal } from '../utils/upload'
import {
  GET_TOP_ARTISTS_CALL,
  CREATE_SONG,
  UPDATE_SONG,
} from '~/services/types'
const initial = {
  name: '',
  imageUrl: '',
  fileUrl: '',
  artistId: '',
}

export default {
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
    id: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      artists: [],
      input: initial,
    }
  },
  computed: {
    isNew() {
      return !this.id
    },
    title() {
      return this.isNew ? 'New song' : 'Update Song'
    },
  },
  watch: {
    data: {
      immediate: true,
      handler(newValue) {
        this.input = newValue
      },
    },
  },
  mounted() {
    this.getAllArtists()
  },
  methods: {
    async handleSubmit() {
      try {
        if (this.isNew) {
          await this.$axios.$post(CREATE_SONG, this.input)
        } else {
          await this.$axios.$patch(UPDATE_SONG(this.id), this.input)
        }
        this.$toast.global.success()
      } catch {
        this.$toast.global.network_error()
      }
    },
    _handleUpload(fieldName) {
      openUploadModal(this.onUpload, fieldName)
    },

    handleSongCoverUpload() {
      this._handleUpload('imageUrl')
    },
    handleSongFileUpload() {
      this._handleUpload('fileUrl')
    },

    onUpload(data, fieldName) {
      this.input[fieldName] = data.url
    },
    async getAllArtists() {
      const data = await this.$axios.$get(GET_TOP_ARTISTS_CALL)
      this.artists = data
    },
  },
}
</script>
