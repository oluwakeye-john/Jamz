<template>
  <div class="card">
    <div class="card__image-container">
      <img :src="item.imageUrl" />
      <div @click="playTrack">
        <font-awesome-icon :icon="['fas', 'play']" />
      </div>
    </div>
    <p class="text-sm my-2">{{ item.name }}</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    ...mapActions({ setTrack: 'player/setTrack' }),
    playTrack() {
      this.setTrack(this.item)
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  &__image-container {
    position: relative;
    height: 230px;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      height: 170px;
    }

    &:hover {
      img {
        opacity: 0.7;
      }
    }

    & > div {
      z-index: 2;
      background-color: #fff;
      border-radius: 50%;
      width: 60px;
      height: 60px;
      color: #121216;
      font-size: 23px;

      display: flex;
      justify-content: center;
      align-items: center;

      transition: 0.1s;
      &:hover {
        transform: scale(1.15);
      }
    }

    img {
      transition: 0.3s;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 4px;
    }
  }
}
</style>
