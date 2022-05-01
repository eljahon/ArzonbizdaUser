<script>
import { CIcon } from '@chakra-ui/vue'

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'
import Vue from 'vue'
Vue.use(VueViewer)

export default {

  components: {
    VueSlickCarousel,
    CIcon,
  },
  data: () => ({
    items: [
      {
        text: 'Slide 1',
        image: 'https://picsum.photos/443/469',
      },
      {
        text: 'Slide 2',
        image: 'https://picsum.photos/443/469',
      },
      {
        text: 'Slide 3',
        image: 'https://picsum.photos/443/469',
      },
      {
        text: 'Slide 4',
        image: 'https://picsum.photos/443/469',
      },
    ],
    c1: undefined,
    c2: undefined,
  }),

  mounted() {
    this.c1 = this.$refs.c1
    this.c2 = this.$refs.c2
  },

  methods: {
    show() {
      this.$viewerApi({
        images: this.images,
      })
    },

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
  <div>
    <div>
      <VueSlickCarousel
        ref="c1"
        v-viewer
        :as-nav-for="c2"
        :focus-on-select="true"
        infinite="true"
        style="
          height: 583px;
          width: 705px;
          background-color: #f4f4f4;
          border-radius: 12px;
        "
      >
        <div
          v-for="(item, index) in items"
          :key="index"
          class="product__slider"
        >
          <img :src="item.image" alt="" />
        </div>
      </VueSlickCarousel>
    </div>

    <div class="slider__footer">
      <button class="slide__btn" @click="next">
        <CIcon name="buttonLeft" ml="10px" />
      </button>

      <VueSlickCarousel
        ref="c2"
        :slides-to-show="4"
        infinite="true"
        :as-nav-for="c1"
        :focus-on-select="true"
        style="width: 705px"
      >
        <div v-for="(item, index) in items" :key="index" style="width: 705px">
          <div class="slider__card" width="100px">
            <img width="81px" height="85px" :src="item.image" alt="image" />
          </div>
        </div>
      </VueSlickCarousel>

      <button class="slide__btn" @click="previous">
        <CIcon name="buttonRight" ml="10px" />
      </button>
    </div>

    <div>
      <VueSlickCarousel ref="carousel">
        <div>
          <div class="slider__fix"></div>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product__slider {
  margin: 57px 0 0 131px;
}

.slider__card {
  margin-top: 20px;
  background: #f4f4f4;
  width: 100px;
  height: 100px;
  border-radius: 12px;
  cursor: pointer;
  padding: 9px;

  &:hover {
    border: 3px solid rgba(15, 108, 176, 0.3);
    border-radius: 12px;
  }
}

.slider__footer {
  display: flex;
  gap: 30px;
  justify-content: space-between;
  width: 705px;
}

.slide__btn {
  width: 40px;
  height: 100px;
  border: 1px solid #e3e6e6;
  margin-top: 20px;
  border-radius: 12px;

  &:hover {
    border: 1px solid #3bcff5;
  }
}
</style>
