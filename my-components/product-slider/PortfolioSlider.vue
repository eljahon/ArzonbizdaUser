<script>
// import { mapState } from 'vuex'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// import portfolio1 from '@/assets/images/homepage/portfolio/portfolio1.png'
// import portfolio2 from '@/assets/images/homepage/portfolio/portfolio2.png'
// import portfolio3 from '@/assets/images/homepage/portfolio/portfolio3.png'

export default {
  name: 'PortfolioSlider',
  components: { VueSlickCarousel },

  data() {
    return {
      width: 'auto',
      settings: {
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        touchThreshold: 5,
        arrows: false,
        dots: false,
        lazyLoad: 'progressive',
      },
      slides: [
        {
          text: 'Slide 1',
          image: 'https://images.unsplash.com/photo-1508502726440-477c94bc369e',
        },
        {
          text: 'Slide 2',
          image: 'https://images.unsplash.com/photo-1508502726440-477c94bc369e',
        },
        {
          text: 'Slide 3',
          image: 'https://images.unsplash.com/photo-1508502726440-477c94bc369e',
        },
        {
          text: 'Slide 4',
          image: 'https://images.unsplash.com/photo-1508502726440-477c94bc369e',
        },
      ],
    }
  },
  // computed: {
  //   ...mapState({
  //     isSideMenuOpen: (state) => state.ui.isSideMenuOpen,
  //   }),
  // },
  mounted() {
    this.width = window.innerWidth - 556 - 90
  },
  methods: {
    next() {
      this.$refs.carousel.next()
    },

    previous() {
      this.$refs.carousel.prev()
    },
  },
}
</script>

<template>
  <div class="h-screen relative" :style="{ width: `${width}px` }">
    <VueSlickCarousel v-bind="settings" ref="carousel" class="w-full h-full">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="h-full bg-white group relative"
      >
        <img
          class="carousel-cell-image h-full object-cover"
          :src="slide.image"
        />
        <div
          class="absolute inset-0 opacity-0 pointer-events-none group-hover:(opacity-100 pointer-events-auto)"
          transition="opacity"
          duration="300"
          bg="primary opacity-90"
        ></div>
      </div>
    </VueSlickCarousel>

    <section class="flex text-white absolute right-8 bottom-6 z-50 space-x-4">
      <p class="text-2xl">Наше портфолио</p>
      <button @click="previous"><base-icon name="chevron-left" /></button>
      <button @click="next"><base-icon name="chevron-right" /></button>
    </section>
  </div>
</template>

<style lang="scss">
.slick-list,
.slick-track {
  height: 100%;
}

.slick-track div {
  height: 100%;
}
</style>
