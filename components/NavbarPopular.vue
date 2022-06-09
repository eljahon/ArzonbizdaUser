<script>
import { CBox, CLink, CIcon } from '@chakra-ui/vue'

export default {
  name: 'NavbarPopular',

  components: {
    CBox,
    CLink,
    CIcon,
  },
}
</script>

<template>
  <CBox class="navbarPopular">
    <CBox
      as="ul"
      d="flex"
      align-items="center"
      justify-content="space-between"
      py="1rem"
      border-y="LangBorder"
    >
      <CBox
        as="li"
        :font-size="['12px', '12px', '12px', '14px', '14px', '16px']"
        line-height="24px"
        color="color.InputColor"
        ><CLink
          as="router-link"
          :to="localePath({ name: 'category', params: { category: 'phones' } })"
          :hover="{ color: 'color.BorderColor', textDecoration: false }"
          :focus="false"
          >{{ $t('category_phones') }}</CLink
        ></CBox
      >
      <CBox
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
        as="li"
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
    </CBox>
  </CBox>
</template>
<style lang="scss" scoped>
.navbarPopular {
  @media screen and(max-width: 860px) {
    display: none;
  }
}
</style>
