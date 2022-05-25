<script>
import { CBox, CImage, CText, CLink } from '@chakra-ui/vue'

import priceSpacer from '@/helpers/price-spacer'

export default {
  components: {
    CBox,
    CImage,
    CText,
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
    item: {
      type: Object,
      required: true,
    },
  },

  mounted() {
    console.log(this.item)
  },
}
</script>

<template>
  <c-box display="flex" mt="40px">
    <CLink :href="item.link" is-external display="flex">
      <c-box>
        <c-box width="143px" height="152px" position="relative"
          ><c-image
            padding="12px 20px"
            bg="color.pocoBg"
            border-radius="12px"
            :src="item.images[0].src"
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
          :width="[
            'initial',
            'initial',
            'initial',
            'initial',
            '240px',
            '260px',
          ]"
          :line-height="['15px', '20px', '23px', '24px', '28px', '32px']"
          color="color.TextColor2"
          >{{ item.name }}</c-text
        >
        <c-text
          color="color.TextColor4"
          font-family="Yandex Sans Display"
          :font-size="['10px', '13px', '16px', '19px', '20px', '20px']"
          font-weight="400"
          font-style="normal"
          :line-height="['15px', '20px', '23px', '24px', '28px', '32px']"
          >Без кредита</c-text
        >
        <c-text
          color="color.TextColor2"
          font-family="Yandex Sans Display"
          :font-size="['10px', '13px', '17px', '24px', '26px', '28px']"
          font-weight="700"
          font-style="normal"
          line-height="40px"
          >{{ priceSpacer(item.price.toString()) }}</c-text
        >
      </c-box>
    </CLink>
  </c-box>
</template>

<style></style>
