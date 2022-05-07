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
          to="#"
          :_hover="{ color: 'color.BorderColor', textDecoration: false }"
          :_focus="false"
          >Телефоны</CLink
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
          >Планшеты</CLink
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
          >Телевизоры</CLink
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
          >Ноутбуки</CLink
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
          >Смарт-часы</CLink
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
          >Кондиционеры</CLink
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
          >Холодильники</CLink
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
          >Мониторы</CLink
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
          >Мониторы</CLink
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
          />Хит продаж</CLink
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
