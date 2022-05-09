<script>
import { CBox, CText } from '@chakra-ui/vue'
export default {
  components: { CBox, CText },
  props: ['data'],
}
</script>
<template>
  <c-box>
    <c-text
      mt="24px"
      font-family="Yandex Sans Display"
      font-size="16px"
      font-weight="700"
      font-style="normal"
      line-height="24px"
      color="color.TextColor1"
      >{{ data.version }}</c-text
    >
  </c-box>
</template>

<style></style>
