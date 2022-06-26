<script>
import {
  CBox,
  CStack,
  CHeading,
  CFlex,
  // CDivider,
  CIcon,
  CText,
  CButton,
  CLink,
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
    // CDivider,
    CIcon,
    CText,
    CButton,
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
    items: {
      type: Object || Array,
      default: null,
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
      const data = {
        name: this.items.name,
        image: this.items.imageList[0].src,
        id: this.items.imageList[0].product_id
      }
      this.$store.dispatch('actionsIsCom', data)
        .catch((err) => {
          console.log(err);
        })
      if (this.isBadgeLength < 2) {
        this.$router.push(this.localePath('/'))
      }
    },
  },
}
</script>

<template>
  <CBox max-w="705px" pr="15px">
    <CStack>
      <CHeading
        as="h2"
        :font-size="['24px', '24px', '25px', '26px', '27px', '28px']"
        :line-height="['32px', '32px', '38px', '42px', '45px', '48px']"
        color="color.TextColor2"
        >{{ items.name }}</CHeading
      >
      <CFlex>
      </CFlex>
      <CFlex mt="32px" justify="space-between">
        <CStack>
          <CText
            font-size="20px"
            line-height="24px"
            color="color.WarningColor1"
            >{{ $t('bestPrice') }}</CText
          >
          <CHeading
            as="h1"
            font-size="36px"
            line-height="48px"
            color="color.TextColor2"
            >{{ priceSpacer(items.price.toString()) }} {{ $t('currency') }}
          </CHeading>
          <CBox
            as="span"
            font-size="14px"
            line-height="16px"
            color="color.TextColor5"
            >{{ $t('dailyUpdate') }}</CBox
          >
        </CStack>
        <CLink
          :href="items.shopLink"
          is-external
          width="215px"
          border="LangBorder"
          rounded="12px"
          pl="24px"
          pr="16px"
          pt="16px"
          pb="18px"
        >
          <CFlex justify="space-between">
            <CLink
              :href="items.shopLink"
              is-external
              font-size="14px"
              line-height="20px"
              color="color.TextColor5"
              letter-spacing="0.02em"
              mb="18px"
              >{{ $t('magazin') }}</CLink
            >
            <CIcon name="greenTick" color="color.greenTick" size="20px" />
          </CFlex>
          <CText font-size="20px" line-height="24px" color="color.TextColor2"
            >{{ items.shop }}
          </CText>
        </CLink>
      </CFlex>
      <CText
        font-size="16px"
        line-height="24px"
        color="color.InputColor"
        mt="32px"
        >{{ items.disc }} <br /><br />
        {{ $t('delivery') }}
      </CText>

      <CText
        font-size="20px"
        line-height="24px"
        color="color.TextColor2"
        mt="32px"
        >25 {{ $t('proposals') }}</CText
      >
      <CText line-height="20px" color="color.WarningColor1">
        {{ $t('availability') }} {{ items.compares.length }} {{ $t('sellers') }}
      </CText>

      <CBox d="flex" justify-content="space-between" mt="24px">
        <CLink
          :href="items.link"
          is-external
          height="64px"
          max-w="337px"
          w="100%"
          mr="30px"
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
          {{ $t('view') }}
        </CLink>

        <CButton
          height="64px"
          :disabled="isBadgeLength === 2"
          max-w="337px"
          w="100%"
          border="1px"
          border-color="color.BorderColor"
          rounded="12px"
          bg="white"
          _hover="{{}}"
          _active="{{}}"
          _focus="{{}}"
          font-weight="400"
          color="color.BorderColor"
          @click="IsComponents"
        >
          <CIcon name="compare" size="24px" mr="10px" />
          {{ $t('compare') }}
        </CButton>
      </CBox>
    </CStack>
  </CBox>
</template>
