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
    <CBox
      display="flex"
      align-items="center"
      :mt="['10px', '20px', '30px', '40px', '45px', '51px']"
    >
      <CBox display="flex" align-items="center">
        <CText
          color="color.TextColor1"
          :font-size="['12px', '13px', '12px', '12px', '16px', '16px']"
          font-family="Yandex Sans Display"
          font-weight="700"
          :line-height="['24px', '24px', '18px', '20px', '23px', '24px']"
          >{{ item.fullName }}</CText
        >
        <CText
          ml="20px"
          color="color.TextColor1"
          :font-size="['12px', '13px', '12px', '12px', '16px', '16px']"
          font-family="Yandex Sans Display"
          font-weight="400"
          :line-height="['24px', '24px', '18px', '20px', '23px', '24px']"
          >{{ item.address }}</CText
        >
      </CBox>
      <CText
        :ml="['183px', '183px', '87px', '160px', '173px', '183px']"
        color="color.TextColor4"
        :font-size="['12px', '13px', '12px', '12px', '14px', '14px']"
        :line-height="['24px', '24px', '18px', '20px', '23px', '24px']"
        font-family="Yandex Sans Display"
        font-weight="400"
        >{{ item.time }}</CText
      >
    </CBox>
    <CBox display="flex" align-items="center">
      <CBox>
        <CIcon name="star" width="21px" />
        <CIcon
          name="star"
          :ml="['4px', '4px', '2px', '3px', '4px', '4px']"
          :width="['21px', '15px', '17px', '19px', '20px', '21px']"
        />
        <CIcon
          name="star"
          :ml="['4px', '4px', '2px', '3px', '4px', '4px']"
          :width="['21px', '15px', '17px', '19px', '20px', '21px']"
        />
        <CIcon
          name="star"
          :ml="['4px', '4px', '2px', '3px', '4px', '4px']"
          :width="['21px', '15px', '17px', '19px', '20px', '21px']"
        />
        <CIcon
          name="star"
          :ml="['4px', '4px', '2px', '3px', '4px', '4px']"
          :width="['21px', '15px', '17px', '19px', '20px', '21px']"
        />
      </CBox>
      <CBox>
        <CText
          mt="2px"
          ml="10px"
          color="color.TextColor4"
          :font-size="['12px', '13px', '12px', '12px', '14px', '14px']"
          :line-height="['24px', '24px', '18px', '20px', '23px', '24px']"
          font-family="Yandex Sans Display"
          font-weight="400"
          >4</CText
        >
      </CBox>
    </CBox>
    <CGrid
      mt="22px"
      class="grid__img__box"
      :width="['initial', 'initial', 'initial', '360px', '360px', '360px']"
      template-columns="repeat(3, 1fr)"
      gap="4px"
    >
      <CBox v-for="data in imageURLPath" :key="data.imgUrl">
        <tab-reviews-img :data="data" />
      </CBox>
    </CGrid>
    <CBox
      :w="['initial', 'initial', 'initial', 'initial', 'initial', '559px']"
      mt="24px"
    >
      <CText
        color="color.TextColor1"
        :font-size="['12px', '13px', '12px', '12px', '16px', '16px']"
        font-family="Yandex Sans Display"
        font-weight="400"
        line-height="24px"
      >
        {{ item.description }}
      </CText>
      <CText
        color="color.TextColor1"
        :font-size="['12px', '13px', '12px', '12px', '16px', '16px']"
        :mt="['30px', '30px', '15px', '20px', '30px', '30px']"
        font-family="Yandex Sans Display"
        font-weight="400"
        :line-height="['15px', '17px', '19px', '20px', '23px', '24px']"
      >
        {{ item.workTime }}</CText
      >
    </CBox>
  </CBox>
</template>

<style></style>
