<template>
  <div class="mb-10">
    <h1 class="mb-10 text-2xl font-bold">Made For You</h1>
    <div v-swiper="swiperOption">
      <div class="swiper-wrapper">
        <div v-for="(_, index) in 6" :key="index" class="swiper-slide">
          <div class="swiper-slide__image-container">
            <img src="https://picsum.photos/300" />
            <div>
              <font-awesome-icon :icon="['fas', 'play']" />
            </div>
          </div>
          <p class="text-sm my-2">
            An infinite mix of favorites and new tracks
          </p>
        </div>
        <!-- <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div> -->
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

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
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

<style lang="scss" scoped>
.swiper-slide {
  &__image-container {
    position: relative;
    height: 230px;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      height: 170px;
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
