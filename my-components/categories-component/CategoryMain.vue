<script>
import { CFlex, CBox } from '@chakra-ui/vue'
import BannerImage from '../bannerImgBox/BannerImg.vue'
import CategoryMainWrapper from './CategoryMainWrapper.vue'
import CategoryTestFilter from './CategoryTestFilter.vue'

export default {
  name: 'CategoryMain',

  components: {
    BannerImage,
    CategoryMainWrapper,
    CFlex,
    CBox,
    CategoryTestFilter,
  },

  data() {
    return {
      switched: true,
    }
  },

  methods: {
    done() {
      this.switched = !this.switched
    },
  },
}
</script>

<template>
  <div>
    <div class="category__main" :class="{ showHide: !switched }">
      <CBox v-if="switched">
        <CategoryTestFilter />
      </CBox>
      <CBox>
        <CFlex direction="column">
          <BannerImage
            mt="88px"
            image-path="banner1.png"
            style="margin-bottom: 40px; width: 100%"
          />
        </CFlex>
        <CategoryMainWrapper @switch="done" />
      </CBox>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.category {
  margin-right: 48px;
}
.category__main {
  display: grid;
  grid-template-columns: 1fr 3fr;
}
.showHide {
  grid-template-columns: 1fr !important;
}
@media screen and (max-width: 1050px) {
  .category__main {
    display: block;
  }
}
</style>
<!--         <CategoryFilter class="category" />
 -->
