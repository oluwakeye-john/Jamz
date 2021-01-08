<template>
  <div class="modal-container">
    <div class="close-button" @click="handleClose">
      <font-awesome-icon :icon="['fas', 'chevron-down']" />
    </div>
    <div class="modal-image"><img :src="data.imageUrl" /></div>
    <h2 class="text-2xl my-5 font-bold">{{ data.name }}</h2>

    <controls :expanded="true" />

    <div style="width: 80%" class="my-4">
      <slider :expanded="true" />
    </div>

    <div>
      <font-awesome-icon
        :class="{ active: isFavorite(data) }"
        :icon="['fas', 'heart']"
        @click="toggleFavorite"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    ...mapGetters({ isFavorite: 'music/isFavorite' }),
  },
  methods: {
    ...mapActions({
      toggleFavoriteAction: 'music/toggleFavorite',
    }),
    handleClose() {
      this.$emit('close')
    },
    toggleFavorite() {
      this.toggleFavoriteAction(this.data)
    },
  },
}
</script>

<style lang="scss" scoped>
.modal-container {
  width: 100%;
  height: 100%;

  display: none;
  flex-direction: column;
  padding: 6rem 0;
  align-items: center;
  position: relative;

  z-index: 5;

  @media (max-width: 768px) {
    display: flex;
  }
}

.modal-image {
  width: 80%;
  margin: 0 auto;

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 4px;
  }
}

.close-button {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 1rem;
}
</style>
