<script>
import { CSimpleGrid, CBox } from '@chakra-ui/vue'
import CompareProduct from '~/my-components/comparing-component/CompareProduct.vue'
import CompareTab from '~/my-components/compare-tabs/CompareTab.vue'
import CompareProductMobile from '~/my-components/comparing-component/CompareProductMobile.vue'
import ProductSlider from '~/my-components/product-slider/ProductSlider.vue'
// import ProductSlider from '~/my-components/product-slider/.vue'

export default {
  name: 'ComparePage',
  components: {
    CompareProduct,
    CSimpleGrid,
    CBox,
    CompareTab,
    CompareProductMobile,
    ProductSlider,
  },
  mounted() {
    this.fetchItems()
  },
  methods: {
    async fetchItems() {
      // const query = { prs: this.$store.state.isBadge }
      const { data } = await this.$axios.get('/product/compare', {
        params: {
          prs: [
            'f17fb9d6-fdc9-4b5d-ba15-f155511268ad',
            'f17fb9d6-fdc9-4b5d-ba15-f155511268ad',
          ],
        },
      })
      console.log(data)
    },
  },
  //  asyncData({ $axios }) {
  //   // const query = { prs: this.$store.state.isBadge }
  //   const { data } = await $axios.get('/products/compares', {
  //     params: {
  //       prs: [
  //         'f17fb9d6-fdc9-4b5d-ba15-f155511268ad',
  //         'f17fb9d6-fdc9-4b5d-ba15-f155511268ad',
  //       ],
  //     },
  //   })
  //   console.log(data)
  // },
}
</script>
<template>
  <c-box>
    <c-simple-grid :columns="2" :spacing="'30px'">
      <product-slider />
      <product-slider />
      <compare-product />
      <compare-product />
      <compare-product-mobile />
      <compare-product-mobile />
      <compare-tab />
      <compare-tab />
    </c-simple-grid>
  </c-box>
</template>
