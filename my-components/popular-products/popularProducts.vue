<script>
import { CThemeProvider, CSimpleGrid, CBox } from '@chakra-ui/vue'
// import ViewAll from '../../library/viewAll.vue'
import PopularProduct from './popularProduct.vue'
// import LoaderComponent from '~/library/LoaderComponent.vue'

export default {
  name: 'PopularProducts',

  components: {
    CThemeProvider,
    CSimpleGrid,
    CBox,
    PopularProduct,
    // ViewAll,
  },

  props: {
    title: {
      type: String,
      default: null,
    },

    columns: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return { loading: false }
  },

  computed: {
    isLoading() {
      return this.$store.getters.loading
    },
  },

  methods: {
    Switched(e) {
      this.$emit('switch', e.target.checked)
    },
  },
}
</script>

<template>
  <div>
    <CThemeProvider>
      <CBox
        class="popular-wrapper"
        mt="88px"
        :mb="['27px', '38px', '52px', '64px', '76px', '88px']"
      >

         <div style="margin-bottom: 20px"> <h1 class="main_header">
           {{ title }}
         </h1></div>

        <CSimpleGrid
          :columns="
            columns.length === 0 ? ['2', '3', '3', '4', '4', '5'] : columns
          "
          :spacing="['10px', '15px', '20px', '22px', '26px', '30px']"
          :rows="['1', '1', '2', '2', '3', '3']"
          justify-items="center"
          justify-content="center"
        >
          <CBox
            v-for="(item, idx) in $store.state.productsList"
            :key="idx"
            class="popular__product"
          >
            <PopularProduct :item="item" />
          </CBox>
        </CSimpleGrid>
      </CBox>

<!--      <loader-component v-if="isLoading" />-->
    </CThemeProvider>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (max-width: 350px) {
  .popular-wrapper {
    margin-top: 24px;
  }
  .main_header {
    font-size: 16px;
    line-height: 22px;
  }
}
</style>



