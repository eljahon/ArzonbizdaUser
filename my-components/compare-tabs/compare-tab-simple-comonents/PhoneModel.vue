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
  <c-box :w="['100px', '100px', '170px', '210px', '280px', '300px']" p="0px">
    <c-text
      padding="0px"
      color="color.TextColor1"
      :font-size="['8px', '9px', '10px', '12px', '14px', '16px']"
      line-height="24px"
      font-family="Yandex Sans Display"
      font-weight="400"
      :mt="['10px', '12px', '14px', '16px', '22px', '24px']"
      >{{ item.value }}</c-text
    >
  </c-box>
</template>
