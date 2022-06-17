<script>
import {
  CBox,
  CHeading,
  CStack,
  CFlex,
  CIcon,
  CLink,
  CText,
  CButton,
} from '@chakra-ui/vue'

import priceSpacer from '@/helpers/price-spacer'
import CompareTabCharacteristics from '@/my-components/compare-tabs/CompareTabCharacteristics.vue'

export default {
  name: 'CompareProductMobile',

  components: {
    CBox,
    CHeading,
    CStack,
    CFlex,
    CIcon,
    CLink,
    CText,
    CButton,
    CompareTabCharacteristics,
  },

  mixins: [
    {
      methods: {
        priceSpacer,
      },
    },
  ],

  props: {
    items: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
 methods: {
    removeButton() {
      this.$store.dispatch('removeItem')
      this.$router.push('/')
    },
  },
}
</script>

<template>
  <c-box max-width="375px">
    <c-stack :spacing="'8px'" mb="22px" mt="20px">
      <c-heading
        as="h1"
        font-weight="700"
        :font-size="['12px', '15px', '18px', '22px', '25px', '28px']"
        :line-height="['14px', '21px', '27px', '34px', '40px', '48px']"
        color="color.TextColor3"
        >{{ priceSpacer(items.price.toString()) }} сум</c-heading
      >
      <c-heading
        as="h2"
        font-weight="400"
        :font-size="['10px', '13px', '17px', '20px', '24px', '28px']"
        :line-height="['15px', '21px', '28px', '34px', '42px', '48px']"
        color="color.TextColor2"
      >
        {{ items.name }}
      </c-heading>

      <c-flex>
        <c-box d="flex" align-items="center">
          <c-icon
            name="star"
            :size="['16px', '18px', '20px', '22px', '24px', '24px']"
            mr="2px"
            color="color.TextColor5"
          />
          <c-text
            :font-size="['10px', '12px', '12px', '14px', '14px', '16px']"
            :line-height="['12px', '14px', '16px', '20px', '22px', '24px']"
            color="color.TextColor5"
            >4,8</c-text
          >
        </c-box>

        <c-box d="flex" align-items="center">
          <c-icon
            name="comment"
            :size="['16px', '20px', '22px', '22px', '24px', '24px']"
            color="color.TextColor5"
            fill="transparent"
            ml="15px"
          /><c-text
            :font-size="['10px', '12px', '12px', '14px', '14px', '16px']"
            :line-height="['12px', '14px', '16px', '20px', '22px', '24px']"
            color="color.TextColor5"
          >
            26
          </c-text></c-box
        >
      </c-flex>
      <!-- 
      <c-box
        d="flex"
        align-items="center"
        justify-content="space-between"
        border="LangBorder"
        rounded="5px"
        :max-w="['80px', '107px', '134px', '161px', '188px', '215px']"
        :max-h="['20px', '35px', '50px', '65px', '75px', '96px']"
        :p="['6px', '8px', '12px', '18px', '24px', '26px']"
      > -->
      <!-- <c-link
          :href="someVariable"
          :font-size="['8px', '10px', '14px', '14px', '16px', '16px']"
          :line-height="['9px', '10px', '14px', '16px', '20px', '24px']"
          color="color.TextColor2"
          :_hover="false"
          cursor="pointer"
          >UPD Mobile</c-link
        > -->
      <!-- <c-icon name="greenTick" size="9px" color="color.greenTick" /> -->
      <!-- </c-box> -->
    </c-stack>

    <!-- <c-text
      :font-size="['8px', '10px', '12px', '14px', '16px', '16px']"
      :line-height="['14px', '16px', '18px', '20px', '22px', '24px']"
      color="color.TextColor1"
      >Внимание! Неправильно указанный номер телефона, неточный или неполный
      адрес могут привести к дополнительной задержке! Пожалуйста, внимательно
      проверяйте Ваши персональные данные при регистрации и оформлении заказа.
      Конфиденциальность ваших регистрационных данных гарантируется. <br />
      <br />
      Доставка выполняется ежедневно с 09:00 до 19:00 часов.
    </c-text> -->

    <compare-tab-characteristics
      :item="items.characteristics"
      class="character"
    />

    <c-flex align="center" justify="space-between" flex-wrap="wrap">
      <c-link
        :href="items.link"
        is-external
        height="64px"
        max-w="337px"
        w="100%"
        margin-bottom="10px"
        border="1px"
        border-color="color.BorderColor"
        rounded="12px"
        bg="color.BorderColor"
        _hover="{{}}"
        _active="{{}}"
        _focus="{{}}"
        font-weight="400"
        color="white"
        text-align="center"
        pt="20px"
      >
        Смотреть
      </c-link>

      <c-button
        align-item="center"
        variant-color="color.WhiteColor"
        border-color="color.BorderColor"
        border="1px solid"
        font-weight="400"
        rounded="12"
        _focus="none"
        color="color.InputBorder"
        cursor="pointer"
        background-color="none"
        justify-content="center"
        gap="8.5px"
        bg="transparent"
        height="64px"
        w="100%"
        class="remove__btn"
        @click="removeButton"
      >
        Отменить
      </c-button>
    </c-flex>
  </c-box>
</template>

<style lang="scss" scoped>
div {
  @media screen and(min-width: 768px) {
    display: none;
  }
}
@media screen and(min-width: 375px) {
  .remove__btn {
    padding: 34px;
  }
}
@media screen and(min-width: 320px) {
  .remove__btn {
    padding: 34px;
  }
}
</style>
