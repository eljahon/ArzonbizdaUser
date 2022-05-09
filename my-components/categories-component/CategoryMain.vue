<script>
import { CFlex, CBox } from '@chakra-ui/vue'
import BannerImage from '../bannerImgBox/BannerImg.vue'
import CategoryFilter from './CategoryFilter.vue'
import CategoryMainWrapper from './CategoryMainWrapper.vue'
export default {
  name: 'CategoryMain',
  components: {
    CategoryFilter,
    BannerImage,
    CategoryMainWrapper,
    CFlex,
    CBox,
  },
  data() {
    return {
      switched: false,
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
    <CFlex>
      <CBox v-if="switched">
        <CategoryFilter class="category" />
      </CBox>
      <CBox>
        <CFlex direction="column">
          <BannerImage mt="88px" image-path="banner1.png" />
          <CategoryMainWrapper @switch="done" />
        </CFlex>
      </CBox>
    </CFlex>
  </div>
</template>



<style lang="scss" scoped>
.category {
  margin-right: 48px;
}
</style>