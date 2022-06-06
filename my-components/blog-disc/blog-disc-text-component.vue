<script>
import { CBox, CText } from '@chakra-ui/vue'

export default {
  name: 'BlogDiscText',

  components: { CBox, CText },

  props: {
    blog: {
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
      color="color.blog__discText__Color"
      :font-size="['10px', '11px', '12px', '13px', '14px', '16px']"
      font-family="Yandex Sans Display"
      font-weight="400"
      mt="24px"
      :line-height="['16px', '18px', '20px', '21px', '22px', '24px']"
    >
      {{ blog.body }}
    </c-text>
  </c-box>
</template>

<style></style>
