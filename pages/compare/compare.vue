<script>
import { CSimpleGrid, CBox } from '@chakra-ui/vue'
import CompareProduct from '~/my-components/comparing-component/CompareProduct.vue'
// import CompareTab from '~/my-components/compare-tabs/CompareTab.vue'
import CompareProductMobile from '~/my-components/comparing-component/CompareProductMobile.vue'
// import ProductSlider from '~/my-components/product-slider/.vue'
export default {
  name: 'ComparePage',
  components: {
    CompareProduct,
    CSimpleGrid,
    CBox,
    // CFlex,
    // CompareTab,
    CompareProductMobile,
  },
  async asyncData({ $axios }) {
    const arr = JSON.parse(localStorage.getItem('contrastArray'))

    const { data } = await $axios.get('/product/compare', {
      data: arr,
    })

    return {
      data: data.data.products,
      firstData: data.data.products[0],
      secondData: data.data.products[1],
    }
  },
  // methods: {
  //   async fetchItems() {
  //       // const query = { prs: this.$store.state.isBadge }
  //     // const { data } = await $axios.get("/product/compare", {data: this.prs});
  //     const data  = await this.$axios.get('/product/compare', {
  //         data: {
  //             'prs': [
  //               'f17fb9d6-fdc9-4b5d-ba15-f155511268ad',
  //               'e0f1796a-abea-43a7-bd11-a5d76d73e29f',
  //             ],
  //           },
  //         })
  //     console.log(data)
  //   },
  // },
}
</script>

<template>
  <c-box>
    //
    <!-- <c-simple-grid :columns="2" :spacing="'30px'"> -->
    <c-simple-grid :columns="2" :spacing="'30px'">
      <compare-product v-for="(item, id) in data" :key="id" :item="item" />
    </c-simple-grid>
    <compare-product-mobile />
    <compare-product-mobile />
    //
    <!-- <compare-tab />
      <compare-tab /> -->
    //
    <!-- </c-simple-grid> -->
  </c-box>
</template>
