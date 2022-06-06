<script>
import {
  CBox,
  CImage,
  CHeading,
  CText,
  CButton,
  CIcon,
  CLink,
} from '@chakra-ui/vue'

import priceSpacer from '@/helpers/price-spacer'

export default {
  name: 'TabsProduct',

  components: {
    CBox,
    CImage,
    CHeading,
    CText,
    CButton,
    CIcon,
    CLink,
  },

  mixins: [
    {
      methods: {
        priceSpacer,
      },
    },
  ],

  props: {
    item: {
      type: Object || Array,
      default: null,
      required: true,
    },
  },
}
</script>

<template>
  <CBox
    v-if="item"
    :display="['block', 'block', 'block', 'block', 'flex', 'flex']"
    justify-content="space-between"
    :padding="['0px', '0px', '0px', '0px', '0px', '32px 150px 33px 32px']"
  >
    <!-- :columns="['2', '3', '3', '3', '1', '1']" -->
    <CBox :display="['block', 'block', 'block', 'block', 'flex', 'flex']">
      <CBox
        class="phone__imageBox"
        :width="['initial', 'initial', 'initial', 'initial', '194px']"
        border-radius="16px"
        padding="32px 23px"
        bg="color.pocoBg"
        display="flex"
        justify-content="center"
        align-items="center"
        :height="['110px', '110px', '240px', '250px', '190px', '196px']"
        position="relative"
      >
        <CImage
          padding="10px 23px"
          width="100%"
          height="100%"
          object-fit="contain"
          position="absolute"
          :src="item.images[0].src"
        ></CImage>
      </CBox>

      <CBox :ml="['initial', 'initial', 'initial', 'initial', '30px', '30px']">
        <CText
          class="phone__value"
          :display="['block', 'block', 'block', 'block', 'none', 'none']"
          color="color.TextColor2"
          :font-size="['12px', '15px', '18px', '22px', '25px', '28px']"
          font-family="Yandex Sans Display"
          font-weight="700"
          :line-height="['14px', '18px', '20px', '23px', '30px', '40px']"
          mt="8px"
        >
          {{ item.price }} {{ $t('sum') }}</CText
        >

        <CHeading
          color="color.TextColor2"
          class="phone__name"
          :font-size="['10px', '13px', '17px', '20px', '22px', '24px']"
          font-family="Yandex Sans Display"
          font-weight="400"
          :line-height="['15px', '20px', '25px', '30px', '35px', '40px']"
        >
          {{ item.name }}</CHeading
        >

        <CBox
          :border="['1px', '1px', '1px', '1px', 'none', 'none']"
          :border-color="[
            'color.BorderColor2',
            'color.BorderColor2',
            'color.BorderColor2',
            'color.BorderColor2',
            'none',
            'none',
          ]"
          :bg="['none', 'none', 'none', 'none', 'white', 'white']"
          :width="['100%', '100%', '100%', '200px']"
          :mt="['16px', '16px', '16px', '16px', '16px', '16px']"
          :border-radius="['4px', '6px', '8px', '10px', '14px', '16px']"
        >
          <CBox
            display="flex"
            justify-content="space-between"
            align-items="center"
            :padding="['6px', '8px', '10px', '12px', '14px', '16px']"
          >
            <CHeading
              color="color.TextColor2"
              :font-size="['8px', '10px', '10px', '18px', '19px', '20px']"
              font-family="Yandex Sans Display"
              font-weight="400"
              :line-height="['9px', '12px', '16px', '20px', '22px', '24px']"
              >{{ $t('UPDMobile') }}</CHeading
            >
            <CIcon name="green_tick" color="color.greenTick" />
          </CBox>
        </CBox>
      </CBox>
    </CBox>
    <CBox mt="20px"
      ><CText
        :display="['none', 'none', 'none', 'none', 'block', 'block']"
        color="color.TextColor4"
        font-size="20px"
        font-family="Yandex Sans Display"
        font-weight="400"
        line-height="24px"
        >{{ $t('NoCredit') }}</CText
      >
      <CText
        :display="['none', 'none', 'none', 'none', 'block', 'block']"
        color="color.TextColor2"
        :font-size="['12px', '15px', '18px', '22px', '25px', '28px']"
        font-family="Yandex Sans Display"
        font-weight="700"
        :line-height="['14px', '18px', '20px', '23px', '30px', '40px']"
        mt="8px"
      >
        {{ priceSpacer(item.price.toString()) }} {{ $t('sum') }}</CText
      >
      <CBox display="flex" aligin-items="center" mt="8px">
        <CLink
          :href="item.link"
          is-external
          :display="['none', 'none', 'none', 'none', 'block', 'block']"
          color="#FFF"
          font-size="16px"
          font-family="Yandex Sans Display"
          font-weight="400"
          line-height="24px"
          class="button"
          border="1px"
          border-style="solid"
          border-color="color.WarningColor1"
          bg="color.WarningColor1"
          border-radius="12px"
          px="48px"
          py="8px"
          :_hover="{ bg: 'white', color: 'color.WarningColor1' }"
          :_focus="{
            outline: 'none',
            color: 'color.WarningColor1',
            shadow: 'none',
            bg: 'white',
          }"
        >
          {{ $t('magazin') }}</CLink
        >
        <CBox display="flex" align-items="center">
          <CButton
            :px="['0px', '0px', '0px', '0px', '16px', '16px']"
            color="color.WarningColor1"
            :font-size="['12px', '12px', '15px', '16px', '16px', '16px']"
            font-family="Yandex Sans Display"
            font-weight="700"
            line-height="24px"
            border="none"
            bg="transparent"
            :_hover="{ bg: 'transparent' }"
            :_focus="{ outline: 'none' }"
            as="router-link"
            to="/"
            >{{ $t('more') }}</CButton
          >
          <c-box mt="12px">
            <CIcon
              :ml="['10px', '10px', '10px', '10px', '0px', '0px']"
              name="right_arrow"
              size="24px"
            />
          </c-box>
        </CBox>
      </CBox>
    </CBox>
  </CBox>
</template>

<style lang="scss" scoped>
.button:focus {
  background-color: white;
}
.phone__name {
  max-width: 250px;
}
@media (min-width: 425px) and (max-width: 474px) {
  .phone__name {
    font-size: 11px;
    line-height: 17px;
  }
  .phone__value {
    font-size: 12px;
    line-height: 16px;
  }
}
@media (min-width: 474px) and (max-width: 522px) {
  .phone__imageBox {
    height: 137px;
  }
  .phone__name {
    font-size: 11px;
    line-height: 17px;
  }
  .phone__value {
    font-size: 12px;
    line-height: 16px;
  }
}
@media (min-width: 522px) and (max-width: 588px) {
  .phone__imageBox {
    height: 150px;
  }
}
@media (min-width: 588px) and (max-width: 778px) {
  .phone__imageBox {
    height: 197px;
  }
}
@media (max-width: 374px) {
  .phone__imageBox {
    height: 140px;
  }
}
</style>
