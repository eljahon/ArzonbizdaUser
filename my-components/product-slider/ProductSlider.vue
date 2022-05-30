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

  props: {
    images: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      c1: undefined,
      c2: undefined,
    }
  },

  mounted() {
    this.c1 = this.$refs.c1
    this.c2 = this.$refs.c2
    console.log(this.images)
  },

  methods: {
    show() {
      this.$viewerApi({
        images: this.images,
      })
    },

    previous() {
      this.$refs.c2.next()
    },

    next() {
      this.$refs.c1.prev()
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
        :arrows="false"
        :dots="false"
        :as-nav-for="c2"
        :focus-on-select="true"
        :infinite="true"
        class="slider__wrapper"
      >
        <div v-for="(item, index) in images" :key="index">
          <img :src="item.src" alt="" class="slider__image" />
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
        :infinite="true"
        :as-nav-for="c1"
        :focus-on-select="true"
        style="width: 80%; height: 83px; align-items: center"
      >
        <div v-for="(item, index) in images" :key="index" style="width: 83px">
          <div class="slider__card">
            <img
              style="width: 81px; height: 85px; padding-top: 20px"
              :src="item.src"
              alt="image"
              class="slider__image"
            />
          </div>
        </div>
      </VueSlickCarousel>

      <button class="slide__btn" @click="previous">
        <CIcon name="buttonRight" ml="10px" />
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
div {
  margin: 0 auto;
  max-width: 100%;
}

.slider__wrapper {
  height: 583px;
  // background-color: #f4f4f4;
  border-radius: 12px;
  margin: 0 auto;
}

.slider__card {
  margin-top: 20px;
  background: #f4f4f4;
  width: 100px;
  height: 100px;
  border-radius: 12px;
  cursor: pointer;
  padding-top: 10px;

  &:hover {
    border: 3px solid rgba(15, 108, 176, 0.3);
    border-radius: 12px;
  }
}

.slider__image {
  margin: 0 auto;
  width: 80%;
}

.slider__footer {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0;
}

.slide__btn {
  // width: 40px;
  height: 100px;
  border: 1px solid #e3e6e6;
  margin-top: 20px;
  border-radius: 12px;
  // z-index: 10000;

  &:hover {
    border: 1px solid #3bcff5;
  }
}

@media screen and (max-width: 768px) {
  .slider__footer {
    display: none;
  }
  .slider__wrapper {
    height: 350px;
  }

  // .slider__wrapper {
  //   max-width: 618px;
  //   margin: 0 auto;
  // }
}

@media screen and (max-width: 425px) {
  .slider__wrapper {
    height: 143px;
  }
}
@media screen and (max-width: 375px) {
  // .slider__wrapper {
  //   max-width: 320px;
  // }
}
</style>
