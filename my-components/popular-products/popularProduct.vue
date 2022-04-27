<script>
import { CBox, CImage, CHeading, CStack, CFlex, CIcon } from '@chakra-ui/vue'
export default {
  name: 'PopularProduct',
  components: {
    CBox,
    CImage,
    CHeading,
    CStack,
    CIcon,
    CFlex,
  },
  props: ['item'],
  methods: {
    openProductPage(item) {
      this.$router.push('/products/' + item)
    },
  },
}
</script>

<template>
  <CBox pb="10px">
    <CBox
      :py="['22px', '24px', '30px', '34px', '36px', '40px']"
      :px="['22px', '24px', '30px', '34px', '36px', '40px']"
      :rounded="['8px', '9px', '10px', '10px', '11px', '12px']"
      bg="color.ImageBgColor"
      cursor="pointer"
      @click="openProductPage(item)"
    >
      <CImage :src="require(`@/assets/img/${item.img}`)" />
    </CBox>
    <CBox>
      <CStack cursor="pointer">
        <CBox
          :pt="['8px', '12px', '14px', '18px', '20px', '24px']"
          @click="openProductPage(item)"
        >
          <CHeading
            as="h2"
            :font-size="['12px', '14px', '16px', '18px', '20px', '24px']"
            mb="8px"
            >{{ $t('from') }} {{ item.price }} {{ $t('currency') }}</CHeading
          >
          <CBox
            d="flex"
            align-items="center"
            font-family="Yandex Sans Display"
            :ml="['15px', '18px', '20px', '24px', '26px', '30px']"
          >
            <Icon name="comment" />

            <CBox
              as="span"
              :font-size="['10px', '11px', '12px', '13px', '14px', '16px']"
              color="color.TextColor5"
              :ml="['3px', '4px', '5px', '6px', '7px', '7px']"
              >26</CBox
            >
          </CBox>
      </CBox>
    </CBox>
    <CBox mt="8px">
      <CFlex align="center">
        <CBox d="flex" align-items="center" font-family="Yandex Sans Display">
          <CIcon
            name="star"
            color="color.iconBg"
            :size="['17px', '20px', '23px', '26px', '29px', '32px']"
          />
          <CBox
            as="span"
            :font-size="['10px', '11px', '12px', '13px', '14px', '16px']"
            color="color.TextColor5"
            :ml="['3px', '4px', '5px', '6px', '7px', '7px']"
            >4,8</CBox
          >
        </CBox>
        <CBox
          d="flex"
          align-items="center"
          font-family="Yandex Sans Display"
          :ml="['15px', '18px', '20px', '24px', '26px', '30px']"
        >
          <CIcon
            name="comment"
            color="color.iconBg"
            fill="white"
            :size="['15px', '20px', '24px', '27px', '30px', '32px']"
          />
          <CBox
            as="span"
            :font-size="['10px', '11px', '12px', '13px', '14px', '16px']"
            color="color.TextColor5"
            :ml="['3px', '4px', '5px', '6px', '7px', '7px']"
            >26</CBox
          >
        </CBox>
      </CFlex>
    </CBox>
  </CBox>
</template>
