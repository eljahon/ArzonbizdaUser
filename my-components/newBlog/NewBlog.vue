<script>
import { CThemeProvider, CBox, CSimpleGrid, CHeading } from '@chakra-ui/vue'
import NewBlogcard from '@/my-components/newBlog/NewBlogcard.vue'
export default {
  components: {
    NewBlogcard,
    CThemeProvider,
    CBox,
    CSimpleGrid,
    CHeading,
  },
  data() {
    return {
      cardsData: [
        {
          id: 1,
          imgageURL: '1.png',
          textName: 'Отличные телефоны для аккуратных парней',
        },
        {
          id: 2,
          imgageURL: '2.png',
          textName: 'Отличные телефоны для аккуратных парней',
        },
        {
          id: 3,
          imgageURL: '3.png',
          textName: 'Отличные телефоны для аккуратных парней',
        },
        {
          id: 4,
          imgageURL: '1.png',
          textName: 'Отличные телефоны для аккуратных парней',
        },
      ],
    }
  },
}
</script>

<template>
  <CThemeProvider>
    <div>
      <CHeading
        :mt="['26px','40px','60px','88px']"
        :mb="['16px','25px','32px','40px']"
        color="color.TextColor2"
        :font-size="['12px', '15px', '20px', '24px']"
        font-family="Yandex Sans Display"
        font-weight="700"
        :line-height="['16px', '18px', '20px', '24px']"
        >Новые блоги</CHeading
      >
      <CSimpleGrid
        align-items="center"
        :columns="['3', '3', '4', '4']"
        :spacing="['10px', '20px', '25px', '30px']"
      >
        <CBox
          v-for="item in cardsData"
          :key="item.id"
          width="100%"
          class="products__div"
          justify-content="center"
          align-items="center"
          display="flex"
        >
          <NewBlogcard :item="item" />
        </CBox>
      </CSimpleGrid>
    </div>
  </CThemeProvider>
</template>

<style lang="scss" scoped>
.products__div {
  @media screen and(max-width: 48em) {
    &:nth-child(n + 4) {
      display: none;
    }
  }
}
</style>
