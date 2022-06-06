<script>
import { CBox, CText } from '@chakra-ui/vue'
export default {
  components: { CBox, CText },

  props: {
    item: {
      type: Object || Array,
      default: null,
      required: true,
    },
  },
}
</script>

<template>
  <c-box>
    <c-text
      mt="24px"
      font-family="Yandex Sans Display"
      :font-size="['12px', '13px', '12px', '12px', '16px', '16px']"
      :line-height="['15px', '17px', '19px', '20px', '23px', '24px']"
      font-weight="700"
      font-style="normal"
      color="color.TextColor1"
      >{{ item.key }}</c-text
    >
  </c-box>
</template>

<style></style>
