<script>
import { CText } from '@chakra-ui/vue'
export default {
  components: {
    CText,
  },
  props: ['data'],
}
</script>
<template>
  <CText
    color="color.TextColor1"
    :font-size="['8px', '9px', '10px', '12px', '14px', '16px']"
    line-height="24px"
    font-family="Yandex Sans Display"
    font-weight="700"
    :mt="['10px', '12px', '14px', '16px', '22px', '24px']"
    >{{ data.namephone }}</CText
  >
</template>

<style></style>
