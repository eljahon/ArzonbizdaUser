<script>
import { CThemeProvider, CGrid, CGridItem } from '@chakra-ui/vue'
import PopularProduct from './popularProduct.vue'
import ViewAll from '~/library/ViewAll.vue'
export default {
  name: 'CategoriesComponent',
  components: {
    ViewAll,
    CThemeProvider,
    CGrid,
    CGridItem,
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
    <div class="categories_list">
      <c-flex align="center" justify="space-between" mb="40px">
        <h1 class="main_header">{{$t('populargoods')}}</h1>
        <view-all />
      </c-flex>

      <c-grid
        template-columns="repeat(auto-fit, minmax(105px, 264px))"
        :row-gap="['12px', '22px', '32px', '40px']"
        :column-gap="['42px', '38px', '34px', '30px']"
        justify-items="center"
        justify-content="center"
      >
        <c-grid-item v-for="item in popular" :key="item">
          <popular-product :item="item" />
        </c-grid-item>
      </c-grid>
    </div>
  </CThemeProvider>
</template>
