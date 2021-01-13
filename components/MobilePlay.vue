<template>
  <div class="modal-container">
    <div class="blurred-background">
      <img :src="data.imageUrl" />
    </div>

    <div class="close-button" @click="handleClose">
      <font-awesome-icon :icon="['fas', 'chevron-down']" />
    </div>
    <div class="modal-image"><img :src="imageSrc(data.imageUrl)" /></div>

    <div class="flex justify-between items-center mt-6 mb-3" style="width: 80%">
      <button class="icon">
        <font-awesome-icon :icon="['fas', 'random']" />
      </button>
      <h2 class="text-2xl font-bold">{{ data.name }}</h2>
      <button
        class="icon"
        :class="{ active: isFavorite(data) }"
        @click="toggleFavorite"
      >
        <font-awesome-icon :icon="['fas', 'heart']" />
      </button>
    </div>

    <span class="text-sm mb-5 text-gray-500">{{ artistName }}</span>

    <controls :expanded="true" />

    <div style="width: 80%" class="my-3">
      <slider :expanded="true" />
    </div>

    <!-- <div>
      <font-awesome-icon
        :class="{ active: isFavorite(data) }"
        :icon="['fas', 'heart']"
        @click="toggleFavorite"
      />
    </div> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { getPublicId } from '~/utils/image'
export default {
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    ...mapGetters({ isFavorite: 'music/isFavorite' }),
    artistName() {
      return this.data.artist ? this.data.artist.name : 'Unknown'
    },
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
}
</script>

<style lang="scss" scoped>
.modal-container {
  width: 100%;
  height: 100%;

  display: none;
  flex-direction: column;
  padding: 5rem 0;
  align-items: center;
  position: relative;

  z-index: 5;

  @media (max-width: 768px) {
    display: flex;
  }

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation: fade 0.4s 1 ease-in-out alternate;
}

.modal-image {
  width: 80%;
  margin: 0 auto;

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 4px;
    pointer-events: none;
  }
}

.close-button {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 1rem;
}

button:focus {
  outline: none;
}

.blurred-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur(10rem);
  -webkit-filter: blur(10rem);
  z-index: -1;
  display: none;
  pointer-events: none;

  -webkit-backface-visibility: hidden;
  -webkit-perspective: 1000;
  -webkit-transform: translate3d(0, 0, 0);
  -webkit-transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000;
  transform: translate3d(0, 0, 0);
  transform: translateZ(0);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 768px) {
    display: block;
  }
}
</style>
