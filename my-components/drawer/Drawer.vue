<script>
import { CBox, CLink, CIcon } from '@chakra-ui/vue'
import PriceRangeSlider from '../price-slider/PriceRangeSlider.vue'

export default {
  name: 'DrawerComponents',

  components: {
    CBox,
    CLink,
    CIcon,
    PriceRangeSlider,
  },

  
}
</script>

<template>
  <CBox as="div" class="navbarPopular">
    <CBox
      as="li"
      mb="20px"
      text-align="left"
      :font-size="['12px', '12px', '12px', '14px', '14px', '16px']"
      line-height="24px"
      color="color.InputBorder"
      ><CLink as="router-link" to="#" :_hover="false" :_focus="false"
        ><CIcon
          name="fire"
          mr="8px"
          color="transparent"
          pos="relative"
          bottom="2px"
        />{{ $t('hitSeller') }}</CLink
      ></CBox
    >

    <CBox as="ul" align-items="center" py="1rem" border-y="LangBorder">
      <CBox
        mb="20px"
        as="li"
        :font-size="['12px', '12px', '12px', '14px', '14px', '16px']"
        line-height="24px"
        color="color.InputColor"
        ><CLink
          as="router-link"
          to="/category"
          :_hover="{ color: 'color.BorderColor', textDecoration: false }"
          :_focus="false"
          >{{ $t('category_phones') }}</CLink
        ></CBox
      >
      <CBox
        mb="20px"
        as="li"
        :font-size="['12px', '12px', '12px', '14px', '14px', '16px']"
        line-height="24px"
        color="color.InputColor"
        ><CLink
          as="router-link"
          to="#"
          :_hover="{ color: 'color.BorderColor', textDecoration: false }"
          :_focus="false"
          >{{ $t('category_tablets') }}</CLink
        ></CBox
      >
      <CBox
        mb="20px"
        as="li"
        :font-size="['12px', '12px', '12px', '14px', '14px', '16px']"
        line-height="24px"
        color="color.InputColor"
        ><CLink
          as="router-link"
          to="#"
          :_hover="{ color: 'color.BorderColor', textDecoration: false }"
          :_focus="false"
          >{{ $t('category_tv') }}</CLink
        ></CBox
      >
      <CBox
        mb="20px"
        as="li"
        :font-size="['12px', '12px', '12px', '14px', '14px', '16px']"
        line-height="24px"
        color="color.InputColor"
        ><CLink
          as="router-link"
          to="#"
          :_hover="{ color: 'color.BorderColor', textDecoration: false }"
          :_focus="false"
          >{{ $t('category_laptops') }}</CLink
        ></CBox
      >
      <CBox
        mb="20px"
        as="li"
        :font-size="['12px', '12px', '12px', '14px', '14px', '16px']"
        line-height="24px"
        color="color.InputColor"
        ><CLink
          as="router-link"
          to="#"
          :_hover="{ color: 'color.BorderColor', textDecoration: false }"
          :_focus="false"
          >{{ $t('smart_watches') }}</CLink
        ></CBox
      >
      <CBox
        mb="20px"
        as="li"
        :font-size="['12px', '12px', '12px', '14px', '14px', '16px']"
        line-height="24px"
        color="color.InputColor"
        ><CLink
          as="router-link"
          to="#"
          :_hover="{ color: 'color.BorderColor', textDecoration: false }"
          :_focus="false"
          >{{ $t('category_ac') }}</CLink
        ></CBox
      >
      <CBox
        mb="20px"
        as="li"
        :font-size="['12px', '12px', '12px', '14px', '14px', '16px']"
        line-height="24px"
        color="color.InputColor"
        ><CLink
          as="router-link"
          to="#"
          :_hover="{ color: 'color.BorderColor', textDecoration: false }"
          :_focus="false"
          >{{ $t('category_fridge') }}</CLink
        ></CBox
      >
      <CBox
        mb="20px"
        as="li"
        :font-size="['12px', '12px', '12px', '14px', '14px', '16px']"
        line-height="24px"
        color="color.InputColor"
        ><CLink
          as="router-link"
          to="#"
          :_hover="{ color: 'color.BorderColor', textDecoration: false }"
          :_focus="false"
          >{{ $t('category_monitors') }}</CLink
        ></CBox
      >
      <CBox
        mb="20px"
        as="li"
        :font-size="['12px', '12px', '12px', '14px', '14px', '16px']"
        line-height="24px"
        color="color.InputColor"
        ><CLink
          as="router-link"
          to="#"
          :_hover="{ color: 'color.BorderColor', textDecoration: false }"
          :_focus="false"
          >{{ $t('category_monitors') }}</CLink
        ></CBox
      >
    </CBox>
    <PriceRangeSlider />
  </CBox>
</template>

<style lang="scss" scoped></style>
