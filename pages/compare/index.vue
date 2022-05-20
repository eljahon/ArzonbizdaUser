<script>
import { CSimpleGrid, CBox } from '@chakra-ui/vue'
import CompareProduct from '~/my-components/comparing-component/CompareProduct.vue'
import CompareTab from '~/my-components/compare-tabs/CompareTab.vue'
import CompareProductMobile from '~/my-components/comparing-component/CompareProductMobile.vue'
// import ProductSlider from '~/my-components/product-slider/.vue'

export default {
  name: 'ComparePage',
  components: {
    CompareProduct,
    CSimpleGrid,
    CBox,
    CompareTab,
    CompareProductMobile,
  },

  mounted() {
    this.fetchItems()
    // },
    // methods: {
    //   async fetchItems() {
    //     // const query = { prs: this.$store.state.isBadge }
    //     const { data } = await this.$axios.get(
    //       'http://arzonbizda.herokuapp.com/product/compare',
    //       null,
    //       JSON.stringify({
    //         prs: [
    //           'fef225f3-08b6-4a91-a8e5-a1627f7ec23c',
    //           'fef225f3-08b6-4a91-a8e5-a1627f7ec23c',
    //         ],
    //       })
    //     )

    //     console.log(data)
    //   },
    // },
    
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
  },
}
</script>
<template>
  <c-box>
    <c-simple-grid :columns="2" :spacing="'30px'">
      <compare-product />
      <compare-product />
      <compare-product-mobile data />
      <compare-product-mobile data />
      <compare-tab />
      <compare-tab />
    </c-simple-grid>
  </c-box>
</template>
