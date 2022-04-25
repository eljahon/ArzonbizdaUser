<script>
import { CBox, CImage, CHeading, CStack, CFlex } from '@chakra-ui/vue'
import Icon from '~/components/icon.vue'
export default {
  name: 'PopularProduct',
  components: {
    CBox,
    CImage,
    CHeading,
    CStack,
    Icon,
    CFlex,
  },
  props: ['item'],
}
</script>

<template>
  <CBox :max-w="['105px', '158px', '211px', '264px']">
    <CBox
      :py="['22px', '28px', '34px', '40px']"
      :px="['10px', '20px', '30px', '40px']"
      :rounded="['8px', '9px', '10px', '12px']"
      bg="color.ImageBgColor"
    >
      <CImage
        :src="require(`@/assets/img/${item.img}`)"
        :max-w="['86px', '116px', '146px', '176px']"
      />
    </CBox>
    <CBox>
      <CStack>
        <CBox :pt="['8px', '13px', '18px', '24px']">
          <CHeading
            as="h2"
            :font-size="['12px', '16px', '20px', '24px']"
            mb="8px"
            >{{ $t('from') }} {{ item.price }} {{ $t('currency') }}</CHeading
          >
          <CBox
            as="span"
            font-family="Yandex Sans Display"
            :font-size="['10px', '14px', '17px', '20px']"
            :line-height="['15px', '20px', '25px', '30px']"
            color="color.TextColor2"
            >{{ item.name }}</CBox
          >
        </CBox>
      </CStack>
    </CBox>
    <CBox mt="8px">
      <CFlex align="center">
        <CBox d="flex" align-items="center" font-family="Yandex Sans Display">
          <Icon name="star" />
          <CBox
            as="span"
            :font-size="['10px', '12px', '14px', '16px']"
            color="color.TextColor5"
            :ml="['3px', '4px', '6px', '7px']"
            >4,8</CBox
          >
        </CBox>
        <CBox
          d="flex"
          align-items="center"
          font-family="Yandex Sans Display"
          :ml="['15px', '20px', '25px', '30px']"
        >
          <Icon name="comment" />
          <CBox
            as="span"
            :font-size="['10px', '12px', '14px', '16px']"
            color="color.TextColor5"
            :ml="['5px', '6px', '7px', '7px']"
            >26</CBox
          >
        </CBox>
      </CFlex>
    </CBox>
  </CBox>
</template>
