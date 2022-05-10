<script>
import { CBox, CImage, CText } from '@chakra-ui/vue'

export default {
  components: {
    CBox,
    CImage,
    CText,
  },
  props: ['data'],
}
</script>
<template>
  <c-box display="flex" mt="40px">
    <c-box>
      <c-box width="143px" height="152px" position="relative"
        ><c-image
          padding="12px 20px"
          bg="color.pocoBg"
          border-radius="12px"
          :src="require('@/assets/img/poco.png')"
          position="absolute"
          width="100%"
          height="100%"
          object-fit="fill"
        ></c-image> </c-box
    ></c-box>
    <c-box ml="20px">
      <c-text
        :mt="['0px', '0px', '6px', '2px', '2px', '2px']"
        font-family="Yandex Sans Display"
        :font-size="['10px', '13px', '16px', '19px', '20px', '20px']"
        font-weight="400"
        font-style="normal"
        :width="['initial', 'initial', 'initial', 'initial', '240px', '260px']"
        :line-height="['15px', '20px', '23px', '24px', '28px', '32px']"
        color="color.TextColor2"
        >{{ data.phoneName }}</c-text
      >
      <c-text
        color="color.TextColor4"
        font-family="Yandex Sans Display"
        :font-size="['10px', '13px', '16px', '19px', '20px', '20px']"
        font-weight="400"
        font-style="normal"
        :line-height="['15px', '20px', '23px', '24px', '28px', '32px']"
        >{{ data.payment }}</c-text
      >
      <c-text
        color="color.TextColor2"
        font-family="Yandex Sans Display"
        :font-size="['10px', '13px', '17px', '24px', '26px', '28px']"
        font-weight="700"
        font-style="normal"
        line-height="40px"
        >{{ data.price }}</c-text
      >
    </c-box>
  </c-box>
</template>

<style></style>
