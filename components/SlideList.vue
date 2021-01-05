<template>
  <div>
    <VueSlickCarousel v-bind="settings" :arrows="false" :dots="true">
      <div v-for="(_, index) in [...new Array(9)]" :key="index">
        <img src="https://picsum.photos/400" />
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        dots: true,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        touchThreshold: 5,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              dots: false,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      },
    }
  },
}
</script>

<style>
.slick-slider {
  width: 100%;
  /* max-width: 720px; */
}

.slick-list {
  margin: 0 1rem;
}
.slick-slide > div {
  padding: 0 1rem;
}
</style>
