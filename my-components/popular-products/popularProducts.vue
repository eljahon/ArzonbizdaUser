<script>
import { CThemeProvider, CSimpleGrid, CBox } from '@chakra-ui/vue'
import PopularProduct from './popularProduct.vue'
import ViewAll from '~/library/viewAll.vue'
export default {
  name: 'CategoriesComponent',
  components: {
    ViewAll,
    CThemeProvider,
    CSimpleGrid,
    CBox,
    PopularProduct,
  },
  data() {
    return {
      popular: [
        { img: 'poco.png' },
        { img: 'poco.png' },
        { img: 'poco.png' },
        { img: 'poco.png' },
        { img: 'poco.png' },
        { img: 'poco.png' },
        { img: 'poco.png' },
        { img: 'poco.png' },
        { img: 'poco.png' },
        { img: 'poco.png' },
        { img: 'poco.png' },
        { img: 'poco.png' },
        { img: 'poco.png' },
        { img: 'poco.png' },
        { img: 'poco.png' },
      ],
    }
  },
}
</script>
<template>
  <CThemeProvider>
    <CBox :mb="['27px', '47px', '67px', '88px']">
      <CFlex
        align="center"
        justify="space-between"
        :mb="['10px', '20px', '30px', '40px']"
      >
        <h1 class="main_header">Популярные товары</h1>
        <ViewAll />
      </CFlex>

      <CSimpleGrid
        :columns="['3', '3', '4', '5']"
        :rows="['1', '2', '3', '3']"
        :row-gap="['10px', '20px', '30px', '40px']"
        justify-items="center"
        justify-content="center"
      >
        <CBox v-for="item in popular" :key="item" class="popular__product">
          <PopularProduct :item="item" />
        </CBox>
      </CSimpleGrid>
    </CBox>
  </CThemeProvider>
</template>
<style lang="scss" scoped>
.popular__product {
  @media screen and(max-width: 62em) {
    &:nth-child(n + 10) {
      display: none;
    }
  }
  @media screen and(max-width: 48em) {
    &:nth-child(n + 7) {
      display: none;
    }
  }
  @media screen and(max-width: 30em) {
    &:nth-child(n + 4) {
      display: none;
    }
  }
}
</style>
