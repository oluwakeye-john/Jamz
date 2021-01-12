<template>
  <create-layout>
    <form @submit.prevent="handleSubmit">
      <h1 class="title">{{ title }}</h1>
      <div class="input-container">
        <label>Name</label>
        <input v-model="input.name" placeholder="Name" required />
      </div>

      <div class="input-container">
        <label>Artist Image</label>
        <button
          class="file-input"
          type="button"
          @click="handleArtistImageUpload"
        >
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
import { CREATE_ARTIST, UPDATE_ARTIST } from '~/services/types'
const initial = {
  name: '',
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
      input: initial,
    }
  },
  computed: {
    isNew() {
      return !this.id
    },
    title() {
      return this.isNew ? 'New artist' : 'Update Artist'
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
  methods: {
    async handleSubmit() {
      try {
        if (this.isNew) {
          await this.$axios.$post(CREATE_ARTIST, this.input)
          this.input = initial
        } else {
          await this.$axios.$patch(UPDATE_ARTIST(this.id), this.input)
        }
        this.$toast.global.success()
      } catch {
        this.$toast.global.network_error()
      }
    },
    _handleUpload(fieldName) {
      openUploadModal(this.onUpload, fieldName)
    },

    handleArtistImageUpload() {
      this._handleUpload('imageUrl')
    },

    onUpload(data, fieldName) {
      this.input[fieldName] = data.url
    },
  },
}
</script>
