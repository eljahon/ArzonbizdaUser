<script>
import { CBox, CGrid } from '@chakra-ui/vue'
import TabReviewsImg from '../productPageTab/TabsProducts/TabSectionBox/TabReviewsImg.vue'
export default {
  name: 'TableInformation',
  components: { CBox, CGrid, TabReviewsImg },
  props: ['item'],
  data() {
    return {
      imageURLPath: [
        { imgUrl: '1.png' },
        { imgUrl: '2.png' },
        { imgUrl: '3.png' },
      ],
    }
  },
}
</script>
<template>
  <CBox>
    <CBox display="flex" align-items="center" mt="51px">
      <CBox display="flex" align-items="center">
        <CText
          color="color.TextColor1"
          font-size="16px"
          font-family="Yandex Sans Display"
          font-weight="700"
          line-height="24px"
          >{{ item.fullName }}</CText
        >
        <CText
          ml="20px"
          color="color.TextColor1"
          font-size="16px"
          font-family="Yandex Sans Display"
          font-weight="400"
          line-height="24px"
          >{{ item.address }}</CText
        >
      </CBox>
      <CText
        ml="183px"
        color="color.TextColor4"
        font-size="14px"
        font-family="Yandex Sans Display"
        font-weight="400"
        line-height="24px"
        >{{ item.time }}</CText
      >
    </CBox>
    <CBox display="flex" align-items="center">
      <CBox>
        <CIcon name="star" width="21px" />
        <CIcon name="star" ml="4px" width="21px" />
        <CIcon name="star" ml="4px" width="21px" />
        <CIcon name="star" ml="4px" width="21px" />
        <CIcon name="star" ml="4px" width="21px" />
      </CBox>
      <CBox>
        <CText
          mt="2px"
          ml="10px"
          color="color.TextColor4"
          font-size="16px"
          font-family="Yandex Sans Display"
          font-weight="400"
          line-height="24px"
          >4</CText
        >
      </CBox>
    </CBox>
    <CGrid
      mt="22px"
      class="grid__img__box"
      width="360px"
      template-columns="repeat(3, 1fr)"
      gap="4px"
    >
      <CBox v-for="data in imageURLPath" :key="data.imgUrl">
        <tab-reviews-img :data="data" />
      </CBox>
    </CGrid>
    <CBox w="559px" mt="24px">
      <CText
        color="color.TextColor1"
        font-size="16px"
        font-family="Yandex Sans Display"
        font-weight="400"
        line-height="24px"
      >
        {{ item.description }}
        }
      </CText>
      <CText
        color="color.TextColor1"
        font-size="16px"
        mt="30px"
        font-family="Yandex Sans Display"
        font-weight="400"
        line-height="24px"
      >
        {{ item.workTime }}</CText
      >
    </CBox>
  </CBox>
</template>

<style>
@media (max-width: 522px) {
  .grid__img__box {
    width: 100%;
  }
}
</style>
