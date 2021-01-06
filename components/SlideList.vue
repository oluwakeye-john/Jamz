<template>
  <div class="mb-10">
    <h1 class="mb-10 text-2xl font-bold">Made For You</h1>
    <div v-swiper="swiperOption">
      <div class="swiper-wrapper">
        <div v-for="(_, index) in 6" :key="index" class="swiper-slide">
          <card />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 30,
        breakpoints: {
          768: {
            slidesPerView: 4,
          },
        },
      },
    }
  },
}
</script>
