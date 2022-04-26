<script>
import { CThemeProvider, CSimpleGrid, CBox } from '@chakra-ui/vue'
import BrandComponent from '~/my-components/brands-component/brandComponent.vue'
import ViewAll from '~/library/viewAll.vue'
export default {
  name: 'BrandsComponent',
  components: {
    BrandComponent,
    CThemeProvider,
    CSimpleGrid,
    CBox,
    ViewAll,
  },
  data() {
    return {
      brandItem: [
        { img: 'acer.png', name: 'Acer' },
        { img: 'apple.png', name: 'Apple' },
        { img: 'asus.png', name: 'Asus' },
        { img: 'dell.png', name: 'Dell' },
        { img: 'HP.png', name: 'HP' },
        { img: 'lenovo.png', name: 'Lenovo' },
        { img: 'LG.png', name: 'LG' },
        { img: 'midea.png', name: 'Midea' },
        { img: 'samsung.png', name: 'Samsung' },
        { img: 'sony.png', name: 'Sony' },
        { img: 'versace.png', name: 'Versace' },
        { img: 'xiaomi.png', name: 'Xiaomi' },
      ],
    }
  },
}
</script>
<template>
  <CThemeProvider>
    <CBox :mb="['24px', '32px', '40px', '48px', '56px', '64px']">
      <CFlex
        align="center"
        justify="space-between"
        :mb="['10px', '15px', '20px', '25px', '30px', '40px']"
      >
        <h1 class="main_header">{{ $t('brand') }}</h1>
        <ViewAll />
      </CFlex>

      <CSimpleGrid
        :columns="['4', '4', '4', '4', '4', '6']"
        rows="2"
        spacing-x="30"
        :spacing-y="['18px', '22px', '26px', '30px', '34px', '40px']"
        justify-items="center"
        justify-content="center"
      >
        <CBox
          v-for="(item, idx) in brandItem"
          :key="idx"
          class="brands__component"
        >
          <BrandComponent :item="item" />
        </CBox>
      </CSimpleGrid>
    </CBox>
  </CThemeProvider>
</template>
<style lang="scss" scoped>
.brands__component {
  @media screen and(max-width: 62em) {
    &:nth-child(n + 9) {
      display: none;
    }
  }
}
</style>
