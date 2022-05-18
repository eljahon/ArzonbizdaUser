<script>
import {
  CBox,
  CStack,
  CHeading,
  CFlex,
  CDivider,
  CIcon,
  CText,
  CButton,
} from '@chakra-ui/vue'

import { mapGetters } from 'vuex'
import priceSpacer from '@/helpers/price-spacer'

export default {
  name: 'ProductPage',
  components: {
    CBox,
    CStack,
    CHeading,
    CFlex,
    CDivider,
    CIcon,
    CText,
    CButton,
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
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isCom: false,
    }
  },
  computed: {
    ...mapGetters(['isBadgeLength']),
  },
  methods: {
    IsComponents() {
      this.$store.dispatch('actionsIsCom', this.$route.params.id)
      if (this.isBadgeLength < 2) {
        this.$router.push('/')
      } else if (this.isBadgeLength === 2) {
        this.$router.push('/compare')
      }
    },
  },
  // mounted() {
  //   this.$store.state.isBadge.length = 0
  // },
}
</script>

<template>
  <CBox max-w="705px">
    <CStack>
      <CHeading
        as="h2"
        :font-size="['24px', '24px', '25px', '26px', '27px', '28px']"
        :line-height="['32px', '32px', '38px', '42px', '45px', '48px']"
        color="color.TextColor2"
        >{{ items.name }}</CHeading
      >
      <CFlex>
        <CBox d="flex" align-items="center">
          <CIcon name="star" mr="5px" />
          <CIcon name="star" mr="5px" />
          <CIcon name="star" mr="5px" />
          <CIcon name="star" mr="5px" />
          <CIcon name="star" />
          <CBox
            as="span"
            ml="10px"
            mr="24px"
            font-size="16px"
            line-height="24px"
            font-weight="400"
            color="color.TextColor5"
            >4,8</CBox
          >
        </CBox>
        <CDivider orientation="vertical" border-color="color.iconBg" />
        <CBox d="flex" align-items="center">
          <CIcon
            name="comment"
            width="24px"
            height="24px"
            ml="24px"
            mr="10px"
            fill="transparent"
            color="color.TextColor5"
          />
          <CBox as="span" font-weight="400" color="color.TextColor5" mr="24px"
            >26</CBox
          >
        </CBox>
        <CDivider orientation="vertical" border-color="color.iconBg" />
        <CBox d="flex" align-items="center">
          <CIcon name="view" fill="white" size="24px" ml="24px" mr="10px" />
          <CBox as="span" font-weight="400" color="color.TextColor5"
            >16 452</CBox
          >
        </CBox>
      </CFlex>
      <CFlex mt="32px" justify="space-between">
        <CStack>
          <CText font-size="20px" line-height="24px" color="color.WarningColor1"
            >Лучшая цена</CText
          >
          <CHeading
            as="h1"
            font-size="36px"
            line-height="48px"
            color="color.TextColor2"
            >{{ priceSpacer(items.price.toString()) }} сум
          </CHeading>
          <CBox
            as="span"
            font-size="14px"
            line-height="16px"
            color="color.TextColor5"
            >Цены обновляются каждый день</CBox
          >
        </CStack>
        <CBox
          width="215px"
          border="LangBorder"
          rounded="12px"
          pl="24px"
          pr="16px"
          pt="16px"
          pb="18px"
        >
          <CFlex justify="space-between">
            <CText
              font-size="14px"
              line-height="20px"
              color="color.TextColor5"
              letter-spacing="0.02em"
              mb="18px"
              >МАГАЗИН</CText
            >
            <CIcon name="greenTick" color="color.greenTick" size="20px" />
          </CFlex>
          <CText font-size="20px" line-height="24px" color="color.TextColor2"
            >UPD Mobile</CText
          >
        </CBox>
      </CFlex>
      <CText
        font-size="16px"
        line-height="24px"
        color="color.InputColor"
        mt="32px"
        >{{ items.disc }} <br /><br />
        Доставка выполняется ежедневно с 09:00 до 19:00 часов.
      </CText>

      <CText
        font-size="20px"
        line-height="24px"
        color="color.TextColor2"
        mt="32px"
        >25 предложений</CText
      >
      <CText line-height="20px" color="color.WarningColor1">
        В наличии у {{ items.compares.length }} продавцов
      </CText>

      <CBox d="flex" justify-content="space-between" mt="24px">
        <CButton
          height="64px"
          max-w="337px"
          w="100%"
          mr="30px"
          border="1px"
          border-color="color.BorderColor"
          rounded="12px"
          bg="color.BorderColor"
          :_hover="false"
          :_active="false"
          :_focus="false"
          font-weight="400"
          color="white"
        >
          Смотреть
        </CButton>
        <CButton
          height="64px"
          :disabled="badgeLength === 2"
          max-w="337px"
          w="100%"
          border="1px"
          border-color="color.BorderColor"
          rounded="12px"
          bg="white"
          :_hover="false"
          :_active="false"
          :_focus="false"
          font-weight="400"
          color="color.BorderColor"
          @click="IsComponents"
        >
          <CIcon name="compare" size="24px" mr="10px" />
          Сравнить
        </CButton>
      </CBox>
    </CStack>
  </CBox>
</template>
