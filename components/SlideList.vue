<template>
  <div class="mb-10">
    <h1 class="mb-10 text-2xl font-bold">{{ title }}</h1>
    <div v-swiper="swiperOption">
      <div class="swiper-wrapper">
        <div v-for="(item, index) in data" :key="index" class="swiper-slide">
          <card :item="item" />
        </div>
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
      },
    }
  },
}
</script>
