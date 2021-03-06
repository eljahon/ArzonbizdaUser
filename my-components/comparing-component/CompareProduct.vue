<script>
import { CBox, CStack, CFlex, CButton } from '@chakra-ui/vue'

import priceSpacer from '@/helpers/price-spacer'

export default {
  name: 'CompareProduct',

  components: {
    CBox,
    CStack,
    CButton,
    CFlex,
  },

  mixins: [
    {
      methods: {
        priceSpacer,
        textFormat(item) {
          if(item.length > 26) {
            return item.slice(0, 28)
          } else {
            return  item
          }
        }
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
  methods: {
    removeButton(id) {
      this.$store.dispatch('removeItem', id)
      this.$router.push('/')
    },
  },
}
</script>

<template>
  <c-box class="comparing__product">
    <c-stack :spacing="4">
      <c-heading
        as="h2"
        font-weight="400"
        :font-size="['24px', '24px', '26px', '26px', '27px', '28px']"
        :line-height="['32px', '32px', '38px', '42px', '45px', '48px']"
        color="color.TextColor2"
        >{{textFormat(item.name)}}</c-heading
      >
      <c-flex>
      </c-flex>
    </c-stack>
    <c-stack :spacing="8">
      <c-flex mt="32px" justify="space-between">
        <c-stack>
          <c-text
            font-size="20px"
            line-height="24px"
            color="color.WarningColor1"
            >{{ $t('bestPrice') }}</c-text
          >
          <c-heading
            as="h1"
            :font-size="['12px', '18px', '20px', '24px', '22px', '24px']"
            :line-height="['13px', '24px', '26px', '28px', '42px', '48px']"
            color="color.TextColor2"
            >{{ priceSpacer(item.price.toString()) }}</c-heading
          >
          <c-box
            as="span"
            font-size="14px"
            line-height="16px"
            color="color.TextColor5"
            >{{ $t('dailyUpdate') }}</c-box
          >
        </c-stack>
        <c-link
          :href="item['shop.link']"
          is-external
          width="215px"
          border="LangBorder"
          rounded="12px"
          pl="24px"
          pr="16px"
          pt="16px"
          pb="18px"
        >
          <c-flex justify="space-between">
            <c-text
              font-size="14px"
              line-height="20px"
              color="color.TextColor5"
              letter-spacing="0.02em"
              mb="18px"
              >{{ $t('magazin') }}</c-text
            >
            <c-icon name="greenTick" color="color.greenTick" size="20px" />
          </c-flex>
          <c-link
            :font-size="['8px', '10px', '14px', '14px', '16px', '16px']"
            :line-height="['9px', '10px', '14px', '16px', '20px', '24px']"
            color="color.TextColor2"
            _hover="{{}}"
            cursor="pointer"
            >{{ item['shop.name'] }}</c-link
          >
        </c-link>
      </c-flex>
      <c-box>
        <c-divider />
        <c-box
          d="flex"
          align-items="center"
          justify-content="space-between"
          flex-wrap="wrap"
        >
          <c-box
            d="flex"
            align-items="center"
            justify-content="space-between"
            ml="5px"
          >
            <c-icon name="credit_card" size="32px" />
            <c-text
              font-size="13px"
              line-height="19px"
              color="color.InputColor"
              ml="12px"
              >{{ $t('NoCredit') }}</c-text
            >
          </c-box>
          <c-box d="flex" align-items="center" ml="5px">
            <c-icon name="package" size="32px" />
            <c-text
              font-size="13px"
              line-height="19px"
              color="color.InputColor"
              ml="12px"
              >{{ $t('pickup') }}</c-text
            >
          </c-box>
          <c-box d="flex" align-items="center" ml="5px" class="fast__delivery">
            <c-icon name="fast_delivery" size="32px" />
            <c-text
              font-size="13px"
              line-height="19px"
              color="color.InputColor"
              ml="12px"
              >{{ $t('deliverDay') }}</c-text
            >
          </c-box>
        </c-box>
        <c-divider />
      </c-box>
      <c-text
        font-size="16px"
        line-height="24px"
        color="color.InputColor"
        mt="32px"
      >
        {{ $t('attention') }} <br /><br />
        {{ $t('delivery') }}
      </c-text>

      <c-stack>
        <c-text
          font-size="20px"
          line-height="24px"
          color="color.TextColor2"
          mt="32px"
          >25 {{ $t('proposals') }}</c-text
        >
        <!-- <c-text line-height="20px" color="color.WarningColor1"
          >В наличии у {{ item.compares.length }} продавцов</c-text
        > -->

        <c-flex align="center">
          <c-link
            :href="item.link"
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
          </c-link>
          <c-button
            align-item="center"
            variant-color="color.WhiteColor"
            border-color="color.BorderColor"
            border="1px solid"
            font-weight="400"
            rounded="12"
            _focus="{{}}"
            color="color.InputBorder"
            cursor="pointer"
            background-color="none"
            justify-content="center"
            gap="8.5px"
            bg="transparent"
            height="64px"
            w="100%"
            @click="removeButton(item.id)"
          >
            {{ $t('compare') }}
          </c-button>
        </c-flex>
      </c-stack>
    </c-stack>
  </c-box>
</template>
<style lang="scss" scoped>
.fast__delivery {
  @media screen and (min-width: 1250px) {
    width: 194px !important;
  }
  @media screen and(max-width: 1250px) {
    margin-top: 15px;
  }
}
.comparing__product {
  @media screen and (max-width: 767.5px) {
    display: none;
  }
}
</style>
