<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: { VueSlickCarousel },

  settings: {
    dots: true,
    dotsClass: 'slick-dots custom-dot-class',
    edgeFriction: 0.35,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  },
}
</script>

<template>
  <div class="slider__hero" width="1400px" height="440px">
    <!-- slider hozircha bunday turibdi. Keyin v-for  bilan qilinsin. Esdan chiqib qolmasin-->

    <VueSlickCarousel v-bind="settings">
      <div>
        <div class="banner__hero">
          <img src="@/assets/img/slide.png" alt="" />
        </div>
      </div>
      <div>
        <div class="banner__hero">
          <img src="@/assets/img/slide.png" alt="" />
        </div>
      </div>
      <div>
        <div class="banner__hero">
          <img src="@/assets/img/slide.png" alt="" />
        </div>
      </div>
      <div>
        <div class="banner__hero">
          <img src="@/assets/img/slide.png" alt="" />
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<style lang="scss">
.banner__hero {
  max-width: 1400px;
  height: 440px;
  border-radius: 25px;
}
</style>
