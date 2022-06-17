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
  <c-box padding="0">
    <c-text
      padding="0 0 0 0"
      color="color.TextColor1"
      :font-size="['8px', '9px', '10px', '12px', '14px', '16px']"
      line-height="24px"
      font-family="Yandex Sans Display"
      font-weight="700"
      >{{ item.key }}</c-text
    >
  </c-box>
</template>
