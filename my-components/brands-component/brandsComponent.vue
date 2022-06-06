<script>
import { CThemeProvider, CSimpleGrid, CBox } from '@chakra-ui/vue'
import { mapGetters } from 'vuex'
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
    return {}
  },

  computed: {
    ...mapGetters(['brandItem']),

    brandItems() {
      return this.brandItem
    },
  },
}
</script>

<template>
  <CThemeProvider>
    <CBox mt="88px" :mb="['24px', '32px', '40px', '48px', '56px', '64px']">
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
          v-for="(item, idx) in brandItems"
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
