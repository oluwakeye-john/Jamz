<template>
  <div>
    <h1 class="mt-0 mb-5 text-2xl font-bold">{{ title }}</h1>

    <div v-if="data.length" class="table-container">
      <div v-for="item in data" :key="item.id" class="card">
        <div class="card">
          <img
            class="card__image"
            :src="imageSrc(item.imageUrl)"
            :alt="item.name"
            @click="playTrack(item)"
          />
          <div class="card__content">
            <div>
              <p class="font-bold name" @click="playTrack(item)">
                {{ item.name }}
              </p>
              <p class="misc">Song &middot; {{ songArtist(item) }}</p>
            </div>
            <button class="icon">
              <font-awesome-icon class="misc" :icon="['fas', 'heart']" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <p class="text-center my-10 misc">No item</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { getPublicId } from '~/utils/image'
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    data: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    ...mapActions({
      toggleFavorite: 'music/toggleFavorite',
      setTrack: 'player/setTrack',
    }),
    formattedCreatedAt(item) {
      const t = new Date(item.createdAt)
      return t.toLocaleDateString()
    },
    playTrack(item) {
      this.setTrack(item)
    },
    imageSrc(url) {
      if (url) {
        return this.$cloudinary.image.url(getPublicId(url), {
          width: '150',
          height: 150,
          crop: 'fill',
        })
      } else {
        return ''
      }
    },
    songArtist(item) {
      console.log(item)
      return item.artist ? item.artist.name : 'unknown'
    },
  },
}
</script>

<style lang="scss" scoped>
.table-container {
  margin-top: 3rem;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
}

.card {
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 14px;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }

  &:hover .icon {
    opacity: 1;
    pointer-events: all;
  }

  &__image {
    width: 50px;
    height: 50px;
    object-fit: cover;
    margin-right: 1rem;
    border-radius: 5px;
    cursor: pointer;
  }

  &__content {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .name {
      cursor: pointer;
    }
  }

  .icon {
    opacity: 0;
    transition: 0.3s;
    pointer-events: none;

    @media (max-width: 768px) {
      opacity: 1;
      pointer-events: all;
    }
  }
}
</style>
