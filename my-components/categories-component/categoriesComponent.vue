<template>
  <CThemeProvider>
    <CBox :mb="['30px', '49px', '68px', '88px']">
      <CFlex
        align="center"
        justify="space-between"
        :mb="['10px', '20px', '30px', '40px']"
      >
        <h1 class="main_header">Категории</h1>
        <ViewAll />
      </CFlex>

      <CSimpleGrid
        :columns="['4', '4', '4', '6']"
        rows="2"
        spacing-x="30"
        :spacing-y="['18px', '25px', '32px', '40px']"
        justify-items="center"
        justify-content="center"
      >
        <CBox
          v-for="item in categoryItem"
          :key="item"
          class="category__component"
        >
          <CategoryComponent :item="item" />
        </CBox>
      </CSimpleGrid>
    </CBox>
  </CThemeProvider>
</template>
<script>
import { CThemeProvider, CSimpleGrid, CBox } from '@chakra-ui/vue'
import CategoryComponent from '~/my-components/categories-component/categoryComponent.vue'
export default {
  name: 'CategoriesComponent',
  components: {
    CategoryComponent,
    CThemeProvider,
    CSimpleGrid,
    CBox,
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
<style lang="scss" scoped>
.category__component {
  @media screen and(max-width: 62em) {
    &:nth-child(n + 9) {
      display: none;
    }
  }
}
</style>
