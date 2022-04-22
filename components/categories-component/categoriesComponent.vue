<template>
  <CThemeProvider>
    <div class="categories_list">
      <c-flex align="center" justify="space-between" mb="40px">
        <h1 class="main_header">Категории</h1>
        <view-all />
      </c-flex>

      <c-grid
        template-columns="repeat(4, minmax(52px, 215px))"
        :row-gap="['12px', '22px', '32px', '40px']"
        :column-gap="['42px', '38px', '34px', '30px']"
        justify-items="center"
      >
        <c-grid-item v-for="item in categoryItem" :key="item">
          <category-component :item="item" />
        </c-grid-item>
      </c-grid>
    </div>
  </CThemeProvider>
</template>
<script>
import { CThemeProvider, CGrid, CGridItem } from '@chakra-ui/vue'
import CategoryComponent from '~/components/categories-component/categoryComponent.vue'
import ViewAll from '~/library/ViewAll.vue'
export default {
  name: 'CategoriesComponent',
  components: {
    CategoryComponent,
    ViewAll,
    CThemeProvider,
    CGrid,
    CGridItem,
  },
  data() {
    return {
      categoryItem: [
        { img: 'category1.png' },
        { img: 'category2.png' },
        { img: 'category3.png' },
        { img: 'category4.png' },
        { img: 'category5.png' },
        { img: 'category6.png' },
        { img: 'category7.png' },
        { img: 'category8.png' },
        { img: 'category9.png' },
        { img: 'category10.png' },
        { img: 'category11.png' },
        { img: 'category12.png' },
      ],
    }
  },
}
</script>
