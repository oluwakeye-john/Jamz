<template>
  <div class="mb-10">
    <h1 class="mb-10 text-2xl font-bold">{{ title }}</h1>
    <div v-swiper="swiperOption">
      <div class="swiper-wrapper">
        <div v-for="(item, index) in data" :key="index" class="swiper-slide">
          <card :type="type" :item="item" :circular="circular" />
        </div>
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: () => '',
    },
    circular: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'song',
    },
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 30,
        breakpoints: {
          768: {
            slidesPerView: 2.5,
          },
          992: {
            slidesPerView: 4,
          },
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
}
</script>
