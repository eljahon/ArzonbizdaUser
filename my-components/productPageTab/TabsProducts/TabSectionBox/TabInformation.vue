<script>
import { CBox, CGrid } from '@chakra-ui/vue'
import TabReviewsImg from './TabReviewsImg.vue'

export default {
  name: 'TableInformation',

  components: {
    CBox,
    CGrid,
    TabReviewsImg,
  },

  props: {
    item: {
      type: Object,
      required: true
    }
  },

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
    <CBox
      display="flex"
      align-items="center"
      :justify-content="[
        'space-between',
        'space-between',
        'space-between',
        'start',
        'start',
        'start',
      ]"
      mt="51px"
    >
      <CBox
        display="flex"
        align-items="center"
        :flex-direction="['column', 'column', 'column', 'row', 'row', 'row']"
      >
        <CText
          color="color.TextColor1"
          :font-size="['12px', '13px', '14px', '15px', '16px', '16px']"
          font-family="Yandex Sans Display"
          font-weight="700"
          :line-height="['14px', '16px', '18px', '20px', '22px', '24px']"
          >{{ item.fullname }}</CText
        >
        <CText
          :ml="['0px', '0px', '0px', '20px', '20px', '20px']"
          color="color.TextColor1"
          :font-size="['10px', '12px', '14px', '15px', '16px', '16px']"
          font-family="Yandex Sans Display"
          font-weight="400"
          line-height="24px"
          >{{ item.address }}</CText
        >
      </CBox>

      <CText
        :ml="['0px', '0px', '0px', '183px', '183px', '183px']"
        color="color.TextColor4"
        :font-size="['10px', '11px', '12px', '13px', '14px', '14px']"
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
          :font-size="['10px', '12px', '14px', '15px', '16px', '16px']"
          font-family="Yandex Sans Display"
          font-weight="400"
          line-height="24px"
          >4</CText
        >
      </CBox>
    </CBox>

    <CGrid
      :mt="['12px', '14px', '16px', '18px', '20px', '22px']"
      class="grid__img__box"
      width="360px"
      template-columns="repeat(3, 1fr)"
      gap="4px"
    >
      <CBox v-for="data in imageURLPath" :key="data.imgUrl">
        <TabReviewsImg :data="data" />
      </CBox>
    </CGrid>

    <CBox :w="['100%', '100%', '100%', '100%', '559px', '559px']" mt="24px">
      <CText
        color="color.TextColor1"
        :font-size="['10px', '12px', '14px', '15px', '16px', '16px']"
        font-family="Yandex Sans Display"
        font-weight="400"
        :line-height="['14px', '12px', '14px', '15px', '16px', '24px']"
      >
        {{ item.attention }}
      </CText>

      <CText
        color="color.TextColor1"
        :font-size="['10px', '12px', '14px', '15px', '16px', '16px']"
        mt="30px"
        font-family="Yandex Sans Display"
        font-weight="400"
        :line-height="['14px', '16px', '18px', '20px', '22px', '24px']"
      >
        {{ item.delivery__time }}</CText
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
